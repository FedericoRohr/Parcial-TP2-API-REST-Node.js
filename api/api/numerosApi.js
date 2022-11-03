import { AlumnosFactoryDAO } from '../model/dao/numerosFactory.js'
import config from '../config.js' 


export class ApiNumeros {
    constructor(){
    this.numerosModel = AlumnosFactoryDAO.get(config.MODO_PERSISTENCIA)
    }

    getPromedio = async _=> {
        return await  this.numerosModel.findPromedio()
    }
    getEntrada = async _ => {
        return await  this.numerosModel.findEntrada()
    }
    getMinMax = async _=> {
        return await  this.numerosModel.findMinMax()
    }
    getCantidad = async _ => {
        return await  this.numerosModel.findCantidad()
    }

    postNumero = async (numero) => {
        return await  this.numerosModel.saveNumero(numero)
    }
}


