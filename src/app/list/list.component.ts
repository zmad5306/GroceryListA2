import { Component, OnInit } from '@angular/core';

import { Department } from '../department';
import { Item } from '../item';
import { DepartmentService } from '../department.service';
import { ListService } from '../list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [DepartmentService, ListService]
})
export class ListComponent implements OnInit {

  list: Item[];
  department: Department;
  departments: Department[];
  itemName: string;

  constructor(private departmentService: DepartmentService, private listService: ListService) { }

  ngOnInit() {
    this.departmentService.getDepartments().then((departments) => {
      this.departments = departments;
      if (this.departments.length > 0) {
        this.department = departments[0];
        this.listService.getItems(this.department).then((items) => this.list = items);
      }
    });
  }
  selectDept(department: Department): void {
    this.department = department;
    this.listService.getItems(this.department).then((items) => this.list = items);
  }
  prevDept(): void {
    if (this.department) {
      let i = this.departments.indexOf(this.department);
      i--;
      if (i < 0) {
        i = this.departments.length - 1;
      }
      this.department = this.departments[i];
      this.listService.getItems(this.department).then((items) => this.list = items);
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
      this.listService.getItems(this.department).then((items) => this.list = items);
    }
  }
  addItem(): void {
    this.listService.addItem(this.department, {department: this.department, name: this.itemName, deleted: false});
    this.itemName = '';
  }
  toggleComplete(item: Item): void {
    this.listService.toggleComplete(item);
    item.deleted = !item.deleted;
  }

}
