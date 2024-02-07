import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css'
})
export class ProvaComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked,  OnDestroy {

  // Values used for string interpolation
  longText = "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."
  
  shibaImages = [
    {name: "Shiba", username: "shibaOne", imageUrl: "https://material.angular.io/assets/img/examples/shiba1.jpg"},
    {name: "Doggo", username: "shibaDoggo", imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg"},
    {name: "TheDog", username: "shibaTheDog", imageUrl: "https://as2.ftcdn.net/v2/jpg/03/12/93/33/1000_F_312933371_vMqXBtR0s84b7WHGbUWpgIzVmhrgp8za.jpg"}
  ]


  // Variable used for property binding
  isDisabled = false

  // Variable used for explaining *ngIf directive
  isVisible = true

  comment = 'This is a comment'

  constructor(){
    console.log("Costruttore")
  }

  ngOnInit(): void {
    console.log("ngOnInit")
  }

  ngDoCheck(): void {
    console.log("ngDoCheck")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit")
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked")
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy")
  }

  onClick() {
    console.log("Like!")
    this.comment = "Like!"
  }

  onInput(event: Event) {
     //log the value entered in the textarea, <HTMLInputElement> casting.
    console.log((<HTMLInputElement>event.target).value);
    // Add any other logic you want to execute when the input event occurs
  }
}
