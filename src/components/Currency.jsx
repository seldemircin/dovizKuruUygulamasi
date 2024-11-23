import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";
import Result from "./Result";
import axios from "axios";

const base_url =
  "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_QU1JBIKWYt46dRVSjQVPMCMn5EYr090XxcV19HNx";

function Currency() {
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [isExchangeButton, setIsExhangeButton] = useState(false);

  const handleExhangeForm = async (e) => {
    e.preventDefault();

    const response = await axios.get(
      `${base_url}&base_currency=${fromCurrency}`
    );
    const result = (amount * response.data.data[toCurrency]).toFixed(2);
    setResult(result);
    setIsExhangeButton(true);
  };

  return (
    <div className="container d-flex justify-content-center  mt-3">
      <div className="card" style={{ backgroundColor: "rgb(20,20,20)" }}>
        <div className="card-header">
          <div className="card-title text-center text-primary">
            <h4 className="mt-3">Exchange Rate Application</h4>
          </div>
        </div>
        <div className="card-body">
          <form
            action=""
            className="d-flex justify-content-center align-items-center"
            onSubmit={handleExhangeForm}
          >
            <input
              type="number"
              className="form-control w-auto me-2 border-0"
              style={{ backgroundColor: "rgb(46,46,46)" }}
              placeholder="Enter the amount."
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value);
              }}
            />
            <select
              className="form-select w-auto me-2"
              onChange={(e) => {
                setFromCurrency(e.target.value);
                setIsExhangeButton(false);
              }}
              value={fromCurrency}
            >
              <option>USD</option>
              <option>EUR</option>
              <option>TRY</option>
            </select>
            <p className="me-2 m-0 text-white">
              <FaArrowRightLong />
            </p>
            <select
              className="form-select w-auto me-2"
              onChange={(e) => {
                setToCurrency(e.target.value);
                setIsExhangeButton(false);
              }}
              value={toCurrency}
            >
              <option>USD</option>
              <option>EUR</option>
              <option>TRY</option>
            </select>
            <button type="submit" className="btn btn-success">
              Calculate
            </button>
          </form>
        </div>
        {isExchangeButton && (
          <div className="card-footer">
            <Result result={result} toCurrency={toCurrency} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Currency;
