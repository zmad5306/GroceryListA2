import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { ListComponent } from "./list.component";
import listRoutes from "./list.routes";

@NgModule({
    imports: [CommonModule, listRoutes, FormsModule],
    declarations: [ListComponent]
})
export default class ListModule{}