import React from 'react';
import { FieldArray } from 'formik';
import LocationItem from './LocationItem';

const LocationList = ({ values }) => (
  <section className="bg-white border border-zinc-200 rounded-xl shadow-sm  p-6 space-y-6">
    <h3 className="text-xl font-semibold text-gray-700 mb-6">
      Office Locations
    </h3>
    <FieldArray name="locations">
      {({ push, remove }) => (
        <div className="space-y-6">
          {values?.locations?.map((_, index) => (
            <LocationItem key={index} index={index} remove={remove} />
          ))}
          <div className="pt-2">
            <button
              type="button"
              onClick={() =>
                push({
                  city: '',
                  address: [''],
                  phones: [''],
                  zipCode: '',
                  email: [''],
                  order: values.locations.length + 1,
                })
              }
              className="text-green-700 cursor-pointer hover:underline font-medium text-sm"
            >
              + Add New Location
            </button>
          </div>
        </div>
      )}
    </FieldArray>
  </section>
);

export default LocationList;
