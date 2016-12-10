import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

import { Department } from '../department';
import { Item } from '../item';
import { DepartmentService } from '../department.service';

const LIST = new Map<Department, Item[]>();

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [DepartmentService]
})
export class ListComponent implements OnInit {

  list: Item[];
  department: Department;
  departments: Department[];
  itemName: string;

  constructor(private departmentService: DepartmentService, private modalService: NgbModal) { }

  ngOnInit() {
    this.departmentService.getDepartments().then((departments) => {
      this.departments = departments;
      if (this.departments.length > 0) {
        for (let d of departments) {
          if (!LIST.get(d)) {
            LIST.set(d, []);
          }
        }
        this.department = departments[0];
        this.list = LIST.get(departments[0]);
      }
    });
  }
  selectDept(department: Department): void {
    this.department = department;
    this.list = LIST.get(department);
  }
  prevDept(): void {
    if (this.department) {
      let i = this.departments.indexOf(this.department);
      i--;
      if (i < 0) {
        i = this.departments.length - 1;
      }
      this.department = this.departments[i];
      this.list = LIST.get(this.department);
    }
  }
  nextDept(): void {
    if (this.department) {
      let i = this.departments.indexOf(this.department);
      i++;
      if (i > this.departments.length -1) {
        i = 0;
      }
      this.department = this.departments[i];
      this.list = LIST.get(this.department);
    }
  }
  addItem(): void {
    this.list.push({department: this.department, name: this.itemName, deleted: false});
    this.itemName = '';
  }
  toggleComplete(item: Item): void {
    item.deleted = !item.deleted;
  }
  openConfirmClearAllModal(confirmClearAllModal): void {
    this.modalService.open(confirmClearAllModal).result.then((result) => {
      if ('yes' === result) {
        LIST.forEach((items: Item[]) => items.splice(0, items.length));
      }
    });
  }
  openConfirmClearModal(confirmClearModal): void {
    this.modalService.open(confirmClearModal).result.then((result) => {
      if ('yes' === result) {
        this.list.splice(0, this.list.length);
      }
    });
  }
  openConfirmMarkAllModal(confirmMarkAllModal): void {
    this.modalService.open(confirmMarkAllModal).result.then((result) => {
      if ('yes' === result) {
        LIST.forEach((items: Item[]) => items.forEach((item: Item) => item.deleted = true));
      }
    });
  }
  openConfirmMarkModal(confirmMarkModal): void {
    this.modalService.open(confirmMarkModal).result.then((result) => {
      if ('yes' === result) {
        this.list.forEach((item: Item) => item.deleted = true);
      }
    });
  }
}
