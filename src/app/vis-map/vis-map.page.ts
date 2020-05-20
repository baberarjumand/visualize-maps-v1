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
  GoogleMapOptions,
  GoogleMapsEvent,
} from '@ionic-native/google-maps/ngx';
import { throttle } from 'rxjs/operators';
import { interval } from 'rxjs';

@Component({
  selector: 'app-vis-map',
  templateUrl: './vis-map.page.html',
  styleUrls: ['./vis-map.page.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class VisMapPage implements OnInit {
  private map: GoogleMap;
  private ionColorPrimary = '#488aff';
  private dummyMarker: any;
  private mapDragMode = false;
  private centerPos: any;

  constructor(
    private platform: Platform,
    private loadingCtrl: LoadingController
  ) {}

  async ngOnInit() {
    await this.platform.ready();

    await this.loadMap();
  }

  ionViewDidLoad() {
    this.dummyMarker = document.getElementById('centerMarkerImage');
    this.dummyMarker.style.display = 'none';
  }

  loadMap() {
    Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: 'AIzaSyC8XkQMd1i4AEmMYVUEi_g-sZAgc1d8WXE',
      API_KEY_FOR_BROWSER_DEBUG: 'AIzaSyC8XkQMd1i4AEmMYVUEi_g-sZAgc1d8WXE',
    });

    const bigBenCoords = {
      lat: 51.50072919999999,
      lng: -0.1246254,
    };

    const mapOptions: GoogleMapOptions = {
      controls: {
        myLocationButton: true,
      },
      camera: {
        target: bigBenCoords,
        zoom: 15,
      },
      center: bigBenCoords,
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);

    // this.map
    //   .on(GoogleMapsEvent.CAMERA_MOVE)
    //   .pipe(throttle((val) => interval(500)))
    //   .subscribe((data) => console.log(data[0].target));

    // this.map
    //   .addEventListener(GoogleMapsEvent.MAP_DRAG_END)
    //   .pipe(throttle((val) => interval(500)))
    //   .subscribe((data) => {
    //     console.log(this.map.getCameraPosition().target);
    //   });

    // this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
    //   const marker: Marker = this.map.addMarkerSync({
    //     icon: this.ionColorPrimary,
    //     position: bigBenCoords,
    //     map: this.map,
    //   });

    //   this.map
    //     .addEventListener(GoogleMapsEvent.CAMERA_MOVE)
    //     .pipe(throttle((val) => interval(500)))
    //     .subscribe((data) => {
    //       // console.log(this.map.getCameraPosition());
    //       marker.setPosition(data.target);
    //     });

    //   this.map
    //     .addEventListener(GoogleMapsEvent.CAMERA_MOVE_END)
    //     .pipe(throttle((val) => interval(500)))
    //     .subscribe((data) => {
    //       // console.log(this.map.getCameraPosition());
    //       marker.setPosition(data.target);
    //     });

    //   this.map
    //     .addEventListener(GoogleMapsEvent.MAP_DRAG)
    //     .pipe(throttle((val) => interval(500)))
    //     .subscribe((data) => {
    //       // console.log(this.map.getCameraPosition());
    //       marker.setPosition(data.target);
    //     });
    // });
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
        // const marker: Marker = this.map.addMarkerSync({
        //   position: results[0].position,
        //   // title: 'abc',
        //   icon: ionColorPrimary
        // });
        this.map.animateCamera({
          // target: marker.getPosition(),
          target: results[0].position,
          zoom: 15,
        });
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
        // const marker: Marker = this.map.addMarkerSync({
        //   position: myLocation.latLng,
        //   // title: 'abc',
        // });
        this.map.animateCamera({
          // target: marker.getPosition(),
          target: myLocation.latLng,
          zoom: 17,
          // zoom: 10
        });
      }
    });
  }

  goToVisImagePage() {
    // console.log(this.map.getCameraPosition().target);
    alert(JSON.stringify(this.map.getCameraPosition().target) + '\nThis feature is not yet implemented');
  }
}
