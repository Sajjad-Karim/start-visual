// CreditsForm.jsx

import React, { useState } from "react";
import { FieldArray, Formik } from "formik";

const CreditsForm = () => {
  const [showFields, setShowFields] = useState(true);

  return (
    <Formik
      initialValues={{ credits: [{ role: "", name: "", order: 0 }] }}
      onSubmit={(values) => {
        console.log("credits:", values.credits);
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <form
          onSubmit={handleSubmit}
          className="bg-white border border-zinc-200 rounded-xl shadow-sm p-4 space-y-6"
        >
          <h2 className="text-lg font-semibold text-zinc-900">
            Project Credits
          </h2>

          <FieldArray name="credits">
            {({ push, remove }) => (
              <div className="space-y-4">
                {showFields &&
                  values.credits.map((credit, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center"
                    >
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Role
                        </label>
                        <input
                          type="text"
                          name={`credits[${index}].role`}
                          placeholder="e.g. Photographer"
                          value={credit.role}
                          onChange={handleChange}
                          className="border px-3 py-1 rounded w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Name
                        </label>
                        <input
                          type="text"
                          name={`credits[${index}].name`}
                          placeholder="Name"
                          value={credit.name}
                          onChange={handleChange}
                          className="border px-3 py-1 rounded w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Order
                        </label>
                        <div className="flex space-x-2">
                          <input
                            type="number"
                            name={`credits[${index}].order`}
                            placeholder="Order"
                            value={credit.order}
                            onChange={handleChange}
                            className="border px-3 py-1 rounded w-full"
                          />
                          {values.credits.length > 1 && (
                            <button
                              type="button"
                              onClick={() => remove(index)}
                              className="bg-red-100 text-red-700 text-xs px-2 rounded"
                            >
                              Remove
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                <div className="text-end">
                  <button
                    type="button"
                    onClick={() => {
                      setShowFields(true);
                      push({ role: "", name: "", order: 0 });
                    }}
                    className="mt-2 cursor-pointer bg-zinc-100 text-black hover:bg-zinc-300 px-4 py-1 text-sm rounded"
                  >
                    Add More
                  </button>
                </div>
              </div>
            )}
          </FieldArray>

          <div className="">
            <button
              type="submit"
              className="bg-zinc-900 cursor-pointer text-white px-5 py-2 rounded hover:bg-zinc-800 text-sm"
            >
              Save Credits
            </button>
          </div>
        </form>
      )}
    </Formik>
  );
};

export default CreditsForm;
