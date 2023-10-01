import app from './app'
const port = app.get('port');
app.listen(port)
console.log(`Servidor en ejecución en http://localhost:${port}`);
