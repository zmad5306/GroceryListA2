import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ListComponent } from "./list.component";
import listRoutes from "./list.routes";

@NgModule({
    imports: [NgbModule, CommonModule, listRoutes, FormsModule],
    declarations: [ListComponent]
})
export class ListModule{}