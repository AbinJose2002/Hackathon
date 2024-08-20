import express from 'express'
const app = express()
import { connection } from './config/db.js'
import {userRouter} from './routes/UserRoute.js'
import cors from 'cors'

connection()

app.use(cors())
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('dsfgfdg')
    
})

app.use('/api/user',userRouter)

app.listen(8080, ()=>{console.log(`runnning on port : 8080`);
})