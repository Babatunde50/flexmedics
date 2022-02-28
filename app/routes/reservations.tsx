import { reservations, Status } from '@prisma/client';
import { ActionFunction, LoaderFunction, redirect, useLoaderData } from 'remix';
import Modal from 'react-modal';

import { db } from '~/utils/db.server';
import { getUserSession, requireUserId, sendEmail } from '~/utils/session.server';
import React from 'react';
import { createPDF } from '~/utils/invoice';

type LoaderData = {
  reservations: Array<reservations>;
};

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const positiveId = form.get('positive');
  const negativeId = form.get('negative');

  let updatedReservation;

  if (positiveId) {
    updatedReservation = await db.reservations.update({
      where: { id: positiveId.toString() },
      data: { status: Status.POSITIVE },
    });
  } else {
    updatedReservation = await db.reservations.update({
      where: { id: negativeId!.toString() },
      data: { status: Status.NEGATIVE },
    });
  }

  const createdPDF = await createPDF(updatedReservation);

  await db.reservations.update({
    where: { id: updatedReservation.id },
    data: { finalResult: createdPDF },
  });

  await sendEmail(updatedReservation.email, updatedReservation.firstName, createdPDF)

  return {};
};

export const loader: LoaderFunction = async ({ request }) => {

  const session = await getUserSession(request);

  const userId = session.get('userId');

  if(!userId) {
    return redirect("/login")
  }

  const data: LoaderData = {
    reservations: await db.reservations.findMany({
      orderBy: { createdAt: 'desc' },
    }),
  };

  return data;
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    height: '100%',
    minWidth: "80vh",
    overflow: 'scroll',
  },
};

Modal.setAppElement('#yourAppElement');

export default function Index() {
  const data = useLoaderData<LoaderData>();

  const [modalIsOpen, setIsOpen] = React.useState(false);

  const [currentId, setCurrentId] = React.useState('');
  const [currentImage, setCurrentImage] = React.useState('');

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div id="yourAppElement">
      <div className="my-4 px-8">
        <h1> TEST RESULTS</h1>
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Date of Birth
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Passport Number
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Phone Number
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Status
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Test Result</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data.reservations.map((reservation) => {
                      return (
                        <tr>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {reservation.firstName} {reservation.lastName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {reservation.email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {reservation.dateOfBirth}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {reservation.passportNumber}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {reservation.phoneNumber}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span
                              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                reservation.status === Status.POSITIVE
                                  ? 'bg-green-100 text-green-800'
                                  : reservation.status === Status.NEGATIVE
                                  ? 'bg-red-200 text-red-800'
                                  : 'bg-secondary-100 text-secondary-800'
                              }"`}
                            >
                              {reservation.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <span
                              onClick={() => {
                                if (reservation.finalResult) {
                                  const linkElem = document.createElement("a")
                                  linkElem.href = reservation.finalResult
                                  linkElem.target = "_blank"
                                  linkElem.download = ""
                                  linkElem.click()
                                } else {
                                  openModal();
                                  setCurrentId(reservation.id);
                                  setCurrentImage(reservation.testResult);
                                }
                              }}
                              className="text-indigo-600 hover:text-indigo-900 cursor-pointer"
                              role="button"
                            >
                              {reservation.finalResult
                                ? 'Download Result'
                                : 'View Uploaded Result'}
                            </span>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Test Result"
        >
          <img src={currentImage} className="max-w-full h-auto" height="100%" width="100%" alt="..." />
          <div className="py-2 flex">
            <form method="POST" action="/reservations">
              <input type="hidden" name="positive" value={currentId} />
              <button
                type="submit"
                className="inline-block mr-2 px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Mark Positive
              </button>
            </form>
            <form method="POST" action="/reservations">
              <input type="hidden" name="negative" value={currentId} />
              <button
                type="submit"
                className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Mark Negative
              </button>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
}
