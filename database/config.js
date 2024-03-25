const mongoose = require('mongoose');

const dbConnection = async () => {
    try {

        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: true
        });

        console.log("BD en linea")

    } catch (error) {
        console.log(error);
        throw new Error("Error al conectarse a BD")
    }
}
module.exports = {
    dbConnection
}