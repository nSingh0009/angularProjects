import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { AboutComponent } from './core/components/about/about.component';
import { ProfileComponent } from './core/components/profile/profile.component';
import { TodoComponent } from './core/components/todo/todo.component';
import { LifeCycleComponent } from './core/components/life-cycle/life-cycle.component';
import { DocsComponent } from './core/components/docs/docs.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { ALL_ROUTES } from './shared/constants';

export const routes: Routes = [
  {
    path: ALL_ROUTES.HOME_PAGE,
    component: HomeComponent,
  },
  {
    path: ALL_ROUTES.ABOUT,
    component: AboutComponent,
  },
  {
    path: ALL_ROUTES.PROFILE,
    component: ProfileComponent,
  },
  { path: ALL_ROUTES.TODO, component: TodoComponent },
  { path: ALL_ROUTES.LIFECYCLE, component: LifeCycleComponent },
  { path: ALL_ROUTES.DOCS, component: DocsComponent },
  { path: '', redirectTo: `/${ALL_ROUTES.HOME_PAGE}`, pathMatch: 'full' },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
