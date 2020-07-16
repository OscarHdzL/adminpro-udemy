import { Component, OnInit } from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: [
  ]
})
export class Graficas1Component implements OnInit {
  titulo1: string = 'Dona 1'
  etiquetas1 = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  datos1 = [60, 10 , 30];
  colors1 = [
    { backgroundColor: ['#5DADE2','#C0392B','#7DCEA0']  }
  ];

  titulo2: string = 'Dona 2'
  etiquetas2 = ['Ingresos', 'Egresos'];
  datos2 = [ 1000, 2000];
  colors2 = [
    { backgroundColor: ['#F5B041','#F4D03F']  }
  ];
  


 constructor() { }

 ngOnInit() {
 }


 
}
