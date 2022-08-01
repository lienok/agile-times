import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectForm!: FormGroup;
  minProjectDate = new Date();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.projectForm = this.fb.group({
      projectId: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.maxLength(140)]],
      startDate: [new Date(), Validators.required],
      projectType: ['B']
    })
  }

  hasFormErrors() {
    return !this.projectForm.valid;
  }


  onSubmit() {
    alert(JSON.stringify(this.projectForm.value));
  }
}
