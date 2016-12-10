import { Injectable, Inject } from '@angular/core';

import { DepartmentService } from './department.service';
import { Department } from './department';
import { Item } from './item';

const LIST = new Map<Department, Item[]>();

@Injectable()
export class ListService {

  constructor(private departmentService: DepartmentService) {
    this.departmentService = departmentService;
    this.departmentService.getDepartments().then((departments) => {
      for (let d of departments) {
        if (!LIST.get(d)) {
          LIST.set(d, []);
        }
      }
    }); 
  }

  getItems(department: Department): Promise<Item[]> {
    return Promise.resolve(LIST.get(department));
  }

  addItem(department: Department, item: Item): Promise<void> {
    LIST.get(department).push(item);
    return Promise.resolve();
  }

  toggleComplete(item: Item): Promise<void> {
    item.deleted != item.deleted;
    return Promise.resolve();
  }

  clear(): Promise<void> {
    LIST.forEach((items: Item[]) => items.splice(0, items.length));
    return Promise.resolve();
  }

}
