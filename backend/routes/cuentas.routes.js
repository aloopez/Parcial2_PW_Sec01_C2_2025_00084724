import { Router } from "express";

import {
    getCuentasHandler,
    getCuentasById,
    getBalanceActivo,
} from '../controllers/cuentas.controllers.js';

const router = Router();

router.get('/cuentas', getCuentasHandler);
router.get('/cuentas/:id', getCuentasById);
router.get('/cuentas/balance/activo', getBalanceActivo);

export default router;