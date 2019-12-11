import {Component, OnInit, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {


  container: any;

  constructor(public viewContainerRef: ViewContainerRef) { }

  test: string;

  ngOnInit() {
    this.selectedGrade(2);
  }

  selectedGrade(value) {
// tslint:disable-next-line: max-line-length
    this.container = this.viewContainerRef.element.nativeElement.children[0].children[0].children[0].children[1].children[0].children[0].children[1];

    this.container.children[value].setAttribute('selected', '');
  }

}
