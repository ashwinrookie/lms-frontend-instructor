import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpInterceptorService } from './core';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbModule,
		HttpClientModule
	],
	providers: [
		{
			provide: HTTP_INTERCEPTORS,
			useClass: HttpInterceptorService,
			multi: true
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule { }