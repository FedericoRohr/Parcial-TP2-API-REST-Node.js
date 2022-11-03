import { MongoClient} from "mongodb"
import config from "../config.js"

class CnxMongoDb {

    static conection = false
    static db
    static client

    static conectar = async _ => {
        try {
            console.log("conectando a base de datos...")
            CnxMongoDb.client = new MongoClient(config.STRCNX, {

                useNewUrlParser: true,
                useUnifiedTopology: true
            })


            await CnxMongoDb.client.connect()
            console.log("base de datos conectada")
            CnxMongoDb.db = CnxMongoDb.client.db('parcial')
            CnxMongoDb.conection = true

        } catch (err) {
            console.log(err)
        }
    }

    static desconectar = async _ => {
        if(CnxMongoDb.conection == false) return []
        await  CnxMongoDb.client.close()
    }
}

export default CnxMongoDb