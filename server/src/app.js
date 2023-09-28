import express from "express";
import config from "./config";
import Routes from './routes';
const app = express();
//Settings
app.set('port', config.port)

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(Routes.Products);
app.use(Routes.Users);
export default app; 