import 'dotenv/config';
import bcrypt from 'bcryptjs';
import { createCookieSessionStorage, redirect } from 'remix';
import mailgun from 'mailgun-js';


import { db } from './db.server';

type LoginForm = {
  email: string;
  password: string;
};

export async function login({ email, password }: LoginForm) {

  const user = await db.users.findUnique({
    where: { email },
  });

  if (!user) return null;

  const isCorrectPassword = await bcrypt.compare(password, user.password);

  if (!isCorrectPassword) return null;

  return { id: user.id };
}

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error('SESSION_SECRET must be set');
}

const storage = createCookieSessionStorage({
  cookie: {
    name: 'RJ_session',
    // normally you want this to be `secure: true`
    // but that doesn't work on localhost for Safari
    // https://web.dev/when-to-use-local-https/
    secure: process.env.NODE_ENV === 'production',
    secrets: [sessionSecret],
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
});

export async function createUserSession(userId: string, redirectTo: string) {
  const session = await storage.getSession();
  session.set('userId', userId);
  return redirect(redirectTo, {
    headers: {
      'Set-Cookie': await storage.commitSession(session),
    },
  });
}

export function getUserSession(request: Request) {
  return storage.getSession(request.headers.get('Cookie'));
}

export async function getUserId(request: Request) {
  const session = await getUserSession(request);
  const userId = session.get('userId');
  if (!userId || typeof userId !== 'string') return null;
  return userId;
}

export async function requireUserId(request: Request) {
  const session = await getUserSession(request);
  const userId = session.get('userId');
  if (!userId || typeof userId !== 'string') {
    throw redirect(`/login`);
  }
  return userId;
}

export async function sendEmail(email: string, firstName: string, pdfURL: string) {
  const DOMAIN = 'email.foreseewin.com';
  const mg = mailgun({
    apiKey: process.env.MAIL_API_KEY!,
    domain: DOMAIN,
  });
  const data = {
    from: "Medic Flex <postmaster@email.foreseewin.com>",
    to: email,
    subject: 'Your Test Result',
    template: 'medicflex',
    'h:X-Mailgun-Variables': {
      name: firstName,
      pdfURL: pdfURL,
    },
  };
  mg.messages().send(data, function (error, body) {
    console.log(body, "body..");
    console.log(error, "An error occured")
  });
}
