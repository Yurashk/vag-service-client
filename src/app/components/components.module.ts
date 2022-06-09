import {NgModule} from "@angular/core";
import {HomeComponent} from "./home";
import {ContactsComponent} from './contacts/contacts.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {CommonModule} from "@angular/common";
import {MatExpansionModule} from "@angular/material/expansion";
import { WorksTypesComponent } from './works-types/works-types.component';
import {MatTableModule} from '@angular/material/table';
import { WorksComponent } from './works/works.component';
import {MatCardModule} from '@angular/material/card';
import {MatButton, MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import { ManageCarsComponent } from './manage-cars';
import { DragDropModule } from "@angular/cdk/drag-drop";
import { AllCarsListComponent, DialogContentExampleDialog } from './all-cars-list';
import { MatIconModule } from "@angular/material/icon";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AddNewUserComponent } from './add-new-user/add-new-user.component';
// @ts-ignore
@NgModule({
  declarations: [
    HomeComponent,
    ContactsComponent,
    AboutUsComponent,
    WorksTypesComponent,
    WorksComponent,
    ManageCarsComponent,
    AllCarsListComponent,
    DialogContentExampleDialog,
    AddNewUserComponent,
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    DragDropModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  exports: [
    HomeComponent,
    AboutUsComponent
  ]
})
export class ComponentsModule {
}
