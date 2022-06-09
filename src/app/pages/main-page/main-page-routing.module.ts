import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MainPageComponent} from "./main-page.component";
import {AboutUsComponent} from "../../components/about-us/about-us.component";
import {HomeComponent} from "../../components/home";
import {WorksTypesComponent} from "../../components/works-types/works-types.component";
import {WorksComponent} from "../../components/works/works.component";
import {ManageCarsComponent} from "../../components/manage-cars";
import {AllCarsListComponent} from "../../components/all-cars-list";
import {AuthorizationComponent} from "../auth";

const routes: Routes = [
  {path: '', redirectTo: '/works-by-vehicle', pathMatch: 'full'},
  {
    path: '',
    component: MainPageComponent,
    children: [
      {path: 'about-us', component: HomeComponent},
      {path: 'work-types', component: WorksTypesComponent},
      {path: 'works-by-vehicle', component: WorksComponent},
      // {path: 'manage-cars', component: ManageCarsComponent},
      {path: 'all-cars', component: AllCarsListComponent},
      {path: 'manage-car/:id', component: ManageCarsComponent},
      {path: 'add-new-user', component: AuthorizationComponent},
    ]
    // { path: 'componentB', component: BComponent },
    // { path: 'componentC', component: CComponent }

  }, {
    path: 'about-us',
    component: AboutUsComponent
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule {
}
