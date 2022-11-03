import { ApiNumeros } from "../api/numerosApi.js"


export class ControladorNumeros {
    constructor(){
     this.apiNumero = new ApiNumeros()
    }

    getEntrada = async (req,res) => {
        res.json(await  this.apiNumero.getEntrada() )
    }

    getPromedio = async (req,res) => {
        res.json(await  this.apiNumero.getPromedio() )
    }

    getMinMax= async (req,res) => {
        res.json(await  this.apiNumero.getMinMax() )
    }
    
    getCantidad = async (req,res) => {
        res.json(await  this.apiNumero.getCantidad() )
    }
    
    
    postNumero = async  (req,res) => {
        const numero = req.body
        res.json(await  this.apiNumero.postNumero(numero))
    
    }
    
}

