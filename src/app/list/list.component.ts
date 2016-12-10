import { Component, OnInit } from '@angular/core';

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

  department: Department;
  departments: Department[];
  list: Map<Department, Item[]> = LIST;
  itemName: string;

  constructor(private departmentService: DepartmentService) { }

  ngOnInit() {
    this.departmentService.getDepartments().then((departments) => {
      this.departments = departments;
      if (this.departments.length > 0) {
        this.department = departments[0];
        for (let d of departments) {
            LIST.set(d, []);
        }
      }
    });
  }
  selectDept(department: Department): void {
    this.department = department;
  }
  prevDept(): void {
    if (this.department) {
      let i = this.departments.indexOf(this.department);
      i--;
      if (i < 0) {
        i = this.departments.length - 1;
      }
      this.department = this.departments[i];
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
    }
  }
  addItem(): void {
    this.list.get(this.department).push({department: this.department, name: this.itemName, deleted: false});
    this.itemName = '';
  }
  toggleComplete(department: Department, item: Item): void {
    item.deleted = !item.deleted;
    
    // let items: Item[] = this.list.get(department); 
    // let index = items.indexOf(item);
    // items.splice(index, 1);
    // items.push(item);
    
  }

}
