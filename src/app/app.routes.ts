import { RouterModule } from '@angular/router';

const routes = [
  { path: '', loadChildren: 'app/list/list.module'},
  { path: 'list', loadChildren: 'app/list/list.module'},
  { path: 'departments', loadChildren: 'app/departments/departments.module' } 
];

export default RouterModule.forRoot(routes);