import { Component, OnInit } from '@angular/core';
import { CovidApiService } from './covid-api.service';
import { HttpClient } from '@angular/common/http';
import Countries from './ISO-3166.json';
import { CovidMonitStats } from './CovidMonitStats';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public lastUpdate: any /*= '"'*/;
  covidMonitStats: CovidMonitStats;
  constructor(private covidMonit: CovidApiService, private http: HttpClient) {
    this.covidMonit.globalTotal().subscribe(
      (dat) => this.covidMonitStats = dat
    );
    this.http.get(
      'https://covidapi.info/api/v1/latest-date',
      { responseType: 'text' }
    ).subscribe (
      (dat) => {
        this.lastUpdate /*+*/= dat /*+ '"'*/;
      }
    );
  }
  countries = [];
  title = 'covid-monit';

  changeStats(event): void {
    if (event.target.value !== 'global') {
      this.covidMonit.countryTotal(event.target.value)
      .subscribe(
        (dat) => {
          this.covidMonitStats.confirmed = dat
          .result[this.lastUpdate].confirmed;
          this.covidMonitStats.recovered = dat
          .result[this.lastUpdate].recovered;
          this.covidMonitStats.deaths    = dat
          .result[this.lastUpdate].deaths;
        }
      );
    } else {
      this.covidMonit.globalTotal().subscribe((dat) => {
        this.covidMonitStats.confirmed = dat.result.confirmed;
        this.covidMonitStats.recovered = dat.result.recovered;
        this.covidMonitStats.deaths    = dat.result.deaths;
      });
    }
  }

  ngOnInit() {
    this.countries = Countries;
    this.covidMonit.globalTotal().subscribe((dat) => {
      this.covidMonitStats.confirmed = dat.result.confirmed;
      this.covidMonitStats.recovered = dat.result.recovered;
      this.covidMonitStats.deaths    = dat.result.deaths;
    });
  }
}
