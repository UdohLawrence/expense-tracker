"use client";

import addTransaction from "../actions/addTransaction";

const AddTransactions = () => {
  const clientAction = async (formData: FormData) => {
    const {data, error} = await addTransaction(formData);

    if(error){
        alert(error)
    }else {
        alert('Transaction added');
        console.log(data)
    }
  };
  return (
    <>
      <h3 className="text-2xl font-semibold my-4 ">Add Transaction</h3>
      <form
        action={clientAction}
        className="max-w-xl mx-auto text-lg sm:text-xl flex flex-col items-start gap-4 p-3 sm:p-5"
      >
        
          <label htmlFor="text" className="text-lg font-semibold">Text</label>
          <input
            type="text"
            id="text"
            name="text"
            className="w-full text-slate-600 text-base sm:text-xl p-3 rounded-xl border-b" placeholder="Enter an item..."
          />
        
        
          <label htmlFor="amount" className="text-lg font-semibold">Amount</label>
          <input type="number" id="amount" name="amount" className="w-full text-slate-600 text-base sm:text-xl p-3 rounded-xl border-b" placeholder="Enter the amount"step="0.01" />

          <button className="bg-indigo-500 text-slate-200 p-3 rounded-xl w-48 border-none mt-5 mx-auto">Add Transaction</button>
        
      </form>
    </>
  );
};

export default AddTransactions;
