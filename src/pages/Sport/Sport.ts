import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import { Camera, CameraOptions, } from '@ionic-native/camera';
import {HttpClient} from '@angular/common/http';
import { Nav, Platform } from 'ionic-angular';
import {map} from 'rxjs/operators';
import { UtilisateurProvider } from '../../providers/utilisateur/utilisateur';
import { SportProvider } from '../../providers/sport/sport';

@Component({
  selector: 'page-Sport',
  templateUrl: 'Sport.html'
})
export class SportPage {

 Titre:string;
 DateCreation:Date;
 Discription:string;
 nbJoure:number;
 Photo:string;
 
 private Option :any={"Titre":this.Titre,"Datacreation":this.DateCreation,"Discription":this.Discription,"nbJoure":this.nbJoure}

 Mydate1:Array<{ 
  TitreS:string,
  DateCreationS:Date,
  DiscriptionS:string,
  nbJoureS:Number,
  PhotoS:string,
  }>;

  constructor(public navCtrl: NavController,private NavParams:NavParams,private SportProvider:SportProvider) {
    

    
  }


   Ajouter()
   {
    this.Mydate1=[{TitreS:this.Titre,DateCreationS:this.DateCreation,DiscriptionS:this.Discription,nbJoureS:this.nbJoure,PhotoS:this.Photo}];
    this.SportProvider.ajouter(this.Mydate1).subscribe(data=>console.log(data));

    
   }
  


}
