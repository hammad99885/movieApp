import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import Parse from 'parse';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'movies',
      url: '/movies',
      icon: 'list'
    },
    
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();

    Parse.initialize("2LbL9lZfYQA55y1ORbpuKfImHHuKDjFaHJpVNlAo", "x5APqvdklEBSC61kyJ0jAHOHfOoVoCa82F37bNlY");
    Parse.serverURL = 'https://parseapi.back4app.com/';
  }

  

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
