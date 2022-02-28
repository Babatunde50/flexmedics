import { reservations } from '@prisma/client';
import { LoaderFunction, redirect, useLoaderData } from 'remix';

import { getUserSession } from '~/utils/session.server';

type LoaderData = {
  reservations: Array<reservations>;
};

export const loader: LoaderFunction = async ({ request }) => {
  const session = await getUserSession(request);

  if (session.id) {
    return redirect('/reservations');
  } else {
    return redirect('/reserve');
  }
};

export default function Index() {
  useLoaderData<LoaderData>();
  return <div />;
}
