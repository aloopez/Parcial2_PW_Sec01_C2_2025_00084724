import { Router } from "express";

import {
    getCuentasHandler,
    getCuentasById,
    getBalanceActivo,
} from '../controllers/cuentas.controllers.js';

const router = Router();

router.get('/cuentas', getCuentasHandler);
router.get('/cuenta/:id', getCuentasById);
router.get('/cuentasBalance', getBalanceActivo);

export default router;