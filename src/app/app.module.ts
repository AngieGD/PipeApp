import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
 //Modulo personalizado
import { PrimeNgModule } from './prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PrimeNgModule
/*     ButtonModule,
    CardModule */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
