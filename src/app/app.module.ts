import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
/*     ButtonModule,
    CardModule */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
