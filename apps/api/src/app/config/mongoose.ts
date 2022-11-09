

import { Mongoose } from 'mongoose';
import todo from "../models/todo";

export default class MongooseConfig
{
    constructor(config:any) {
        console.info("Connected to database:" + config.db);

        const mongoose = new Mongoose();
      
        mongoose.connect(config.db).then(()=>console.log("db connected"));

        //init model shema
        todo();

    }

}