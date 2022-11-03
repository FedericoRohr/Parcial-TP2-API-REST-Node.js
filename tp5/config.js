import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT 
const  STRCNX = process.env.STRCNX  
const MODO_PERSISTENCIA = process.env.MODO_PERSISTENCIA 

export default{
PORT ,
STRCNX ,
MODO_PERSISTENCIA
}