import * as https from "https";
import {Router } from "express";
import * as axios  from "axios";
import {AxiosRequestConfig} from "axios";



export default class DataBindingsRouter{
    public router: Router;


    constructor() {
      this.router = Router();
      this.routes();
    }
    private  GetSession(){
      let data = JSON.stringify({
        "data": {
          "reqProperties": {
            "systemId": "a271c426-a2e4-4c4f-ba17-174bb61d73c1"
          }
        },
        "output_id": "9bddfc24-7bae-42b9-ad5c-4e82251d2a88",
        "optional_settings": {
          "blob_source": "cams"
        }
      });

      let config:AxiosRequestConfig = {
        method: 'post',
        url: 'https://cams-qa-ue.lower-data.pwcglb.com/datagram/proxy/init_session?binding_module=R2C_databinding&binding_method=Databricks&max_rows_per_page=100',
        headers: {
          'Content-Type': 'application/json',
          'accept': 'application/json',
          'Authorization': 'Basic dGFkOjNkNFNnRDVq'
        },
        data : data,
        httpsAgent: new https.Agent({
          rejectUnauthorized: false
        })
      };

      return  axios(config).then((c)=>{
        console.log(c);
        return c;
      }).catch((e)=>{console.error(e)});




    }
    private GetCustomers(SessionID:string){


    }
    private routes() {
      this.router.get('/customers', (req,res,next)=>{
        try {
          const session = this.GetSession();


            const result = [session]
            res.send(result);
          } catch(err) {
            next(err)
          }
      });
    }



}
