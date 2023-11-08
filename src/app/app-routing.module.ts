import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentComponent } from './student/student.component';
import { SettingsComponent } from './settings/settings.component';
import { ReportComponent } from './report/report.component';
import { MarkAttendanceComponent } from './mark-attendance/mark-attendance.component';

const routes: Routes = [
  // {
  //   path : "",
  //   component : HomeComponent
  // },
  {
    path : "report",
    component : ReportComponent
  },
  {
    path : "dashboard",
    component : DashboardComponent
  },
  {
    path : "student",
    component : StudentComponent
  },
  {
    path : "settings",
    component : SettingsComponent
  },
  {
    path : "mark-attendance",
    component :MarkAttendanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
