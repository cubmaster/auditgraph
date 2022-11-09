
import {Router } from "express";


export default class todoRouter{
    public router: Router;

    
    constructor() {
      this.router = Router();
      this.routes();
    }
  
    private routes() {
      this.router.get('/', (req,res,next)=>{
        try {
            const result = [
                { 
                    id:1,
                    name:'todo1'
                },
                {
                    id:2,
                    name:'todo2'
                }
            ]
            res.send(result);
          } catch(err) {
            next(err)
          }
      });
    }
  


}
