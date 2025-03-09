import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import InputBox from './components/Inputbox'
import useCurrencyInfo from './hooks/UseCurrenxyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const[from, setFrom] = useState("usd")
  const[to, setTo] = useState("inr")
  const[convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const convert = () => {
    setConvertedAmount(amount*currencyInfo[to]);
  }

  return (
    <>
      <div 
        className='w-full min-h-screen flex flex-col justify-center items-center'
        style={{
          backgroundImage: `url('https://img.freepik.com/free-vector/financial-chart-globe-background-forex-trading-stock-market_1017-44838.jpg?ga=GA1.1.1586268189.1741116651&semt=ais_hybrid')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="w-1/2 h-1/2 bg-gray-500/50 rounded-lg p-5 backdrop-blur-sm flex flex-col justify-between items-center gap-4">
          <InputBox 
            label="From" 
            amount={amount}
            onAmountChange={setAmount}
            currencyOptions={options}
            onCurrencyChange={(currency)=>setFrom(currency)}
            selectedCurrency={from}
          />
          <InputBox
            label="To"
            amount={convertedAmount}
            onAmountChange={setAmount}
            currencyOptions={options}
            onCurrencyChange={(currency)=>setTo(currency)}
            selectedCurrency={to}
          />
        </div>
        <div className='w-1/2 h-1/2 bg-gray-500/50 rounded-lg p-5 backdrop-blur-sm flex flex-col justify-between items-center gap-4'>
          <button 
          onClick={convert}
          className='bg-blue-600 p-7 text-white px-4 py-2 rounded-md w-1/2 hover:bg-blue-700 hover:scale-105 transition-all duration-300'>Convert {from} to {to}</button>
        </div>
      </div>
    </>
  )
}

export default App
