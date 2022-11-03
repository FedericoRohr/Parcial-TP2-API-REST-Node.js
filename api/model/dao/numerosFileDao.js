import { FileSystemUtils } from "../fileSystemUtils.js"

export class NumerosFileDao{

    findEntrada = async () => {
        let numerosCompletos = await FileSystemUtils.leer()
       return {numeros:numerosCompletos}
    }


    findMinMax = async () => {
        let numeros = await FileSystemUtils.leer()
        let minimo = Math.min(...numeros)
        let maximo = Math.max(...numeros)
        return {min:minimo,max:maximo}
    }


    findCantidad = async () => {
        let numeros = await FileSystemUtils.leer()
        return {cantidad:numeros.length}
    }

    findPromedio = async () => {
        let numeros = await FileSystemUtils.leer()
        let total=0
        numeros.forEach(numero => {
           total+= numero
        });
        let cant = numeros.length
        return { "promedio": total / cant}
    }

    saveNumero = async numero => {
        let escrito = await FileSystemUtils.leer()
        escrito.push(numero.numero)
        await FileSystemUtils.escribir(escrito)
        return {numero:numero.numero}
    }



}