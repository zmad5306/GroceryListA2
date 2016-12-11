import { Injectable } from '@angular/core';

import { Department } from './department';
import { Item } from './item';

const LIST = new Map<Department, Item[]>();

@Injectable()
export class ListService {

  constructor() { }

  getItems(department: Department): Promise<Item[]> {
    let items: Item[] = LIST.get(department);
    if (!items) {
      items = [];
      LIST.set(department, items);
    }
    return Promise.resolve(items);
  }

  addItem(item: Item): Promise<void> {
    let items: Item[] = LIST.get(item.department);
    if (items) {
      items.push(item);
    }
    return Promise.resolve();
  }

  toggleComplete(item: Item): Promise<void> {
    item.completed = !item.completed;
    return Promise.resolve();
  }

  removeAllItems(): Promise<void> {
    LIST.forEach((items: Item[]) => items.splice(0, items.length));
    return Promise.resolve();
  }

  removeItems(department: Department): Promise<void> {
    let items: Item[] = LIST.get(department);
    if (items) {
      items.splice(0, items.length);
    }
     return Promise.resolve();
  }

  completeAllItems(): Promise<void> {
    LIST.forEach((items: Item[]) => items.forEach((item) => item.completed = true));
    return Promise.resolve();
  }

  completeItems(department: Department): Promise<void> {
    let items: Item[] = LIST.get(department);
    if (items) {
      items.forEach((item) => item.completed = true);
    }
    return Promise.resolve();
  }

}
