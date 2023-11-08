import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportComponent } from './report.component';
import { NgChartjsModule } from 'ng-chartjs';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    ReportComponent
  ],
  imports: [
    CommonModule,
    NgChartjsModule,
    NgxChartsModule, 
    BrowserAnimationsModule
  ]
})
export class ReportModule { }
