import { Component, OnInit } from '@angular/core';
import { CovidApiService } from './covid-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private covidMonit: CovidApiService) {}

  title = 'covid-monit';

  testing = () => {
    this.covidMonit.globalTotal().subscribe(data => console.log(data));
  }

  ngOnInit() {

  }
}
