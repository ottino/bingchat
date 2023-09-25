import dotenv from 'dotenv';

// Configurar dotenv para que utilice el archivo settings.env
dotenv.config({ path: 'settings.env' });
const COOKIE_VALUE = process.env.COOKIE_VALUE;

import express from 'express';
import { BingChat } from 'bing-chat';

// Crear una instancia de Express
const app = express();

// Crear una instancia de la API con la cookie
const api = new BingChat({ cookie: COOKIE_VALUE });

// Ruta para manejar las solicitudes GET
app.get('/chat', async (req, res) => {
  try {
    // Obtener la frase del parámetro 'phrase' en la solicitud GET
    const phrase = req.query.phrase;

    if (!phrase) {
      return res.status(400).json({ error: 'Frase no proporcionada' });
    }

    // Enviar la frase al chatbot y obtener la respuesta
    const chatResponse = await api.sendMessage(phrase);

    // Devolver la respuesta como JSON
    res.json({ response: chatResponse.text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

// Puerto en el que se ejecutará el servidor
const port = 3000;

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
