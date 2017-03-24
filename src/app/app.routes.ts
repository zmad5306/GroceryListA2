import { RouterModule } from '@angular/router';

const routes = [
  { path: '', loadChildren: './list/list.module'},
  { path: 'list', loadChildren: './list/list.module'},
  { path: 'departments', loadChildren: './departments/departments.module' } 
];

export default RouterModule.forRoot(routes);