import { Component } from '@angular/core';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ServiceManagerAngular';

  shibaDogs = [
    {name: "Shiba", username: "shibaOne", imageUrl: "https://material.angular.io/assets/img/examples/shiba1.jpg"},
    {name: "Doggo", username: "shibaDoggo", imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg"},
    {name: "TheDog", username: "shibaTheDog", imageUrl: "https://as2.ftcdn.net/v2/jpg/03/12/93/33/1000_F_312933371_vMqXBtR0s84b7WHGbUWpgIzVmhrgp8za.jpg"}
  ]

}
