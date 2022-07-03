import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesApp';
  public nombre:string = 'angie'
   public mostrarNombre() {
    console.log(this.nombre)
   }

}
