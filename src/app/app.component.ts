import { Component, OnInit } from '@angular/core';
import { CovidApiService } from './covid-api.service';
import Countries from './ISO-3166.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private covidMonit: CovidApiService) {  }
  countries = [];
  title = 'covid-monit';
  ngOnInit() {
    this.countries = Countries;
    console.log(Countries[0].name);
  }
}
