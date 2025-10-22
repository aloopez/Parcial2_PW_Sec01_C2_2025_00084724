
import cuentas from '../data/cuentas';

const parseBalance = (balanceString) => {
  // Quitamos el símbolo de dólar ($) y las comas (,)
  const cleanString = balanceString.replace(/[$,]/g, ''); // entre corchetes van los caracteres a eliminar
  // la g indica que no pare en la primera coincidencia
  //y el ultimo '' indica que se reemplace por nada

  // Lo convertimos a un número flotante
  return parseFloat(cleanString);
};

const getCuentasHandler = (req, res) => {
    const query = req.query;
    const hasQuery = Object.keys(query).length > 0;

    