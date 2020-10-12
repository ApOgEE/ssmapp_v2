import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SsmloadingService {

  constructor(private loadingController: LoadingController) { }

  async showHideAutoLoader() {

    const loading = await this.loadingController.create({
      message: 'This Loader Will Auto Hide in 2 Seconds',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed! after 2 Seconds', { role, data });
  }

  // Show the loader for infinite time
  async showLoader() {

    const res = await this.loadingController.create({
      message: 'Searching ...'
    });
    res.present();

  }
  
  // Hide the loader if already created otherwise return error
  async hideLoader() {

    try {
      const res = await this.loadingController.dismiss();
      console.log('Loading dismissed!', res);
    }
    catch (error) {
      console.log('error', error);
    }

  }
}