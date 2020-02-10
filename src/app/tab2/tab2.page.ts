
import { Component, ViewChild } from '@angular/core';
import { MbscFormOptions } from '@mobiscroll/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
    @ViewChild('run1', {static: true})
    r1: any;
    @ViewChild('run2', {static: true})
    r2: any;
    @ViewChild('run3', {static: true})
    r3: any;

      formSettings: MbscFormOptions = {
        theme: 'ios',
        themeVariant: 'light'
    };

    //top buttons 

    
    // closeAll() {
    //     this.r1.instance.hide();
    //     this.r2.instance.hide();
    //     this.r3.instance.hide();
    // }

    // toggleFirst() {
    //     this.r1.instance.toggle();
    // }

}
