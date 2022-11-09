import  todoRouter from '../routes/todo'
import DataBindingsRouter from "../routes/DataBindings";


export default function routes(app){
    app.use('/api/todo', new todoRouter().router);
    app.use('/api/data-bindings', new DataBindingsRouter().router);


}
