import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';

export interface Data {
  red: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.None
})

export class HomePage {
  public data: Data;
  public columns: any;
  public rows: any;

  constructor(
    private http: HttpClient
  ) {
    this.columns = [
      { name: 'Name' },
      { name: 'Arrival' }
    ];

    this.http.get<Data>('../../assets/times.json')
      .subscribe((res) => {
        console.log(res)
        this.rows = res.red;
      });
  }

}
