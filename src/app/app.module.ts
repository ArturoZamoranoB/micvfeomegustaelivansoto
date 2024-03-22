import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UchalamamaComponent } from './componentes/uchalamama/uchalamama.component';
import { ResumenpersonalComponent } from './Vista3/resumenpersonal/resumenpersonal.component';
import { Vista2Component } from './Home/vista2/vista2.component';
import { Vista4Component } from './ApiOne/vista4/vista4.component';
import { ApiComponent } from './api/api/api.component';

@NgModule({
  declarations: [
    AppComponent,
    UchalamamaComponent,
    ResumenpersonalComponent,
    Vista2Component,
    Vista4Component,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
