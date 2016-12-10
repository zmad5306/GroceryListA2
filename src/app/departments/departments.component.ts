import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Department } from '../department';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css'],
  providers: [DepartmentService]
})
export class DepartmentsComponent implements OnInit {

  departmentName: string;
  department: Department;
  departments: Department[];

  constructor(private departmentService: DepartmentService, private modalService: NgbModal) { }

  ngOnInit() {
    this.departmentService.getDepartments().then((departments) => this.departments = departments);
  }

  openConfirmDeleteModal(confirmDeleteModal, department: Department) {
    this.department = department;
    this.modalService.open(confirmDeleteModal).result.then((result) => {
      if ('yes' === result) {
        let index = this.departments.indexOf(this.department);
        if (index > -1) {
          this.departments.splice(index, 1);
        }
      }
      this.department = undefined;
    }, (reason) => {
      this.department = undefined;
    });
  }

  addDepartment() {
    this.departmentService.addDepartment({name: this.departmentName});
    this.departmentName = '';
  }

}
