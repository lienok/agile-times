import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from './dashboard/dashboard.component';
import {StatisticComponent} from './statistic/statistic.component';
import {TimesheetComponent} from './timesheet/timesheet.component';
import {ProjectsComponent} from './projects/projects.component';
import {ProfileComponent} from './profile/profile.component';
import {SettingsComponent} from './settings/settings.component';

import {AlltimesComponent} from './alltimes/alltimes.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FielderrorsComponent} from './fielderrors/fielderrors.component';
import {PanelModule} from 'primeng/panel';
import {MenuModule} from 'primeng/menu';
import {ChartModule} from 'primeng/chart';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import {InputMaskModule} from 'primeng/inputmask';


const appRoutes: Routes = [
  { path: "", redirectTo: "/dashboard", pathMatch: "full" },
  { path: "dashboard", component: DashboardComponent },
  { path: "alltimes", component: AlltimesComponent },
  { path: "timesheet", component: TimesheetComponent},
  { path: "projects", component: ProjectsComponent},
  { path: "profile", component: ProfileComponent},
  { path: "settings", component: SettingsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    StatisticComponent,
    TimesheetComponent,
    ProjectsComponent,
    AlltimesComponent,
    ProfileComponent,
    SettingsComponent,
    FielderrorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MenuModule,
    PanelModule,
    ChartModule,
    ButtonModule,
    InputMaskModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
