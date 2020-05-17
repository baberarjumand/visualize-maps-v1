import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { GoogleMap, Environment, GoogleMaps } from '@ionic-native/google-maps/ngx';

@Component({
  selector: 'app-vis-map',
  templateUrl: './vis-map.page.html',
  styleUrls: ['./vis-map.page.scss'],
})
export class VisMapPage implements OnInit {
  map: GoogleMap;

  constructor(private platform: Platform) {}

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
}
