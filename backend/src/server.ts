import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads'))); //abrir uma rota de caminhos estáticos para arquivos como imagens ou pdfs

app.use(errors());

app.listen(3333);