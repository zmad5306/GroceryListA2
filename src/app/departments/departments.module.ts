import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DepartmentsComponent } from "./departments.component";
import departmentRoutes from "./departments.routes";

@NgModule({
    imports: [NgbModule, CommonModule, departmentRoutes, FormsModule],
    declarations: [DepartmentsComponent]
})
export default class DepartmentsModule{}