import CnxMongoDb from "../db.js"


export class NumerosMongoDao {

    constructor() {

    }

    findEntrada = async () => {
        if (!CnxMongoDb.conection) return []
        try {
            let numeros = await CnxMongoDb.db.collection('numeros').find({}).toArray()
            let numerosLimpios=[]
            numeros.forEach(numero => numerosLimpios.push(numero.numero))
            return {numeros:numerosLimpios}
        } catch (err) {
            console.log(err)
        }

    }


    findMinMax = async () => {
        if (!CnxMongoDb.conection) return []
        try {
            let numerosOrdenados = await CnxMongoDb.db.collection('numeros').find({}).sort({numero:-1}).toArray()
            let numMayor = numerosOrdenados[0].numero
            let numMenor = numerosOrdenados[numerosOrdenados.length-1].numero 
            return {min:numMenor,max:numMayor ,}
        } catch (err) {
            console.log(err)
        }

    }


    findCantidad = async () => {
        if (!CnxMongoDb.conection) return []
        try {
            let numeros = await CnxMongoDb.db.collection('numeros').find({}).toArray()
            return {cantidad : numeros.length}
        } catch (err) {
            console.log(err)
        }

    }

    findPromedio = async () => {
        if (!CnxMongoDb.conection) return []
        try {
            let numeros = await CnxMongoDb.db.collection('numeros').find({}).toArray()
            let total=0
            numeros.forEach(numero => {
               total+= numero.numero
            });
            let cant = numeros.length
            return { "promedio": total / cant}
        } catch (err) {
            console.log(err)
        }

    }

    saveNumero = async numero => {
        if (!CnxMongoDb.conection) return {}
        numero.numero = parseInt(numero.numero) // no se si hace falta
        await CnxMongoDb.db.collection('numeros').insertOne(numero)

        return {numero:numero.numero}
    }



}
