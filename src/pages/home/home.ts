import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

import { Camera, CameraOptions, } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  IDU:string;
  myphoto:any;
  pet:string="Home";
  constructor(public navCtrl: NavController,private camera:Camera,private NavParams:NavParams) {
    
    console.log("ok dazate");
    console.log(NavParams.get("id"));
    
  }

  photo(){
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.myphoto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }


}
