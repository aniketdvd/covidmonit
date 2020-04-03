import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CovidApiService } from './covid-api.service';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { AdvisoriesComponent } from './advisories/advisories.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    AdvisoriesComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CovidApiService],
  bootstrap: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    AdvisoriesComponent,
    FooterComponent
  ]
})
export class AppModule { }
