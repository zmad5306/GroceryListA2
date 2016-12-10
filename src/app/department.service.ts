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

}
