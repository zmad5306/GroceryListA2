import { Injectable } from '@angular/core';

import { Department } from './Department';

const DEPTS: Department[] = [
  {name: 'Produce'},
  {name: 'Frozen'},
  {name: 'Bread'},
  {name: 'Coffee/Tea'},
  {name: 'Condiments'},
  {name: 'Canned'},
  {name: 'Baking'},
  {name: 'Snacks'},
  {name: 'Beverages'},
  {name: 'Meat'},
  {name: 'Dairy'},
  {name: 'Deli'},
  {name: 'Houshold'},
  {name: 'Kids'},
  {name: 'Pharmacy'},
  {name: 'Personal Care'},
  {name: 'Hardware'},
  {name: 'Housewares'}
];

@Injectable()
export class DepartmentService {

  departments: Department[] = DEPTS;

  constructor() { }

  getDepartments(): Promise<Department[]> {
    return Promise.resolve(this.departments);
  }

  addDepartment(department: Department): Promise<void> {
    this.departments.push(department);
    return Promise.resolve();
  }

  removeDepartment(department: Department): Promise<void> {
    let index = this.departments.indexOf(department);
    if (index > -1) {
      this.departments.splice(index, 1);
    }
    return Promise.resolve();
  }

}
