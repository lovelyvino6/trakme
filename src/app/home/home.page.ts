import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HomePage {

  is_loading: boolean = false;
  background_tracking: boolean = false;

  constructor(
    // private store: Store,
    // private geolocationService: BackgroundGeolocationService,
    // private alertController: AlertController,
    // public loadingController: LoadingController,
    // private launchNavigator: LaunchNavigator,
  ) {}


  // StopBackgroundGeolocation() {

  //   if (this.vehicle._id) {
  //     let formData = {
  //       background_tracking: false
  //     }

  //     this.vehicleService.save(formData, this.vehicle._id).subscribe((res) => {

  //       if (formData.background_tracking == false) {

  //         this.store.dispatch(new GET_APPDATA({ user_id: this.user.ID })).subscribe(() => {

  //           this.user = this.store.selectSnapshot(AuthState);
  //           let appState = this.store.selectSnapshot(AppState);
  //           this.vehicle = appState.vehicle;
  //           this.activeLoad = appState.load;

  //         });
  //       }
  //     });
  //   }

  //   this.geolocationService.stopBackgroundTracking();
  // }

  // StartBackgroundGeolocation() {

  //   if (this.vehicle._id) {
  //     let formData = {
  //       background_tracking: true
  //     }

  //     this.vehicleService.save(formData, this.vehicle._id).subscribe((res) => {
  //       console.log(res);

  //       if (formData.background_tracking == true) {

  //         this.store.dispatch(new GET_APPDATA({ user_id: this.user.ID })).subscribe(() => {

  //           this.user = this.store.selectSnapshot(AuthState);
  //           let appState = this.store.selectSnapshot(AppState);
  //           this.vehicle = appState.vehicle;
  //           this.activeLoad = appState.load;

  //         });
  //       }
  //     });
  //   }

  //   this.geolocationService.startBackgroundTracking();

  // }
}
