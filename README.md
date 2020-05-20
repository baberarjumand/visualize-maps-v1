# visualize-maps-v1

This mini-project was abandoned after experiencing first-hand some limitations of the <a target="_blank" href="https://github.com/ionic-team/ionic-native-google-maps">@ionic-native/google-maps</a> plugin (lack of searchbar and autocomplete features, minimal integration with the Places API, lack of satellite view, to name a few lacking features).
This mini-project will be restarted using either the <a target="_blank" href="https://developers.google.com/maps/documentation/javascript/">Google Maps JavaScript SDK</a> or the <a target="_blank" href="https://angular-maps.com/api-docs/agm-core/index.html">@agm/core</a> package instead.<br><br>

Insert your own Google Maps API key in the following files:<br>
- config.xml<br>
```
<preference name="GOOGLE_MAPS_ANDROID_API_KEY" value="YOUR_API_KEY" />
<preference name="GOOGLE_MAPS_IOS_API_KEY" value="YOUR_API_KEY" />
```
- src/app/vis-map/vis-map.page.ts<br>
```
Environment.setEnv({
      API_KEY_FOR_BROWSER_RELEASE: 'YOUR_API_KEY',
      API_KEY_FOR_BROWSER_DEBUG: 'YOUR_API_KEY',
    });
```
<br>
To run this project in the browser (after installing the dependencies using <code>npm install</code>):<br>
<code>ionic cordova run browser --livereload</code><br><br>

Then in the browser, the web app will be locally served at:<br>
<code>localhost:8100/index.html</code>
