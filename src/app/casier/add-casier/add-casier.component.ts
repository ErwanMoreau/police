import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-casier',
  templateUrl: './add-casier.component.html',
  styleUrls: ['./add-casier.component.css']
})
export class AddCasierComponent implements OnInit {
  mdp: string;

  constructor() {
    this.mdp = 'Generate Number of Casier';
  }

  ngOnInit() {
  }

  generate() {
    // tslint:disable-next-line: max-line-length
    const chars = '0123456789';
    const StringLength = 8;
    let RandomString = '';
    for (let i = 0; i < StringLength; i++) {
      const rnum = Math.floor(Math.random() * chars.length);
      RandomString += chars.substring(rnum, rnum + 1);
    }
    this.mdp = RandomString;

  }
}
