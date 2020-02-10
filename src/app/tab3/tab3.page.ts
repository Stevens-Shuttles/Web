import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoadingController, Platform, NavController } from '@ionic/angular';
import { Environment, GoogleMap, GoogleMaps, GoogleMapOptions, GoogleMapsEvent, MyLocation, GoogleMapsAnimation } from '@ionic-native/google-maps';
declare var google;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})


export class Tab3Page {

 @ViewChild('map', { static: true }) 
  mapElement: ElementRef;
   map: GoogleMap;

  constructor(public navCtrl: NavController, public geolocation: Geolocation) {

  }
 ionViewDidLoad(){
    this.loadMap();
  }

  loadMap(){

    Environment.setEnv({
      'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyDSKFBtDU8V-kdTjUaFt8xFMiEgTWLkjQo',
      'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyDSKFBtDU8V-kdTjUaFt8xFMiEgTWLkjQo'
    });
      let latLng = new google.maps.LatLng(43, 79);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

   }

  

  
}
