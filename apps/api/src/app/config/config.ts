
import * as path from 'path';
const rootPath = path.normalize(__dirname + '/views');

export default {
    development: {
        db: process.env.MONGODB  || "mongodb://localhost:27017/auditgraph",
        rootPath: rootPath,
        SSL: false,
        port: process.env.PORT || 3000,
        privateKey: "ImmaPrivateKey",
        Auth:'Forms'

    },
    production: {
        rootPath: rootPath,
        SSL: process.env.PORT || false,
        db: process.env.MONGODB ,
        port: process.env.PORT || 80,
        privateKey: process.env.PRIVATEKEY || 'Forms',
        Auth: process.env.AUTH || 'Forms',
    }
};
