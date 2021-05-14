import { Component, OnInit } from '@angular/core';
//import { MyData } from '../my-data/my-data.module';
import { Service1Service } from '../service1.service';
import { DataIn } from "../datamodel";
import {Router} from "@angular/router";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    public service: Service1Service,
    private router: Router
  ) { }
  ngOnInit(): void {
    if(!localStorage.getItem("user")){
      this.router.navigate(['/login'])
    }
    else{
      if (this.service.adatom == null || this.service.adatom.length === 0) {
        this.service.fetch().subscribe(
          {
            next:(data: any) => this.service.adatom = data,
            error: error => console.log(error),
            complete: () => console.log(this.service.adatom)
          }
        );
      }
    }


  }

  delete(adat: any): void
  {
    let index = this.service.adatom.indexOf(adat);
    this.service.adatom.splice(index,1);


  }


}
