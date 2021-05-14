import { Component, OnInit } from '@angular/core';
//import { MyData } from '../my-data/my-data.module';
import { Service1Service } from '../service1.service';
import { DataIn } from "../datamodel";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(
    public service: Service1Service
  ) { }
  //public adatom: DataIn[]= [];
  ngOnInit(): void {
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

  delete(adat: any): void
  {
    //console.log("Törlés" +adat);
    let index = this.service.adatom.indexOf(adat);
    this.service.adatom.splice(index,1);

    //console.log(adat.id-1);
    //console.log(this.service.adatom);
  }

  //public index2: number;
  /*
  public getadat(adat: any): void
  {
    this.index2 = this.service.adatom.indexOf(adat);
    console.log(this.index2);

  }
*/
}
