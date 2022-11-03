import fs from 'fs'

export class FileSystemUtils{

    static ruta = "./datos.txt"

    static leer = async _ =>{
    return JSON.parse( await fs.promises.readFile(this.ruta,"utf-8"))
    }

    static escribir = async (texto) =>{
        await fs.promises.writeFile(this.ruta,JSON.stringify(texto))
        }
}