import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTabsModule} from "@angular/material/tabs";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDividerModule} from "@angular/material/divider";
import {MatListModule} from "@angular/material/list";
import {ComponentsModule} from "../../components";
import {RouterModule} from "@angular/router";
import {MainPageComponent} from "./main-page.component";
import {MainPageRoutingModule} from "./main-page-routing.module";

@NgModule({
  declarations: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    ComponentsModule,
    RouterModule,

  ],
  providers: [],
  exports: [
  ]
})
export class MainPageModule {
}

