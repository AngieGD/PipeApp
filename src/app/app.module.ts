import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

//CAmbiar el idioma
import  localEs  from "@angular/common/locales/es-CO";
import { registerLocaleData } from "@angular/common";
registerLocaleData(localEs)


@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRouterModule,
		SharedModule,
		VentasModule
		/*     ButtonModule,
			CardModule */
	],
	providers: [
		{provide: LOCALE_ID , useValue: 'es-CO'}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
