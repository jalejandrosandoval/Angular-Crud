import { Component, Input, OnInit } from '@angular/core';
import { IEmployee } from 'src/app/Interfaces/Employee.interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  @Input() _Employee: IEmployee = {
    FirstName: '',
    LastName: '',
    Email: '',
    StartDate: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}