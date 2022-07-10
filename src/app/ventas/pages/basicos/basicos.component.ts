import { Component} from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {
  public nombre:string =  'Angie';
  public apellido:string = 'Garcia';

  public fecha:Date = new Date(); //EL día de hoy 

  constructor() { }

 

}
