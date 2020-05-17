import { Component, OnInit } from '@angular/core';
import { Platform, LoadingController } from '@ionic/angular';
import {
  GoogleMap,
  Environment,
  GoogleMaps,
  Geocoder,
  GeocoderResult,
  Marker,
  LocationService,
  MyLocation,
} from '@ionic-native/google-maps/ngx';

@Component({
  selector: 'app-vis-map',
  templateUrl: './vis-map.page.html',
  styleUrls: ['./vis-map.page.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class VisMapPage implements OnInit {
  map: GoogleMap;

  constructor(
    private platform: Platform,
    private loadingCtrl: LoadingController
  ) {}

  async ngOnInit() {
    await this.platform.ready();

    await this.loadMap();
  }

  loadMap() {
    Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyC8XkQMd1i4AEmMYVUEi_g-sZAgc1d8WXE',
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyC8XkQMd1i4AEmMYVUEi_g-sZAgc1d8WXE',
    });

    this.map = GoogleMaps.create('map_canvas');
  }

  async searchPlaces(searchString: string) {
    // console.log(searchString);

    const loading = await this.loadingCtrl.create({
      message: 'Searching...',
    });
    await loading.present();
    this.map.clear();

    Geocoder.geocode({
      address: searchString,
    }).then((results: GeocoderResult[]) => {
      // console.log(results);
      loading.dismiss();

      if (results.length > 0) {
        const marker: Marker = this.map.addMarkerSync({
          position: results[0].position,
          // title: 'abc',
        });
        this.map.animateCamera({
          target: marker.getPosition(),
          zoom: 17,
          // zoom: 10
        });
        marker.showInfoWindow();
      } else {
        alert('Place not found. Please try another search term.');
      }
    });
  }

  async locateUser() {
    // console.log('Locate User');

    const loading = await this.loadingCtrl.create({
      message: 'Locating you...',
    });
    await loading.present();
    this.map.clear();

    LocationService.getMyLocation().then((myLocation: MyLocation) => {
      // console.log(myLocation);
      loading.dismiss();

      if (myLocation) {
        const marker: Marker = this.map.addMarkerSync({
          position: myLocation.latLng,
          // title: 'abc',
        });
        this.map.animateCamera({
          target: marker.getPosition(),
          zoom: 17,
          // zoom: 10
        });
        // marker.showInfoWindow();
      }
    });
  }
}
