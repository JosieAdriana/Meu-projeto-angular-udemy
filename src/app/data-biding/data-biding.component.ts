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

  constructor() { }

  ngOnInit(): void {
  }

}