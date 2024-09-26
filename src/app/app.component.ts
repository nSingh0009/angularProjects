import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { SideMenuComponent } from './core/components/side-menu/side-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, SideMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-doc';
}
