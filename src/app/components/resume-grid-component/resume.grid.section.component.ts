import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-resume-grid-section',
    templateUrl: 'resume.grid.section.component.html',
    styleUrls:['resume.grid.component.css']
})
export class ResumeGridSectionComponent implements OnInit {


    @Input() companyName : string;
    @Input() involvementDuration : string;
    @Input() projectRole : string;
    @Input() responsibilities: string[];
    @Input() toolsAndTechnologies : string;
    @Input() projects : string[];

    constructor() { }

    ngOnInit() { 

    }

}