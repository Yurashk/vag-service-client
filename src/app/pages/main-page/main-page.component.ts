import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {HeaderInterface} from "./models";
import {MediaMatcher} from "@angular/cdk/layout";
import jwt_decode from "jwt-decode";
import {AuthService} from "../../services";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnDestroy {

  currentUserPone = '';
  mobileQuery: MediaQueryList;
  headerLinks: HeaderInterface[] = [{
    name: 'Про сервіс',
    link: 'about-us',
    icon: 'home',
    isActive: true
  }, {
    name: 'Прогресс по авто',
    link: 'works-by-vehicle',
    icon: 'manage_history',
    isActive: true
  }, {
    name: 'Послуги',
    link: 'work-types',
    icon: 'settings',
    isActive: true
  }]

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private authService: AuthService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    const user:any = jwt_decode(<string>localStorage.getItem('access_token'));
    this.currentUserPone = user.roles;
  }

  ngOnDestroy(): void {

    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  logout(){
      this.authService.logout()
  }
}
