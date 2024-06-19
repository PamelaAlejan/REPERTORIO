import { Router } from 'express';
import { cancionera } from "../controllers/repertorio.controller.js"

const router = Router()

// PATH /repertorio

router.get('/canciones', cancionera.getcanciones)

export default router;