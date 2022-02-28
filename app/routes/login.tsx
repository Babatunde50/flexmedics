import { ActionFunction, LoaderFunction, redirect, useActionData } from 'remix';
import { json } from 'remix';

import { createUserSession, getUserSession, login } from '~/utils/session.server';
import validator from 'validator';

type ActionData = {
  formError?: string;
  fieldErrors?: {
    email: string | undefined;
    password: string | undefined;
  };
  fields?: {
    email: string;
    password: string;
  };
};

const badRequest = (data: ActionData) => json(data, { status: 400 });

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const email = form.get('email');
  const password = form.get('password');
  const redirectTo = '/reservations';

  if (typeof email !== 'string' || typeof password !== 'string') {
    return badRequest({
      formError: `Form not submitted correctly.`,
    });
  }

  const fields = { email, password };
  const fieldErrors = {
    email: validator.isEmail(email) ? undefined : 'Invalid Credentials',
    password: validator.isLength(password, { min: 1 })
      ? undefined
      : 'Invalid Credentials',
  };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({ fieldErrors, fields });

  // login to get the user
  // if there's no user, return the fields and a formError
  // if there is a user, create their session and redirect to /jokes
  const user = await login({ email, password });
  console.log({ user });
  if (!user) {
    return badRequest({
      fields,
      formError: `Invalid Credentials`,
    });
  }

  return createUserSession(user.id, redirectTo);
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getUserSession(request);

  const userId = session.get('userId');

  if(userId) {
    return redirect("/reservations")
  }

  return {}
};

export default function Index() {
  const actionData = useActionData<ActionData>();

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://flexmedic.ca/wp-content/uploads/2021/03/cropped-flexMedic-logo-1.png.webp"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" method="POST" action="#">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Sign in
            </button>
            {actionData?.fieldErrors?.email || actionData?.fieldErrors?.password || actionData?.formError  ? (
            <p className="text-rose-700" role="alert" id="email-error">
              {actionData?.fieldErrors?.email || actionData?.fieldErrors?.password || actionData.formError }
            </p>
          ) : null}
          </div>
        </form>
      </div>
    </div>
  );
}
