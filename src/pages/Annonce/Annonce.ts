import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import { Camera, CameraOptions, } from '@ionic-native/camera';

@Component({
  selector: 'page-Annonce',
  templateUrl: 'Annonce.html'
})
export class AnnoncePage {


  constructor(public navCtrl: NavController,private camera:Camera,private NavParams:NavParams) {
    

    
  }

 


}
