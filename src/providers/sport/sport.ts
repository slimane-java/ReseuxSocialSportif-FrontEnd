
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Http} from '@angular/http';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';



/*
  Generated class for the SportProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SportProvider {

  private url:string;
  constructor(public http: HttpClient) {
    console.log('Hello UtilisateurProvider Provider');
    this.url="http://localhost/SportMobile/web/app_dev.php/myapp/Sport";
  }

  ajouter(data:any) : Observable <any>
  {
   return this.http.post(this.url+"/Ajouter",JSON.stringify(data));
  }



}
