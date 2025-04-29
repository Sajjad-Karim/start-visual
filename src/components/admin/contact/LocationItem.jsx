import React from "react";
import { Field, FieldArray, useFormikContext } from "formik";

const LocationItem = ({ index, remove }) => {
  const { values, setFieldValue } = useFormikContext();
  const location = values.locations[index];

  return (
    <div className="bg-white border border-zinc-200 rounded-xl shadow-sm p-6 space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h4 className="text-lg font-bold text-gray-800">
          Location #{index + 1}
        </h4>
        <button
          type="button"
          onClick={() => remove(index)}
          className="text-red-600 cursor-pointer hover:underline text-sm"
        >
          Remove Location
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-4">
        {/* Location Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location Title (e.g., NEW YORK)
          </label>
          <Field
            name={`locations[${index}].city`}
            className="w-full border border-zinc-300 rounded p-2"
            placeholder="Location Title"
          />
        </div>
        {/* State */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            State (e.g., California)
          </label>
          <Field
            name={`locations[${index}].state`}
            className="w-full border border-zinc-300 rounded p-2"
            placeholder="e.g. California"
          />
        </div>
        {/* Zip Code */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Zip Code
          </label>
          <Field
            name={`locations[${index}].zipCode`}
            className="w-full border border-zinc-300 rounded p-2"
            placeholder="e.g. 10001"
          />
        </div>

        {/* Order */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Order
          </label>
          <Field
            type="number"
            name={`locations[${index}].order`}
            className="w-full border border-zinc-300 rounded p-2"
          />
        </div>
      </div>

      {/* Full Address (Single Textarea to Array) */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Full Address
        </label>
        <Field
          as="textarea"
          name={`locations[${index}].address[0]`}
          rows="3"
          className="w-full border border-zinc-300 rounded p-2"
          placeholder="Enter full address manually"
        />
      </div>

      {/* Phone Numbers */}
      <FieldArray name={`locations[${index}].phones`}>
        {({ push, remove }) => (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Numbers
            </label>
            {location.phones.map((_, i) => (
              <div key={i} className="flex gap-2 mb-2">
                <Field
                  name={`locations[${index}].phones[${i}]`}
                  className="flex-1 border border-zinc-300 rounded p-2"
                  placeholder="+1 212-000-0000"
                />
                <button
                  type="button"
                  onClick={() => remove(i)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => push("")}
              className="text-blue-600 text-sm hover:underline"
            >
              + Add Phone
            </button>
          </div>
        )}
      </FieldArray>

      {/* Emails */}
      <FieldArray name={`locations[${index}].email`}>
        {({ push, remove }) => (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Emails
            </label>
            {location.email.map((_, i) => (
              <div key={i} className="flex gap-2 mb-2">
                <Field
                  name={`locations[${index}].email[${i}]`}
                  className="flex-1 border border-zinc-300 rounded p-2"
                  placeholder="email@example.com"
                />
                <button
                  type="button"
                  onClick={() => remove(i)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => push("")}
              className="text-blue-600 text-sm hover:underline"
            >
              + Add Email
            </button>
          </div>
        )}
      </FieldArray>
    </div>
  );
};

export default LocationItem;
