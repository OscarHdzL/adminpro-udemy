import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent implements OnInit {

  porcentaje1: number = 0;
  porcentaje2: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  porcentajeActualizado1(event: number){
    debugger
    this.porcentaje1 = event;
    
  }

  porcentajeActualizado2(event: number){
    this.porcentaje2 = event;
    
  }


}
