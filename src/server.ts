// backend/src/server.ts
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';  // Importar cors
import productsRouter from './products/infraestructure/productsRouter'

dotenv.config();

const app = express();

// Configurar CORS
app.use(cors({
  origin: '*'  // Permite solicitudes de cualquier origen
}));

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use('/api', productsRouter);

const { MONGODB_USERNAME, MONGODB_PASSWORD, MONGODB_CLUSTER, MONGODB_DATABASE } = process.env;

const mongoUri = `mongodb+srv://${MONGODB_USERNAME}:${MONGODB_PASSWORD}@${MONGODB_CLUSTER}/${MONGODB_DATABASE}?retryWrites=true&w=majority`;

mongoose.connect(mongoUri)
  .then(() => {
    console.log('Conectado a MongoDB');
  })
  .catch((error) => {
    console.error('Error al conectar a MongoDB', error);
  });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
