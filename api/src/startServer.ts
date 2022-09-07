import 'dotenv/config';
import express, { Response } from 'express';

const PORT = 3001;

const startServer = () => {
  const app = express();
  app.use(express.json());

  app.get('/example', (_, response: Response) => {
    response.send('Está é uma rota de exemplo');
  });

  app.listen(PORT, () => {
    console.log(`🔥 Server Running on http://localhost:${PORT}`);
  });
};

export { startServer };
