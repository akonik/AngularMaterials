import { Component, OnInit } from '@angular/core';
import { RadialChartOptions, ChartDataSets, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
    selector: 'app-resume-facts-radar-chart',
    templateUrl: 'resume.facts.radar.chat.component.html'
})
export class ResumeFactsRadarChartComponent implements OnInit {


    public radarChartOptions: RadialChartOptions = {
        responsive: true,
      };
      public radarChartLabels: Label[] = 
      [
          'C#', 
          'ASP.NET', 
          'Angular', 
          'React.JS', 
          'SQL', 
          'Unity',
          'UnrealEngine4'
        ];
    
      public radarChartData: ChartDataSets[] = [
        { data: [9, 7, 2, 1, 8, 2, 2], label: 'Technologies used in projects' },
      ];
      public radarChartType: ChartType = 'radar';

    constructor() { }

    ngOnInit() { 

    }

}