import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-freq',
  templateUrl: './freq.component.html',
  styleUrls: ['./freq.component.css']
})
export class FreqComponent implements OnInit {
  freqC: string;
  freqL: string;
  constructor() { }

  ngOnInit() {
  }
  RadioLongue() {
    this.freqL = this.entierAleatoire(30, 75);
    this.freqL = this.freqL + '.' + this.entierAleatoire(0, 9);
  }
  RadioCourte() {
    this.freqC = this.entierAleatoire(30, 512);
    this.freqC = this.freqC + '.' + this.entierAleatoire(0, 9);
  }
  entierAleatoire(min, max)
  {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
