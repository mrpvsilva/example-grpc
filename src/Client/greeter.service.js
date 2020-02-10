const protoLoader = require('@grpc/proto-loader');
const grpc = require('grpc');
const PROTO_PATH = '../protos/greet.proto';

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});

const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);

const Greeter = protoDescriptor.greet.Greeter;

const client = new Greeter('localhost:5000', grpc.credentials.createInsecure());


const sayHello = (data) => {
    return new Promise((resolve, reject) => {
        client.sayHello(data, (err, res) => {
            if (!err) {
                resolve(res)
            } else {
                reject(err);
            }
        });
    });
}

module.exports = {
    sayHello
};