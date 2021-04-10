import {Component, OnInit,ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Nav, Platform } from 'ionic-angular';
import {map} from 'rxjs/operators';
import { NavController,NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';
import { UtilisateurProvider } from '../../providers/utilisateur/utilisateur';



@Component({
  selector: 'page-Inscription',
  templateUrl: 'Inscription.html'
})
export class InscriptionPage  {
  @ViewChild(Nav) nav: Nav;
private  index :number=1;


 Nom:string;
 Prenom:string;
 dateNaisence :Date;
 Adresse:string;
 Tele:string;
 ville:string;
 Email:string;
 Username:string;
 Password:string;
 confermePas:string;
 Photo:string;


 Mydate1:Array<{ 
  NomU:string,
  PrenomU:string,
  AdresseU:string,
  TeleU:string,
  villeU:string,
  EmailU:string,
  dateNaisenceU:Date,
  UsernameU:string,
  PasswordU:string,
  PhotoU:string,
  }>;

  constructor(public navCtrl: NavController,private  UtilisateurProvider:UtilisateurProvider) {

  }
  
  IndexVisible(i:number)
  {
    
    switch(i)
    {
      case 1: document.getElementById("I1").style.visibility=" visible";
              document.getElementById("I2").style.visibility=" hidden";
              document.getElementById("I3").style.visibility=" hidden";
      break;
      case 2: document.getElementById("I1").style.visibility=" hidden";
              document.getElementById("I2").style.visibility=" visible";
              document.getElementById("I3").style.visibility=" hidden";
      break;
      case 3: document.getElementById("I1").style.visibility=" hidden";
              document.getElementById("I2").style.visibility=" hidden";
              document.getElementById("I3").style.visibility=" visible";
      break;
      default:   this.Ajouter();
               
      break
    }

  }

  Suivent()
  {
    if(this.index<=3){

    
    this.index++;
    this.IndexVisible(this.index);
    }
  }

  President()
  {
    if(this.index>=1){

    
      this.index--;
      this.IndexVisible(this.index);
      }
    
  }
 
   
   Ajouter()
  {
    
    this.Mydate1=[{NomU:this.Nom,PrenomU:this.Prenom,AdresseU:this.Adresse,TeleU:this.Tele,villeU:this.ville,EmailU:this.Email,dateNaisenceU:this.dateNaisence,UsernameU:this.Username,PasswordU:this.Password,PhotoU: this.Photo}];


    this.UtilisateurProvider.ajouter(this.Mydate1).subscribe(data =>{
      console.log(data);
    });

 


}


}
