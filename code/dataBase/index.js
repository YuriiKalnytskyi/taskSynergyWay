// const Sequalize = require('sequelize');
// const path = require('path');
// const fs = require("fs");
//
// module.exports = (()=>{
//     let instance;
//
//     const initConnection = () => {
//         const client = new Sequalize('SynergyWay', 'user', 'user', { dialect: 'mysql' });
//         const models = {};
//         const modelsDirectory = path.join(process.cwd(),'dataBase','models');
//         console.log('======',modelsDirectory);
//         console.log('======',modelsDirectory);
//
//         const readAndSetModels = () => {
//             fs.readdir(modelsDirectory, (err, files) => {
//                 console.log("+++++++",files)
//                 console.log(err)
//                 // files.forEach((file) => {
//                 //     const [modelName] = file.split('.');
//                 //     // eslint-disable-next-line import/no-dynamic-require
//                 //     const modelFile = require(path.join(modelsDirectory, file));
//                 //
//                 //     models[modelName] = modelFile(client);
//                 // });
//             });
//         };
//
//         return {
//             getModel: (modelName) => models[modelName],
//             setModels: () => readAndSetModels()
//         };
//     };
//
//     return {
//         getInstance: () => {
//             if (!instance) {
//                 instance = initConnection();
//             }
//
//             return instance;
//         }
//     };
// })();

const {Sequelize, } = require('sequelize');

module.exports.sequelize=new Sequelize({
    database:'synergyway2',
    password:'rootroot',
    username:'root',
    host:'localhost',
    dialect:'mysql',
    logging:false
})
module.exports.models=require('./models')