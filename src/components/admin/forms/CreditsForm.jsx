import React from "react";

const CreditsForm = ({ values, setFieldValue }) => {
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
      <h2 className="text-xl font-semibold">Credits</h2>
      {values.credits.map((credit, index) => (
        <div key={index} className="grid md:grid-cols-3 gap-4">
          <input
            placeholder="Role"
            value={credit.role}
            onChange={(e) => updateField(index, "role", e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
          <input
            placeholder="Name"
            value={credit.name}
            onChange={(e) => updateField(index, "name", e.target.value)}
            className="w-full border rounded px-3 py-2"
          />
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Order"
              value={credit.order}
              onChange={(e) =>
                updateField(index, "order", parseInt(e.target.value))
              }
              className="w-full border rounded px-3 py-2"
            />
            {values.credits.length > 1 && (
              <button
                onClick={() => removeCredit(index)}
                className="text-red-500 text-xs"
              >
                Remove
              </button>
            )}
          </div>
        </div>
      ))}
      <div className="text-end">
        <button
          onClick={addCredit}
          type="button"
          className="bg-zinc-200 px-4 py-1 rounded text-sm"
        >
          Add Credit
        </button>
      </div>
    </div>
  );
};

export default CreditsForm;
