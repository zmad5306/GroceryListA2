import { Injectable } from '@angular/core';

import { Department } from './Department';

const DEPTS: Department[] = [
  {name: 'Produce'},
  {name: 'Frozen'},
  {name: 'Bread'},
  {name: 'Coffee/Tea'},
  {name: 'Meat'},
  {name: 'Dairy'}
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
