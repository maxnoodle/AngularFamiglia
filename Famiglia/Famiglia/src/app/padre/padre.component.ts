import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class AppPadreComponent implements OnInit {
  numbers: string[] = [];

  constructor() {}

  ngOnInit() {
    this.numbers = [
      'I',
      'III',
      'V',
      'VII',
      'IX'
    ];
  }

  render() {
    return this.numbers.join(', ');
  }
}
