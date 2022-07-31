import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";
import {Menu} from "primeng/menu";

declare var jQuery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'agile-times-new';

  menuItems!: MenuItem[];
  miniMenuItems!: MenuItem[];

  @ViewChild('bigMenu') bigMenu!: Menu;
  @ViewChild('smallMenu') smallMenu!: Menu;

  constructor(private router : Router) {

  }

  ngOnInit() {
    let handleSelected = function (event: any) {
      let allMenus = jQuery(event.originalEvent.target).closest('ul');
      let allLinks = allMenus.find('.menu-selected');

      allLinks.removeClass("menu-selected");
      let selected = jQuery(event.originalEvent.target).closest('a');
      selected.addClass('menu-selected');
    }

    this.menuItems = [
      {label: 'Dashboard', icon: 'pi pi-home', routerLink: ['/dashboard'], command: (event) => handleSelected(event)},
      {label: 'All Times', icon: 'pi pi-calendar', routerLink: ['/alltimes'], command: (event) => handleSelected(event)},
      {label: 'My Timesheet', icon: 'pi pi-clock', routerLink: ['/timesheet'], command: (event) => handleSelected(event)},
      {label: 'Add Project', icon: 'pi pi-server', routerLink: ['/projects'], command: (event) => handleSelected(event)},
      {label: 'My Profile', icon: 'pi pi-users', routerLink: ['/profile'], command: (event) => handleSelected(event)},
      {label: 'Settings', icon: 'pi pi-sliders-h', routerLink: ['/settings'], command: (event) => handleSelected(event)},
    ]

    this.miniMenuItems = [];
    this.menuItems.forEach((item: MenuItem) => {
      let miniItem = {icon: item.icon, routerLink: item.routerLink}
      this.miniMenuItems.push(miniItem);
    })
  }

  selectInitialMenuItemBasedOnUrl() {
    let path = document.location.pathname;
    let menuItem = this.menuItems.find((item) => {
      return item.routerLink[0] == path
    });
    if (menuItem) {
      let iconToFind = '.' + menuItem.icon!.replace('fa ', ''); // make fa fa-home into .fa-home
      let selectedIcon = document.querySelector(`${iconToFind}`);
      jQuery(selectedIcon).closest('li').addClass('menu-selected');
    }
  }

  ngAfterViewInit() {
    this.selectInitialMenuItemBasedOnUrl();
  }
}
