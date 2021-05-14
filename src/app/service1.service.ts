import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListComponent } from "./list/list.component";
//import { MyData } from './my-data/my-data.module';
import { BrowserModule } from '@angular/platform-browser';
import { DataIn } from "./datamodel";


@Injectable({
  providedIn: 'root'
})
export class Service1Service {


  public adatom: DataIn[]=[];
  //public index2: number;
  constructor(
    private http: HttpClient
  ) {

  }

  public fetch(): Observable<any>{

    return this.http.get('https://api.punkapi.com/v2/beers');

  }
  public index: number;

  getadat(adat: any): void{
    this.index = this.adatom.indexOf(adat);
    console.log("in transporter function: index= "+this.index)
  }

}


