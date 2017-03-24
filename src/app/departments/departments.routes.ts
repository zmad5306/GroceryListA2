import { RouterModule } from "@angular/router";

import { DepartmentsComponent } from "./departments.component";

const routes = [
    { path: '', component: DepartmentsComponent}
];

export default RouterModule.forChild(routes);