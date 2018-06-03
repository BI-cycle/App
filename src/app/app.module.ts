import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import { AboutPage } from '../pages/about/about';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { MapsPage } from '../pages/maps/maps';
import { SigninPage } from '../pages/signin/signin';
import { ResultPage } from '../pages/result/result';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    LoginPage,
    TabsPage,
    ProfilePage,
    SigninPage,
    MapsPage,
    ResultPage,
    AboutPage
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {tabsPlacement: 'bottom',
    scrollAssist: false,    
    autoFocusAssist: false  }),
    HttpModule,
    Ionic2RatingModule 
  ],

  bootstrap: [IonicApp],

  entryComponents: [
    MyApp,
    HomePage,
    WelcomePage,
    LoginPage,
    SigninPage,
    TabsPage,
    ProfilePage,
    MapsPage,
    ResultPage,
    AboutPage
  ],

  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
  ]
})

export class AppModule {}
