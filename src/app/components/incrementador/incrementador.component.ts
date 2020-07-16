import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormsModule} from '@angular/forms'


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {

//@ViewChild 

  @Input() leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;
  //@Output() leyendaOutput = new EventEmitter<string>();
  @Output() porcentajeOutput: EventEmitter <number> = new EventEmitter<number>();

  constructor() { 
    console.log(this.leyenda);
    console.log(this.porcentaje);
  }

  ngOnInit(): void {
  }

  aumentar(){
    if(this.porcentaje < 100 ){
      this.porcentaje += 1;
      this.porcentajeOutput.emit(this.porcentaje);

    }
    
    
  }
  

  disminuir(){
    
    if(this.porcentaje > 0  ){
      this.porcentaje -= 1;
      this.porcentajeOutput.emit(this.porcentaje);

    }

    
  
  }

  onChanges(event: number){
    //this.porcentaje = event;
    console.log(event);
    this.porcentajeOutput.emit(this.porcentaje);
  }

}
