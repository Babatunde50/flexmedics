import { reservations } from '@prisma/client';
import { LoaderFunction, redirect, useLoaderData } from 'remix';
import { db } from '~/utils/db.server';

type LoaderData = { reservation: reservations };

export const loader: LoaderFunction = async ({ params }) => {
  const reservation = await db.reservations.findFirst({
    where: { id: params.reservationId },
  });

  if (!reservation) {
    return redirect('/reserve');
  }

  return { reservation };
};

export default function Index() {
  useLoaderData<LoaderData>();

  return (
    <div className="p-24 h-screen bg-green-400 space-y-5">
      <div className="p-5 rounded-lg border border-green-400 bg-green-300 text-green-900">
        <h2 className="font-bold text-xl pb-2"> We've received your data </h2>
        <p className="pt-2">
          We will send you your result through the email you provided. 
        </p>
      </div>
    </div>
  );
}
