import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuModule} from "primeng/menu";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DashboardComponent} from './dashboard/dashboard.component';
import {AlltimesComponent} from './alltimes/alltimes.component';
import {TimesheetComponent} from './timesheet/timesheet.component';
import {ProjectsComponent} from './projects/projects.component';
import {ProfileComponent} from './profile/profile.component';
import {SettingsComponent} from './settings/settings.component';
import {PanelModule} from "primeng/panel";
import {StatisticComponent} from './statistic/statistic.component';
import {ChartModule} from "primeng/chart";
import {ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {FielderrorsComponent} from './fielderrors/fielderrors.component';
import {ButtonModule} from 'primeng/button';
import {InputMaskModule} from 'primeng/inputmask';
import {InputTextareaModule} from 'primeng/inputtextarea';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AlltimesComponent,
    TimesheetComponent,
    ProjectsComponent,
    ProfileComponent,
    SettingsComponent,
    StatisticComponent,
    FielderrorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MenuModule,
    PanelModule,
    ChartModule,
    InputTextModule,
    ButtonModule,
    InputMaskModule,
    InputTextareaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
