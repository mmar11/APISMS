import express from 'express'
import routes from './routes.js'


const app = express();


const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Servidor na porta http://localhost:${PORT}`)
});


app.use(express.json());
app.use(routes);