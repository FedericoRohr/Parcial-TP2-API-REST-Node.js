import express from 'express'
import { ControladorNumeros } from '../controller/numerosController.js'

const router = express.Router()

export class RouterNumeros {
    constructor() {
      this.controladorNumeros = new ControladorNumeros()
    }
    start() {
       
        router.post('/entrada', this.controladorNumeros.postNumero)

        router.get('/entrada', this.controladorNumeros.getEntrada)

        router.get('/promedio', this.controladorNumeros.getPromedio)

        router.get('/minmax', this.controladorNumeros.getMinMax)

        router.get('/cantidad', this.controladorNumeros.getCantidad)

        return router
    }
}



