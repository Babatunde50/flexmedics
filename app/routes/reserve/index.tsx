import { useActionData, json, redirect } from 'remix';
import type { ActionFunction } from 'remix';
import { useDropzone } from 'react-dropzone';

import validator from 'validator';

import { db } from '~/utils/db.server';
import { useCallback, useState } from 'react';
import { Status } from '@prisma/client';

type ActionData = {
  formError?: string;
  fieldErrors?: {
    email: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    dateOfBirth: string | undefined;
    passportNumber: string | undefined;
    phoneNumber: string | undefined;
    testResult: string | undefined;
  };
  fields?: {
    email: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    passportNumber: string;
    phoneNumber: string;
    testResult: string;
  };
};

const badRequest = (data: ActionData) => json(data, { status: 400 });

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const lastName = form.get('lastName');
  const firstName = form.get('firstName');
  const dateOfBirth = form.get('dateOfBirth');
  const phoneNumber = form.get('phoneNumber');
  const email = form.get('email');
  const gender = form.get('gender');
  const passportNumber = form.get('passportNumber');
  const testResult = form.get('testResult');

  if (
    typeof lastName !== 'string' ||
    typeof firstName !== 'string' ||
    typeof dateOfBirth !== 'string' ||
    typeof phoneNumber !== 'string' ||
    typeof passportNumber !== 'string' ||
    typeof testResult !== 'string' ||
    typeof email !== 'string' ||
    typeof gender !== "string"
  ) {
    return badRequest({
      formError: `Form not submitted correctly.`,
    });
  }

  const fieldErrors = {
    lastName: lastName.length < 2 ? 'Last Name is too short' : undefined,
    firstName: firstName.length < 2 ? 'First Name is too short' : undefined,
    dateOfBirth:
      dateOfBirth.length < 2 ? 'Date of Birth is too short' : undefined,
    phoneNumber:
      phoneNumber.length < 2 ? 'Phone Number is too short' : undefined,
    testResult: validator.isDataURI(testResult)
      ? undefined
      : 'Not a valid image',
    passportNumber: validator.isLength(passportNumber, { min: 4,  })
      ? undefined
      : 'Passport Number is too short',
    email: validator.isEmail(email) ? undefined : 'Invalid Email Address',
  };

  const fields = {
    lastName,
    firstName,
    dateOfBirth,
    phoneNumber,
    testResult,
    passportNumber,
    email,
    gender
  };

  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors, fields });
  }

  const reservation = await db.reservations.create({
    data: { ...fields, status: Status.PENDING },
  });

  return redirect(`/reserve/${reservation.id}`);
};

export default function Index() {
  const actionData = useActionData<ActionData>();
  const [resultImage, setResultImage] = useState('');
  const [ fileName, setFileName ] = useState("")

  const onDrop = useCallback((acceptedFiles: any[]) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();
      setFileName(file.name)

      reader.onabort = () => console.log('file reading was aborted');
      reader.onerror = () => console.log('file reading has failed');
      reader.onload = () => {
        const binaryStr = reader.result as string;
        setResultImage(binaryStr);
      
      };
      reader.readAsDataURL(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  console.log('reserve...');

  return (
    <div className="mt-16 max-w-screen-lg mx-auto">
      <img
        className="mx-auto h-12 w-auto"
        src="https://flexmedic.ca/wp-content/uploads/2021/03/cropped-flexMedic-logo-1.png.webp"
        alt="Workflow"
      />
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Provide your information
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Use a permanent address where you can receive mail.
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form action="/reserve?index" method="POST">
            <div className="shadow-md overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    E-Mail
                  </label>
                  <input
                    type="email"
                    defaultValue={actionData?.fields?.email}
                    aria-invalid={
                      Boolean(actionData?.fieldErrors?.email) || undefined
                    }
                    aria-describedby={
                      actionData?.fieldErrors?.email ? 'email-error' : undefined
                    }
                    style={{
                      borderColor: Boolean(actionData?.fieldErrors?.email)
                        ? 'red'
                        : '',
                    }}
                    name="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {actionData?.fieldErrors?.email ? (
                    <p className="text-rose-700" role="alert" id="email-error">
                      {actionData.fieldErrors.email}
                    </p>
                  ) : null}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    defaultValue={actionData?.fields?.firstName}
                    aria-invalid={
                      Boolean(actionData?.fieldErrors?.firstName) || undefined
                    }
                    style={{
                      borderColor: Boolean(actionData?.fieldErrors?.firstName)
                        ? 'red'
                        : '',
                    }}
                    aria-describedby={
                      actionData?.fieldErrors?.firstName
                        ? 'firstName-error'
                        : undefined
                    }
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {actionData?.fieldErrors?.firstName ? (
                    <p
                      className="text-rose-700"
                      role="alert"
                      id="firstName-error"
                    >
                      {actionData.fieldErrors.firstName}
                    </p>
                  ) : null}
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    defaultValue={actionData?.fields?.lastName}
                    aria-invalid={
                      Boolean(actionData?.fieldErrors?.lastName) || undefined
                    }
                    style={{
                      borderColor: Boolean(actionData?.fieldErrors?.lastName)
                        ? 'red'
                        : '',
                    }}
                    aria-describedby={
                      actionData?.fieldErrors?.lastName
                        ? 'lastName-error'
                        : undefined
                    }
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {actionData?.fieldErrors?.lastName ? (
                    <p
                      className="text-rose-700"
                      role="alert"
                      id="lastName-error"
                    >
                      {actionData.fieldErrors.lastName}
                    </p>
                  ) : null}
                </div>
                <div className='mb-4'> 
                  <label
                      htmlFor="dateOfBirth"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Gender
                    </label>
                    <select name="gender" className='w-full border bg-white rounded px-3 py-2 outline-none shadow' >
                      <option value="Male"> Male</option>
                      <option value="Female" > Female </option>
                    </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="dateOfBirth"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    id="dateOfBirth"
                    style={{
                      borderColor: Boolean(actionData?.fieldErrors?.dateOfBirth)
                        ? 'red'
                        : '',
                    }}
                    defaultValue={actionData?.fields?.dateOfBirth}
                    aria-invalid={
                      Boolean(actionData?.fieldErrors?.dateOfBirth) || undefined
                    }
                    aria-describedby={
                      actionData?.fieldErrors?.dateOfBirth
                        ? 'dateOfBirth-error'
                        : undefined
                    }
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {actionData?.fieldErrors?.dateOfBirth ? (
                    <p
                      className="text-rose-700"
                      role="alert"
                      id="dateOfBirth-error"
                    >
                      {actionData.fieldErrors.dateOfBirth}
                    </p>
                  ) : null}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="passportNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Passport Number
                  </label>
                  <input
                    type="text"
                    name="passportNumber"
                    id="passportNumber"
                    defaultValue={actionData?.fields?.passportNumber}
                    style={{
                      borderColor: Boolean(
                        actionData?.fieldErrors?.passportNumber
                      )
                        ? 'red'
                        : '',
                    }}
                    aria-invalid={
                      Boolean(actionData?.fieldErrors?.passportNumber) ||
                      undefined
                    }
                    aria-describedby={
                      actionData?.fieldErrors?.passportNumber
                        ? 'passportNumber-error'
                        : undefined
                    }
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {actionData?.fieldErrors?.passportNumber ? (
                    <p
                      className="text-rose-700"
                      role="alert"
                      id="passportNumber-error"
                    >
                      {actionData.fieldErrors.passportNumber}
                    </p>
                  ) : null}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phoneNumber"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    defaultValue={actionData?.fields?.phoneNumber}
                    aria-invalid={
                      Boolean(actionData?.fieldErrors?.phoneNumber) || undefined
                    }
                    style={{
                      borderColor: Boolean(actionData?.fieldErrors?.phoneNumber)
                        ? 'red'
                        : '',
                    }}
                    aria-describedby={
                      actionData?.fieldErrors?.phoneNumber
                        ? 'phoneNumber-error'
                        : undefined
                    }
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {actionData?.fieldErrors?.phoneNumber ? (
                    <p
                      className="text-rose-700"
                      role="alert"
                      id="phoneNumber-error"
                    >
                      {actionData.fieldErrors.phoneNumber}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Test Result
                  </label>
                  <div
                    {...getRootProps()}
                    className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md"
                    style={{
                      borderColor: Boolean(actionData?.fieldErrors?.testResult)
                        ? 'red'
                        : '',
                    }}
                  >
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input {...getInputProps()} accept="image/*" />
                          <input
                            type="hidden"
                            value={resultImage}
                            name="testResult"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PNG, JPG, GIF up to 10MB
                      </p>
                      { fileName && <p> {fileName} </p> }
                    </div>
                  </div>
                </div>
                {actionData?.fieldErrors?.testResult ? (
                  <p
                    className="text-rose-700"
                    role="alert"
                    id="testResult-error"
                  >
                    {actionData.fieldErrors.testResult}
                  </p>
                ) : null}
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
