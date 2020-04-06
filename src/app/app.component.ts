import { Component, OnInit } from '@angular/core';
import { CovidApiService } from './covid-api.service';
// import { HttpClient } from '@angular/common/http';
import Countries from './ISO-3166.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lastUpdate = {};
  dStats = {};
  constructor(private covidMonit: CovidApiService) {
    this.covidMonit.globalTotal().subscribe(
      (dat) => this.lastUpdate = dat
    );
    // console.log(this.globalLatest);
  }
  countries = [];
  title = 'covid-monit';

  // statsOfTime(value) {
  //   if (value === 'today') {
  //     this.covidMonit.globalToday(this.lastUpdate).subscribe((dat) => {
  //       // console.log(dat);
  //       this.dStats = dat;
  //     });
  //   } else {
  //     this.covidMonit.globalTotal().subscribe((dat) => {
  //       // console.log(dat);
  //       this.dStats = dat;
  //     });
  //   }
  // }

  ngOnInit() {
    this.countries = Countries;
    this.covidMonit.globalTotal().subscribe((dat) => {
      // console.log(dat);
      this.dStats = dat;
    });
  }
}
