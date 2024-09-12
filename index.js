import Freecurrencyapi from "@everapi/freecurrencyapi-js";

const freecurrencyapi = new Freecurrencyapi(
  "fca_live_KvU2wHsajXrPP4PQnrlvDatFCpOYVewlr1IbFXnb"
);

export async function convertCurrency(formCurrency, toCurrency, units) {
  const res = await freecurrencyapi.latest({
    base_currency: formCurrency,
    currencies: toCurrency,
  });
  const multiplier = res.data[toCurrency];
  return multiplier * units;
}
