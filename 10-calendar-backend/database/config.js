const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true
            });
            console.log('DB online');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar la BD')
    }
}
module.exports = {
    dbConnection
}