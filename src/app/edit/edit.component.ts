import { Component, OnInit } from '@angular/core';
import { Service1Service } from "../service1.service";
import { DataIn } from "../datamodel";
import {ListComponent} from "../list/list.component";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  adat = new DataIn();
  constructor(
    private service: Service1Service,
    private list: ListComponent
  ) { }

  ngOnInit(): void {
    console.log(this.adat = this.service.adatom[this.service.index]);
    //console.log(this.list.index2);

  }
  save(): void {
    this.adat = this.service.adatom[this.service.index];

  }
}
