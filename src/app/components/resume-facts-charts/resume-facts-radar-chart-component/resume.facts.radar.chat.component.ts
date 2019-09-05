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
    scale: {
      ticks: {
        beginAtZero: true,
        max: 10
      }
    }

  };
  public radarChartLabels: Label[] =
    [
      'Backend',
      'Frontend',
      'Game Dev',
      'Databases',
    ];

  public radarChartData: ChartDataSets[] = [
    { data: [9, 7, 5, 8], label: 'Skills' },
  ];
  public radarChartType: ChartType = 'radar';

  constructor() { }

  ngOnInit() {

  }

}