import { Component, OnInit, Input } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';



@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {
@Input() titulo: string = 'Sin titulo'
@Input() etiquetas: Label[];
@Input() datos: MultiDataSet;
@Input() colors: Color[];

  

 /* // Doughnut
 public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
 public doughnutChartData: MultiDataSet = [
   [350, 450, 100]//900
 ];

 public colores: Color[] = [
   { backgroundColor: ['#5DADE2','#C0392B','#7DCEA0']  }
 ];
 */

 constructor() { }

 ngOnInit() {
 }

 // events
 public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
   console.log(event, active);
 }

 public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
   console.log(event, active);
 }
 
}
