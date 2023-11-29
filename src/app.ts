import express, {Express} from 'express';
import { validateRequest } from './middlewares/requestValidator';
import { router } from './routes/routes';

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded());
app.use(validateRequest);
app.use('/', router)

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});