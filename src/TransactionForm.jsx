// TransactionForm.jsx
import React, { useState, useEffect } from 'react';

// Default state for a new transaction
const defaultFormData = {
  stoneLevel: 'Charlene Reed',
  size: '2x2',
  quantity: 100,
  area: 'San Jose, California, USA',
  to: 'Self', // 'Self' or 'Third Party'
  thirdPartyName: '',
  mobileNumber: '',
  modeOfPayment: '',
  amount: 0,
};

// --- HELPER COMPONENT (Robust function definition) ---
// This function definition should be safe from all syntax ambiguity.
function RenderInput({ label, name, type = 'text', options, formData, handleChange }) {
  return (
    <div className="flex flex-col space-y-1"> 
      <label htmlFor={name} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      {options ? (
        <select
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded-md appearance-none focus:ring-green-500 focus:border-green-500"
        >
          {options.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={formData[name]}
          onChange={handleChange}
          className="p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
        />
      )}
    </div>
  );
}


// --- MAIN COMPONENT ---
const TransactionForm = ({ initialData, onClose, authToken, API_BASE_URL }) => {
  const isEditing = !!initialData;
  const [formData, setFormData] = useState(defaultFormData);
  const [saving, setSaving] = useState(false);

  // Load initial data for editing
  useEffect(() => {
    if (isEditing && initialData) {
      setFormData(initialData);
    } else {
      setFormData(defaultFormData);
    }
  }, [initialData, isEditing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    const method = isEditing ? 'PUT' : 'POST';
    const url = isEditing ? `${API_BASE_URL}/${formData.id}` : API_BASE_URL;

    try {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`,
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `API call failed with status ${response.status}`);
        }

        alert(`Transaction successfully ${isEditing ? 'updated' : 'created'}!`);
        onClose(true); // Close and signal the parent component (Mines.js) to re-fetch
        
    } catch (error) {
        alert(`Error: Could not save transaction. ${error.message}`);
        console.error("Form API submission error:", error);
    } finally {
        setSaving(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-lg mx-auto transform transition-all duration-300">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        {isEditing ? '✏️ Edit Transaction' : '➕ Add Transaction'}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <RenderInput 
            label="Stone Level" name="stoneLevel" type="select" 
            options={['Charlene Reed', 'Level B', 'Level C']} 
            formData={formData} handleChange={handleChange}
        />
        
        <div className="grid grid-cols-2 gap-4">
            <RenderInput 
                label="Size" name="size" type="select" 
                options={['2x2', '4x4', '6x6']} 
                formData={formData} handleChange={handleChange}
            />
            <RenderInput 
                label="Quantity" name="quantity" type="number" 
                formData={formData} handleChange={handleChange}
            />
        </div>
        
        <RenderInput label="Area" name="area" formData={formData} handleChange={handleChange} />
        
        <RenderInput 
            label="To" name="to" type="select" 
            options={['Self', 'Third Party']} 
            formData={formData} handleChange={handleChange}
        />

        {formData.to === 'Third Party' && (
          <>
            <div className="grid grid-cols-2 gap-4 border-t pt-4">
                <RenderInput label="Third party name" name="thirdPartyName" formData={formData} handleChange={handleChange} />
                <RenderInput label="Mobile number" name="mobileNumber" type="tel" formData={formData} handleChange={handleChange} />
            </div>
            <div className="grid grid-cols-2 gap-4">
                <RenderInput label="Mode of payment" name="modeOfPayment" formData={formData} handleChange={handleChange} />
                <RenderInput label="Amount" name="amount" type="number" formData={formData} handleChange={handleChange} />
            </div>
          </>
        )}
        
        <div className="flex justify-end space-x-3 pt-4">
          <button 
            type="button" 
            onClick={() => onClose(false)} 
            disabled={saving}
            className="px-6 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 transition disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="px-6 py-2 text-sm font-medium text-white bg-green-700 rounded-lg hover:bg-green-800 transition disabled:opacity-50"
          >
            {saving ? 'Saving...' : (isEditing ? 'Update' : 'Save')}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;