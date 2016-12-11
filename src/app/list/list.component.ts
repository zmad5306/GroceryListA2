import { Component, OnInit } from '@angular/core';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

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

  items: Item[];
  department: Department;
  departments: Department[];
  itemName: string;

  constructor(private departmentService: DepartmentService, private listService: ListService, private modalService: NgbModal) { }

  ngOnInit() {
    this.departmentService.getDepartments().then((departments) => {
      this.departments = departments;
      if (this.departments.length > 0) {
        this.department = departments[0];
        this.listService.getItems(departments[0]).then((items: Item[]) => this.items = items);
      }
    });
  }

  selectDept(department: Department): void {
    this.department = department;
    this.listService.getItems(department).then((items: Item[]) => this.items = items);
  }

  prevDept(): void {
    if (this.department) {
      let i = this.departments.indexOf(this.department);
      i--;
      if (i < 0) {
        i = this.departments.length - 1;
      }
      this.selectDept(this.departments[i]);
    }
  }

  nextDept(): void {
    if (this.department) {
      let i = this.departments.indexOf(this.department);
      i++;
      if (i > this.departments.length -1) {
        i = 0;
      }
      this.selectDept(this.departments[i]);
    }
  }

  addItem(): void {
    this.listService.addItem({department: this.department, name: this.itemName, completed: false});
    this.itemName = '';
  }

  toggleComplete(item: Item): void {
    this.listService.toggleComplete(item);
  }

  openConfirmClearAllModal(confirmClearAllModal): void {
    this.modalService.open(confirmClearAllModal).result.then((result) => {
      if ('yes' === result) {
        this.listService.removeAllItems();
      }
    });
  }

  openConfirmClearModal(confirmClearModal): void {
    this.modalService.open(confirmClearModal).result.then((result) => {
      if ('yes' === result) {
        this.listService.removeItems(this.department);
      }
    });
  }

  openConfirmCompleteAllModal(confirmCompleteAllModal): void {
    this.modalService.open(confirmCompleteAllModal).result.then((result) => {
      if ('yes' === result) {
        this.listService.completeAllItems();
      }
    });
  }

  openConfirmCompleteModal(confirmCompleteModal): void {
    this.modalService.open(confirmCompleteModal).result.then((result) => {
      if ('yes' === result) {
        this.listService.completeItems(this.department);
      }
    });
  }
  
}
