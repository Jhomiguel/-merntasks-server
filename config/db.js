const mongoose = require("mongoose");
require("dotenv").config({ path: "variables.env" });

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log("base de datos conectada");
  } catch (error) {
    console.log(error);
    process.exit(1); //Detener la app en caso de que haya un error
  }
};

module.exports = conectarDB;
