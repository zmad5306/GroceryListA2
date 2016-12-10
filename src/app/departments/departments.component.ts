import { Component, OnInit } from '@angular/core';

import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css'],
  providers: [DepartmentService]
})
export class DepartmentsComponent implements OnInit {

  departments: Department[];

  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
    this.departmentService.getDepartments().then((departments) => this.departments = departments);
  }

}
