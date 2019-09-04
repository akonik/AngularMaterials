import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { ResumeGridComponent } from './components/resume-grid-component/resume.grid.component';
import { MatTabsModule } from '@angular/material/tabs'
import { ResumeFactsLineChartComponent } from './components/resume-facts-charts/resume-facts-line-chart-component/resume.facts.line.chart.component';
import { ChartsModule } from 'ng2-charts';
import { ResumeFactsPieChartComponent } from './components/resume-facts-charts/resume-facts-pie-chart-component/resume.facts.pie.chart.component';
import { ResumeFactsRadarChartComponent } from './components/resume-facts-charts/resume-facts-radar-chart-component/resume.facts.radar.chat.component';
import { ResumeGridSectionComponent } from './components/resume-grid-component/resume.grid.section.component';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    ResumeGridComponent,
    ResumeGridSectionComponent,
    ResumeFactsLineChartComponent,
    ResumeFactsPieChartComponent,
    ResumeFactsRadarChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatTabsModule,
    ChartsModule,
    MatExpansionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
