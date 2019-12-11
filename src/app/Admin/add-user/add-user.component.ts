import {Component, OnInit, ViewContainerRef} from '@angular/core';
import { BackService } from '../../back.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {


  constructor(public viewContainerRef: ViewContainerRef,
              private readonly back: BackService,
              private readonly router: Router) {
    this.mdp = 'Generate password';
  }

  mdp: string;

  ngOnInit() {

  }

  generate() {
    // tslint:disable-next-line: max-line-length
    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const StringLength = 8;
    let RandomString = '';
    for (let i = 0; i < StringLength; i++) {
      const RNum = Math.floor(Math.random() * chars.length);
      RandomString += chars.substring(RNum, RNum + 1);
    }
    this.mdp = RandomString;

  }

  AddUser(event) {
    event.preventDefault();
    const target = event.target;
    const nom = target.querySelector('#nom').value;
    const prenom = target.querySelector('#prenom').value;
    const email = target.querySelector('#email').value;
    const password = target.querySelector('#password').value;
    const matricule = target.querySelector('#matricule').value;
    const id_grade = target.querySelector('#id_grade').value;
    this.back.AddUserDetails(nom, prenom, email, password, matricule, id_grade)
      .subscribe(data => {

        if (data.success) {
          // this.router.navigate(['']);
        } else {
          window.alert(data.message);
        }
      });
    console.log(nom, prenom, email, password, matricule, id_grade);
  }
}
