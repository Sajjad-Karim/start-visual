import React from "react";

const CreditsForm = ({ values, setFieldValue, errors, touched }) => {
  const updateField = (i, key, val) => {
    const updated = [...values.credits];
    updated[i][key] = val;
    setFieldValue("credits", updated);
  };

  const addCredit = () => {
    setFieldValue("credits", [
      ...values.credits,
      { role: "", name: "", order: 0 },
    ]);
  };

  const removeCredit = (index) => {
    const updated = values.credits.filter((_, i) => i !== index);
    setFieldValue("credits", updated);
  };

  return (
    <div className="bg-white border rounded-xl p-6 space-y-6">
      <h2 className="text-xl font-semibold text-zinc-900">Project Credits</h2>

      {values.credits.map((credit, index) => (
        <div key={index} className="grid md:grid-cols-3 gap-4">
          {/* Role */}
          <div>
            <label className="block text-sm font-medium mb-1">Role</label>
            <input
              placeholder="e.g. Photographer"
              value={credit.role}
              onChange={(e) => updateField(index, "role", e.target.value)}
              className="w-full border rounded px-3 py-2 text-sm"
            />
            {errors?.credits?.[index]?.role &&
              touched?.credits?.[index]?.role && (
                <div className="text-sm text-red-500 mt-1">
                  {errors.credits[index].role}
                </div>
              )}
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              placeholder="e.g. John Doe"
              value={credit.name}
              onChange={(e) => updateField(index, "name", e.target.value)}
              className="w-full border rounded px-3 py-2 text-sm"
            />
            {errors?.credits?.[index]?.name &&
              touched?.credits?.[index]?.name && (
                <div className="text-sm text-red-500 mt-1">
                  {errors.credits[index].name}
                </div>
              )}
          </div>

          {/* Order */}
          <div>
            <label className="block text-sm font-medium mb-1">Order</label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="e.g. 1"
                value={credit.order}
                onChange={(e) =>
                  updateField(index, "order", parseInt(e.target.value))
                }
                className="w-full border rounded px-3 py-2 text-sm"
              />
              {values.credits.length > 1 && (
                <button
                  onClick={() => removeCredit(index)}
                  className="text-red-500 text-xs"
                  type="button"
                >
                  Remove
                </button>
              )}
            </div>
            {errors?.credits?.[index]?.order &&
              touched?.credits?.[index]?.order && (
                <div className="text-sm text-red-500 mt-1">
                  {errors.credits[index].order}
                </div>
              )}
          </div>
        </div>
      ))}

      {/* Add More Button */}
      <div className="text-end">
        <button
          onClick={addCredit}
          type="button"
          className="bg-zinc-200 hover:bg-zinc-300 px-4 py-1 rounded text-sm text-zinc-800"
        >
          Add Credit
        </button>
      </div>
    </div>
  );
};

export default CreditsForm;
