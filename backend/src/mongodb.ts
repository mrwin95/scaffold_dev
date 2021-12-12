
import { connect } from 'http2';
import mongoose from 'mongoose';

type DBInput = {
    db: string,
};

export default ({db}: DBInput) => {
    const connect = () => {
        mongoose.connect(db).then(() => {
            return console.log(`Successfully connected to ${db}`);
        })
        .catch(err => {
            console.error(`Error connecting to database ${db}`, err);
            return process.exit(1);
        })
    }

    connect();

    mongoose.connection.on("disconnected", connect);
}
