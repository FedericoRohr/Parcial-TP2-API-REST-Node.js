import { NumerosFileDao } from "./numerosFileDao.js"
import { NumerosMongoDao } from "./numerosMongoDao.js"

export class AlumnosFactoryDAO {
    
    static get(tipo) {
        switch (tipo) {
            case 'FILE':
                console.log("utlizando base de datos file system...")
                return new NumerosFileDao
            case 'MONGO':
                return new NumerosMongoDao
            default:
                console.log("utlizando base de datos file system...")
                return new NumerosFileDao
        }
    }
}

