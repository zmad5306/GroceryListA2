import { RouterModule } from "@angular/router";

import { ListComponent } from "./list.component";

const routes = [
    { path: '', component: ListComponent },
    { path: 'list', component: ListComponent }
];

export default RouterModule.forChild(routes);