import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-biding',
  templateUrl: './data-biding.component.html',
  styleUrls: ['./data-biding.component.scss']
})
export class DataBidingComponent implements OnInit {

  public nome: string = "Josie";
  public idade: number = 42;
  public maisUm: number = 1;

  public checkedDisabled: boolean = false;
  public imgSrc: string = "https://vidafullstack.com.br/wp-content/uploads/2021/07/versao-12-angular-400x250.png";
  public imgTitle: string = "Property Binding";
  public position: {x: number, y: number} = {x: 0, y:0}
  constructor() { }

  ngOnInit(): void {}

  public alertaInfo(valor: MouseEvent){
    console.log(valor);
  }

  public mouseMoveTeste(valor: MouseEvent){
    this.position.x = valor.offsetX;
    this.position.y = valor.offsetY;
  }
}
