import { useEffect, useState } from "react";
import './formatCurrency.css';

function FormatCurrency() {
  const [currencyVal, setCurrencyVal] = useState('');
  const [num, setNum] = useState(0);
  const [currency, setCurrency] = useState('en-US'); // locale string

  // Add currencyOptions with locale and currency code
  const currencyOptions = [
    { label: 'USD', value: 'en-US', currencyCode: 'USD' },
    { label: 'EUR', value: 'de-DE', currencyCode: 'EUR' },
    { label: 'JPY', value: 'ja-JP', currencyCode: 'JPY' },
    { label: 'AUD', value: 'en-AU', currencyCode: 'AUD' },
    { label: 'INR', value: 'en-IN', currencyCode: 'INR' },
  ];

  useEffect(() => {
    const formatter = new Intl.NumberFormat(currency, {
      style: 'currency',
      currency: currencyOptions.find(opt => opt.value === currency)?.currencyCode || 'USD',
    });
    const formatted = formatter.format(num);
    setCurrencyVal(formatted);
  }, [num, currency]);

  const keyUpFun = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;

    if (key === 'Backspace') {
      if (num === 0) return;
      setNum(prev => Math.floor(prev / 10));
    } else if (/^[0-9]$/.test(key)) {
      setNum(prev => prev * 10 + Number(key));
    }
  };

  return (
    <>
      <h2>Currency formatter</h2>
      <div className="form-Group">
        <select
          value={currency}
          onChange={e => setCurrency(e.target.value)}
          name="currency"
          id="currency"
          className="form-control"
        >
          {currencyOptions.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <input
          value={currencyVal}
          onKeyUp={keyUpFun}
          type="text"
          readOnly
          className="form-control"
        />
      </div>
    </>
  );
}

export default FormatCurrency;