import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnDestroy, OnInit, Output } from '@angular/core';
import EventEmitter from 'events';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrl: './prova.component.css'
})
export class ProvaComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked,  OnDestroy {

  // Values used for string interpolation
  longText = "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan."

  notVisibleImageUrl = "https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061131_1280.png"

  // Variable used for property binding
  isDisabled = false

  // Variable used for explaining *ngIf directive
  isVisible = true

  comments: { [index: number]: string } = {}; // Oggetto per memorizzare i commenti per ogni card

  feedLog = 'Feed'

  // Used to import data from other component
  @Input() data: any;


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

  onClick(index: number) {
    console.log("Like!")
    this.comments[index] = "Like!"
  }

  onInput(event: Event) {
     //log the value entered in the textarea, <HTMLInputElement> casting.
    console.log((<HTMLInputElement>event.target).value);
    // Add any other logic you want to execute when the input event occurs
  }

}
