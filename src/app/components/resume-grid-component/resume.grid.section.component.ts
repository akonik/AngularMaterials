import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
    @Input() isOpened : boolean = false;

    @Output() onGridStateChanged = new EventEmitter();

    
    constructor() { }

    ngOnInit() { 

    }

    get IsOpened(){
        return this.isOpened;
    }

    toggleState(event){
        event.preventDefault();
        this.onGridStateChanged.emit();
    }

}