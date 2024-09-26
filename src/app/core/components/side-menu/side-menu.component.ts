import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { ALL_ROUTES } from '../../../shared/constants';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
  standalone: true,
  imports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    RouterModule,
  ],
})
export class SideMenuComponent {
  sideNavigationMenu: { id: string; routeUrl: string; label: string }[] = [
    { id: ALL_ROUTES.HOME_PAGE, routeUrl: ALL_ROUTES.HOME_PAGE, label: 'Home' },
    {
      id: ALL_ROUTES.PROFILE,
      routeUrl: ALL_ROUTES.PROFILE,
      label: 'Profile',
    },
    {
      id: ALL_ROUTES.TODO,
      routeUrl: ALL_ROUTES.TODO,
      label: 'Todo List',
    },
    {
      id: ALL_ROUTES.DOCS,
      routeUrl: ALL_ROUTES.DOCS,
      label: 'Document',
    },
    {
      id: ALL_ROUTES.ABOUT,
      routeUrl: ALL_ROUTES.ABOUT,
      label: 'About',
    },
  ];
}
