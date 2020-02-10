import { MbscModule } from '@mobiscroll/angular';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { GoogleMaps } from "@ionic-native/google-maps"
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';

@NgModule({
  imports: [ 
    MbscModule, 
    IonicModule,
    CommonModule,
    FormsModule,
    GoogleMaps,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [Tab3Page]
})
export class Tab3PageModule {}
