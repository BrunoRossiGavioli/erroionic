import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  goTo(page){
    this.navCtrl.navigateForward(page);
  }
  constructor(private navCtrl : NavController) {}

}
