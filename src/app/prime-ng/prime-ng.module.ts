import { NgModule } from '@angular/core';

//primeNg
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';

//menubar Ng
import {MenubarModule} from 'primeng/menubar';

@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule

  ],
})
export class PrimeNgModule { }
