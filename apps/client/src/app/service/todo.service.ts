import { Injectable } from '@angular/core';
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodo(){
    let config = {
      method: 'get',
      url: 'http://localhost:3333/api/data-bindings/customers',
      headers: { }
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }
}
