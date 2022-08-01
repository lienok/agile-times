import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-fielderrors',
  templateUrl: './fielderrors.component.html',
  styleUrls: ['./fielderrors.component.scss']
})
export class FielderrorsComponent implements OnInit {
  @Input('form') form!: FormGroup;
  @Input('field') fieldName!: string;
  @Input('nicename') niceName!: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  fieldErrors(field: string) {
    let controlState = this.form.controls[field];
    return (controlState.dirty && controlState.errors) ? controlState.errors : null;
  }

}
