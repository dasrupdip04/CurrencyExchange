import React from 'react'

function InputBox({
    label,
    amount,
    amountDisabled=false,
    currencyDisabled=false,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectedCurrency="usd",
    className="",
}) {
  return (
    <div className='flex flex-row bg-gray-300/75 rounded-lg w-full relative'>
        <div className='flex flex-col justify-between w-full text-black text-bold p-5'>
            <label className='text-gray-500 text-xl mb-2'>{label}</label>
            <input 
                type="number" 
                className="bg-transparent outline-none text-black text-xl text-bold" 
                placeholder='Amount'
                value={amount} 
                disabled={amountDisabled}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            />
        </div>
        <div className='absolute right-5 top-5 flex flex-col'>
            <label htmlFor="currency-dropdown" className='text-gray-500 text-xl mb-2'>Currency Type</label>
            <select 
                className='text-black text-xl text-bold rounded-lg w-15 bg-gray-600/55' 
                value={selectedCurrency}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                disabled={currencyDisabled}
            >
                {currencyOptions.map((currency)=>(
                    <option key={currency} value={currency}>{currency}</option>
                ))}
            </select>
        </div>
    </div>
  )
}

export default InputBox