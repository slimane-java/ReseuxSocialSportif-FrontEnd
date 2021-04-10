
import { InscriptionPage } from '../Inscription/inscription';
import {Component, OnInit,ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Nav, Platform } from 'ionic-angular';
import {map} from 'rxjs/operators';
import { NavController,NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import { UtilisateurProvider } from '../../providers/utilisateur/utilisateur';
import {ProfilePage} from '../Profile/Profile';
import { MyApp } from '../../app/app.component';


@Component({
  selector: 'page-Authentification',
  templateUrl: 'Authentification.html'
})
export class AuthentificationPage {
  @ViewChild(Nav) nav: Nav;
  Email:string;
  Password:string;

 private Mydate1:Array<{ EmailU:string, PasswordU:string}>;

  constructor(public navCtrl: NavController,public UtilisateurProvider:UtilisateurProvider ) {

  }


  Inscription()
  {
    this.navCtrl.push(InscriptionPage);
  }

  verifier()
  {
    this.Mydate1=[];
    this.Mydate1.push({EmailU:this.Email,PasswordU:this.Password});
    this.UtilisateurProvider.verifieruer(this.Mydate1).subscribe(data =>{
     
      this.navCtrl.setRoot(HomePage);
      /*if(data["Valider"]>0)
      {
        let Id={id:data["Valider"]};
        this.navCtrl.setRoot(HomePage,Id);
      }
      else
      {
        alert("Youre Email or Password is wronge");
      }
      */
       
     
    })

}

}
