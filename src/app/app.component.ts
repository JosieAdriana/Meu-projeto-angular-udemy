import { Component, OnInit, DoCheck,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked } from '@angular/core';
/*
DoCheck,
AfterContentInit,
AfterViewInit,
AfterViewChecked
*/

@Component({
  selector: 'app-root',
  template: `
  <app-title *ngIf="destruir"></app-title>
  <br>
  <button (click)="destruirComponent()">Destruir componente</button>
  {{ valor }}
  <button (click)="adicionar()">Adicionar</button>
  <app-title></app-title>
  <router-outlet></router-outlet>
`
})
export class AppComponent implements OnInit, DoCheck,
AfterContentInit,
AfterViewInit,
AfterViewChecked {
  public valor: number = 1;

  public destruir:boolean = true;
 constructor() {  
}

public adicionar(): number {
 return this.valor += 1
}
 ngOnInit(): void {}

 ngDoCheck(): void {
  console.log("ngDoCheck");
 }

 ngAfterContentInit(): void {
  console.log("ngAfterContentInit");
 }

 ngAfterViewChecked(): void {
  console.log("ngAfterViewChecked");
 }

 ngAfterViewInit(): void {
  console.log("ngAfterViewInit");
 }
 public destruirComponent(){
  this.destruir = false;
 }
}

