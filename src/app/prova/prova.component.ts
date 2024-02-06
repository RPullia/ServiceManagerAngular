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
    {imageUrl: "https://material.angular.io/assets/img/examples/shiba1.jpg"},
    {imageUrl: "https://material.angular.io/assets/img/examples/shiba2.jpg"}
  ]


  // Variable used for property binding
  isDisabled = false

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
}
