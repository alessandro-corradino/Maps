import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo
  lat: number = 45.506738;
  lng: number = 9.190766;
  lat1 : number = 45.514225;
  lng1 : number = 9.169828;
  latdog: number = 45.508914;
  lngdog: number = 9.190825;
  latmario: number = 45.507044;
  lngmario: number = 9.192709;
  latmario2: number = 45.505691;
  lngmario2: number = 9.191819;
 private icon =  {
    url:'./assets/img/cat_acrobat.ico',
         scaledSize: {
      width: 60,
      height: 60
    }
  };
private icon2 =  {
    url:'./assets/img/dog.ico',
         scaledSize: {
      width: 60,
      height: 60
    }
  };
private icon3 =  {
    url:'./assets/img/mario.ico',
         scaledSize: {
      width: 60,
      height: 60
    }
  };
private icon4 =  {
    url:'./assets/img/mario2.ico',
         scaledSize: {
      width: 60,
      height: 60
    }
  };

    triangle: Array<point> =
  [

    {lng:9.1, lat:45.5},
    {lng:9.0, lat:45.6},
    {lng:9.0, lat:45.4}
  ]

   rectangle: Array<point> =
  [
    {lng:9.0, lat:45.6},
    {lng:9.1, lat:45.6},
    {lng:9.1, lat:45.4},
    {lng:9.0, lat:45.4}



  ]
}
