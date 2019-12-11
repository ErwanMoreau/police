import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-edit',
  templateUrl: './edit-rapport.component.html',
  styleUrls: ['./edit-rapport.component.css']
})
export class EditRapportComponent implements OnInit {
  public Editor = ClassicEditor;

  constructor() { }

  ngOnInit() {
  }

}
