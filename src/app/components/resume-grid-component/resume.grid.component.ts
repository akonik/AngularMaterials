import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-resume-grid',
    templateUrl: 'resume.grid.component.html',
    styleUrls: ['resume.grid.component.css']
})
export class ResumeGridComponent implements OnInit {

    private gridOpenStates : boolean[];

    constructor() {
        this.gridOpenStates = new Array<boolean>();
     }

    ngOnInit() {

    }

    getGridState(gridId:number){
        if(typeof this.gridOpenStates[gridId] === 'undefined'){
            this.gridOpenStates[gridId] = false;
            console.log(this.gridOpenStates);
        }

        return this.gridOpenStates[gridId];
    }

    onGridStateChanged(gridId:number){
        if(typeof this.gridOpenStates[gridId] === 'undefined'){
            return;
            
        }

        this.gridOpenStates[gridId] = !this.gridOpenStates[gridId];
    }   

}