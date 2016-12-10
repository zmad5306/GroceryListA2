import { Component, OnInit } from '@angular/core';

import { Department } from '../department';
import { Item } from '../item';

const DEPTS: Department[] = [
  {name: 'Produce'},
  {name: 'Frozen'},
  {name: 'Bread'},
  {name: 'Coffee/Tea'},
  {name: 'Meat'},
  {name: 'Dairy'}
];

const LIST = new Map<Department, Item[]>();

LIST.set(DEPTS[0], [
  {department: DEPTS[0], name: 'carrots', deleted: false},
  {department: DEPTS[0], name: 'carrots', deleted: false},
  {department: DEPTS[0], name: 'carrots', deleted: false},
  {department: DEPTS[0], name: 'carrots', deleted: false},
  {department: DEPTS[0], name: 'carrots', deleted: false},
  {department: DEPTS[0], name: 'carrots', deleted: false}
]);

LIST.set(DEPTS[1], [
  {department: DEPTS[1], name: 'beans', deleted: false},
  {department: DEPTS[1], name: 'beans', deleted: false},
  {department: DEPTS[1], name: 'beans', deleted: false},
  {department: DEPTS[1], name: 'beans', deleted: false},
  {department: DEPTS[1], name: 'beans', deleted: false},
  {department: DEPTS[1], name: 'beans', deleted: false}
]);

LIST.set(DEPTS[2], [
  {department: DEPTS[2], name: 'taters', deleted: false},
  {department: DEPTS[2], name: 'taters', deleted: false},
  {department: DEPTS[2], name: 'taters', deleted: false},
  {department: DEPTS[2], name: 'taters', deleted: false},
  {department: DEPTS[2], name: 'taters', deleted: false},
  {department: DEPTS[2], name: 'taters', deleted: false}
]);

LIST.set(DEPTS[3], [
  {department: DEPTS[3], name: 'steak', deleted: false},
  {department: DEPTS[3], name: 'steak', deleted: false},
  {department: DEPTS[3], name: 'steak', deleted: false},
  {department: DEPTS[3], name: 'steak', deleted: false},
  {department: DEPTS[3], name: 'steak', deleted: false},
  {department: DEPTS[3], name: 'steak', deleted: false}
]);

LIST.set(DEPTS[4], [
  {department: DEPTS[4], name: 'chicken', deleted: false},
  {department: DEPTS[4], name: 'chicken', deleted: false},
  {department: DEPTS[4], name: 'chicken', deleted: false},
  {department: DEPTS[4], name: 'chicken', deleted: false},
  {department: DEPTS[4], name: 'chicken', deleted: false},
  {department: DEPTS[4], name: 'chicken', deleted: false}
]);

LIST.set(DEPTS[5], [
  {department: DEPTS[5], name: 'ice cream', deleted: false},
  {department: DEPTS[5], name: 'ice cream', deleted: false},
  {department: DEPTS[5], name: 'ice cream', deleted: false},
  {department: DEPTS[5], name: 'ice cream', deleted: false},
  {department: DEPTS[5], name: 'ice cream', deleted: false},
  {department: DEPTS[5], name: 'ice cream', deleted: false}
]);

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  department: Department = DEPTS[0];
  departments: Department[] = DEPTS;
  list: Map<Department, Item[]> = LIST;
  itemName: string;

  selectDept(department: Department) {
    this.department = department;
  }
  prevDept() {
    if (this.department) {
      let i = DEPTS.indexOf(this.department);
      i--;
      if (i < 0) {
        i = DEPTS.length - 1;
      }
      this.department = DEPTS[i];
    }
  }
  nextDept() {
    if (this.department) {
      let i = DEPTS.indexOf(this.department);
      i++;
      if (i > DEPTS.length -1) {
        i = 0;
      }
      this.department = DEPTS[i];
    }
  }
  addItem() {
    this.list.get(this.department).push({department: this.department, name: this.itemName, deleted: false});
    this.itemName = '';
  }
  toggleComplete(department: Department, item: Item) {
    item.deleted = !item.deleted;
    
    // let items: Item[] = this.list.get(department); 
    // let index = items.indexOf(item);
    // items.splice(index, 1);
    // items.push(item);
    
  }

}
