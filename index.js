const express = require("express");
const conectarDB = require("./config/db");
const cors = require("cors");

//crear servidor
const app = express();

//Conectar a la base de datos
conectarDB();

//Habilitar Cors
app.use(cors());

//Habilitar express.json para leer datos que el usuario coloque
app.use(express.json({ extended: true }));

//Puerto del app
const port = process.env.port || 4000;

//Importar rutas
app.use("/api/usuarios", require("./routes/usuarios"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/proyectos", require("./routes/proyectos"));
app.use("/api/tareas", require("./routes/tareas"));

//arrancar app
app.listen(port, "0.0.0.0", () => {
  console.log(`El servidor esta corriendo en el puerto ${port}`);
});
