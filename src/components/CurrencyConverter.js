import React from "react";
import { price } from "../utils/currencies_prices";
import axios from "axios";

export default function CurrencyConverter({ text }) {
  const app_id = "5bf70ec3daf54298ae25d4db67dcb999";
  let options = {
    method: "GET",
    url: `https://openexchangerates.org/api/latest.json?app_id=${app_id}&base=VND`,
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return <></>;
}
