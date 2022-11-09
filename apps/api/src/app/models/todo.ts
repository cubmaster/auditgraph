import  { Schema, Document } from 'mongoose';
import * as mongoose from "mongoose";



export interface ITodo extends Document {
    name:string,
   
}

const TodoSchema = new Schema({
    name:  { type: String, required: true }
    });


export default () => { mongoose.model<ITodo>('todo', TodoSchema);}