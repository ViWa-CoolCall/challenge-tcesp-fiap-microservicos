import { app } from './app';
import 'dotenv/config';

app.listen(process.env.PORT, () => console.log('Server is running 😳'));
