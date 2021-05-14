import { Component, OnInit } from '@angular/core';
import { Service1Service } from "../service1.service";
import { DataIn } from "../datamodel";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  adat = new DataIn();
  constructor(
    private service: Service1Service,
    private router: Router
  ) { }

  ngOnInit(): void {
    if(!localStorage.getItem("user"))
      this.router.navigate(['/login'])
  }

  save(): void {
    this.service.adatom.push(this.adat);
    this.adat = new DataIn();
  }

}
