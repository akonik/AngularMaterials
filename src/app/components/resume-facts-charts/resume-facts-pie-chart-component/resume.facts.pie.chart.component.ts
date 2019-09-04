import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { Label, SingleDataSet, monkeyPatchChartJsTooltip, monkeyPatchChartJsLegend } from 'ng2-charts';

@Component({
    selector: 'app-resume-fact-pie-chart',
    templateUrl: 'resume.facts.pie.chart.component.html'
})
export class ResumeFactsPieChartComponent implements OnInit {

    public pieChartOptions: ChartOptions = {
        responsive: true,
    };
    public pieChartLabels: Label[] =
        [['Iveonik Systems', 'Projects amount'],
        ['FunBitGames', 'Projects amount'],
        ['Storm Game Studio', 'Projects amount'],
        ['Softum', 'Projects amount']];
    public pieChartData: SingleDataSet = [1, 1, 3,7];
    public pieChartType: ChartType = 'pie';
    public pieChartLegend = true;
    public pieChartPlugins = [];

    constructor() {
        monkeyPatchChartJsTooltip();
        monkeyPatchChartJsLegend();
    }

    ngOnInit() {

    }

}