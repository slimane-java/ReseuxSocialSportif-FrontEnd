import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import * as $ from 'jquery';
import { UtilisateurProvider } from '../../providers/utilisateur/utilisateur';



@Component({
  selector: 'page-Profile',
  templateUrl: 'Profile.html'
})
export class ProfilePage {


    Nom:string;
    Prenom:string;
    dateNaisence :Date;
    Adresse:string;
    Tele:string;
    Ville:string;
    Email:string;
    Username:string;
    Password:string;
    conect:string;
    Photo:string;
    Id:Number;

  myphoto:any;
  pet:string="Annonce";
  constructor(public navCtrl: NavController , public UtilisateurProvider:UtilisateurProvider ,private NavParams:NavParams) {
  
  }



  public ngOnInit()
  {

    this.UtilisateurProvider.rechercherUser(this.Id).subscribe(data =>{console.log(data)
      this.Nom=data["Nom"];
      this.Prenom=data["Prenom"];
      this.dateNaisence=data["DateNaissence"];
      this.Tele=data["Tele"];
      this.Email=data["Email"];
      this.Username=data["UserName"];
      this.Password=data["Password"];
      this.conect=data["Conect"];
      this.Ville=data["Ville"];
      this.Photo=data["Photo"];
      this.Adresse=data["Adresse"];
      })
           
 
  }
}