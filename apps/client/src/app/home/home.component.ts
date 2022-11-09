import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {TodoService} from "../service/todo.service";

@Component({
  selector: 'auditgraph-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit {

  constructor(private todo:TodoService) { }

  ngOnInit(): void {
    this.todo.getTodo();
  }

}
