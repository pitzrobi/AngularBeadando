import { Component, OnInit } from '@angular/core';
import { Service1Service } from "../service1.service";
import { DataIn } from "../datamodel";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  adat = new DataIn();
  constructor(
    private service: Service1Service
  ) { }

  ngOnInit(): void {

  }

  save(): void {
    this.service.adatom.push(this.adat);
    this.adat = new DataIn();
  }

}
