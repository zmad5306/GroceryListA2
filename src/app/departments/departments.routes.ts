import { RouterModule } from "@angular/router";

import { DepartmentsComponent } from "./departments.component";

const routes = [
    { path: '', component: DepartmentsComponent},
    { path: 'list', component: DepartmentsComponent}
];

export default RouterModule.forChild(routes);