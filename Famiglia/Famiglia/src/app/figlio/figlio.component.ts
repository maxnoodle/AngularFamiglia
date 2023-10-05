import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-figlio',
  templateUrl: './figlio.component.html',
  styleUrls: ['./figlio.component.css']
})
export class AppFiglioComponent implements OnInit {
  numbers: string[] = [];

  constructor() {}
filteredNumbers: string[] = [];

  ngOnInit() {
  this.numbers = [
    'II',
    'IV',
    'VI',
    'VIII',
    'X'
  ];

  this.filteredNumbers = this.numbers.filter(n => Number(n) % 2 === 0);
}

}
