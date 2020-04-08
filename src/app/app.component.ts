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
  public lastUpdate: any = '"';
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
        this.lastUpdate += dat + '"';
      }
    );
    // console.log(this.globalLatest);
  }
  countries = [];
  title = 'covid-monit';

  changeStats(event): void {
    if (event.target.value !== 'global') {
      // alert(event.target.value);
      this.covidMonit.countryTotal(event.target.value)
      .subscribe(
        (dat) => {
          // alert(this.lastUpdate);
          this.covidMonitStats.confirmed = dat
          .result[this.lastUpdate.replace(/['"]+/g, '')].confirmed;
          this.covidMonitStats.recovered = dat
          .result[this.lastUpdate.replace(/['"]+/g, '')].recovered;
          this.covidMonitStats.deaths    = dat
          .result[this.lastUpdate.replace(/['"]+/g, '')].deaths;
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
      // console.log(dat);
      this.covidMonitStats.confirmed = dat.result.confirmed;
      this.covidMonitStats.recovered = dat.result.recovered;
      this.covidMonitStats.deaths    = dat.result.deaths;
    });
    // this.covidMonit.lastRecordDate().subscribe(
    //   (dat: string) => this.lastUpdate = dat
    // );
  }
}
