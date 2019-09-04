import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
    selector: 'app-resume-facts-line-chart',
    templateUrl: 'resume.facts.line.chart.component.html'
})
export class ResumeFactsLineChartComponent implements OnInit {

    public lineChartData: ChartDataSets[] = [
        { data: [11, 25, 36, 21], label: 'Work time in companies (months)' },
    ];
    public lineChartLabels: Label[] = ['Iveonik Systems', 'FunBitGames', 'Storm Game Studio', 'Softum - Current'];
    public lineChartOptions: (ChartOptions) = {
        responsive: true,
    };
    public lineChartColors: Color[] = [
        {
            borderColor: 'black',
            backgroundColor: 'rgba(255,0,0,0.3)',
        },
    ];
    public lineChartLegend = true;
    public lineChartType = 'line';
    public lineChartPlugins = [];


    constructor() { }

    ngOnInit() {

    }

}