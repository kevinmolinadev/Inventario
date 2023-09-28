import app from './app'
import './db'
const port = app.get('port');
app.listen(port)
console.log(`Servidor en ejecución en http://localhost:${port}`);
