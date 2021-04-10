import { HttpClient } from '@angular/common/http';
import {Http} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';


/*
  Generated class for the UtilisateurProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilisateurProvider {

  private url:string;
  constructor(public http: HttpClient) {
    console.log('Hello UtilisateurProvider Provider');
    this.url="http://localhost/SportMobile/web/app_dev.php/myapp/User";
  }

  ajouter(data:any) : Observable <any>
  {
   return this.http.post(this.url+"/Ajouter",JSON.stringify(data));
  }

  verifieruer(date:any):Observable <any>
  {
    return this.http.post(this.url+"/FindByEmilPasswored",JSON.stringify(date));
  }
  rechercherUser(Id:any) : Observable <any>
  {
    return this.http.get(this.url+"/FindById/"+1);
  }





}
