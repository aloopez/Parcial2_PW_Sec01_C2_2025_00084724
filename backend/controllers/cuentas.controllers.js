
import { cuentas }from '../data/cuentas.js';

const parseBalance = (balanceString) => {
    if (!balanceString) return 0;
  // Quitamos el símbolo de dólar ($) y las comas (,)
  const cleanString = balanceString.replace(/[$,]/g, ''); // entre corchetes van los caracteres a eliminar
  // la g indica que no pare en la primera coincidencia, que sea global
  // y el ultimo '' indica que se reemplace por nada

  // convertimos el string limpio a número flotante
  return parseFloat(cleanString);
};

export const getCuentasHandler = (req, res) => {    
    const queryParams = req.query; // es un objeto de express que contiene lo que viene luego del ?
    const hasQuery = Object.keys(queryParams).length > 0;

    if (hasQuery) {
        const key = Object.keys(queryParams)[0];
        const value = queryParams[key];

        // Validar que la clave sea válida
        const validKeys = ['_id', 'client', 'gender'];
        if (!validKeys.includes(key)) {
            return res.status(400).json({ error: 'Parametro no valido' });
        }

        const results = cuentas.filter(cuenta => cuenta[key] === value);

        switch (results.length) {
            case 0:
                return res.json({ finded: false });
            case 1:
                return res.json({ finded: true, account: results[0] });
            default:
                return res.json({ finded: true, data: results });
        }
    } else { // si la url no tiene query params es decir /cuentas
        return res.json({
            count:cuentas.length,
             data: cuentas });
    }
};

export const getCuentasById = (req, res) => {
    const { id } = req.params;
    const account = cuentas.find(cuenta => cuenta._id === id);

    if (account) {
        return  res.json({ finded: true, account });
    } else {
        return res.json({ finded: false });
    }
};

export const getBalanceActivo = (req, res) => {
   const activeAccounts = cuentas.filter(cuenta => cuenta.isActive === true); 

    const status = activeAccounts.length > 0;

    const totalBalance = activeAccounts.reduce((acc, cuenta) => {
        return acc + parseBalance(cuenta.balance);
    }, 0);

    return res.json({
        status,
        totalBalance
    });
}

    