import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp }               from './app.component';
import { HomePage }            from '../pages/home/home';
import { ListPage }            from '../pages/list/list';
import {InscriptionPage}       from '../pages/Inscription/inscription';
import {AuthentificationPage}  from '../pages/Authentification/Authentification';
import {ProfilePage}           from '../pages/Profile/Profile';
import {AnnoncePage}           from '../pages/Annonce/Annonce';
import {SportPage}             from '../pages/Sport/Sport';

import {HttpClientModule}            from '@angular/common/http';
import { StatusBar }           from '@ionic-native/status-bar';
import { SplashScreen }        from '@ionic-native/splash-screen';
import { UtilisateurProvider } from '../providers/utilisateur/utilisateur';

import { Camera }              from '@ionic-native/camera';
import { SportProvider } from '../providers/sport/sport';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    InscriptionPage,
    AuthentificationPage,
    ProfilePage,
    AnnoncePage,
    SportPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    InscriptionPage,
    AuthentificationPage,
    ProfilePage,
    AnnoncePage,
    SportPage
  ],

  providers: [
    StatusBar,
    SplashScreen, Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UtilisateurProvider,
    SportProvider
  ]
})
export class AppModule {}
