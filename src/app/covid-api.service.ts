import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {
  // public LastRecordDate;

  constructor(private http: HttpClient) {
    // this.http.get(this.lastRecordDateSource)
    // .subscribe(
    //   (dat) => this.LastRecordDate = '\'' + dat + '\''
    // );
  }

  public lastRecordDateSource = 'https://covidapi.info/api/v1/latest-date';
  // private countryTotalSource = '';
  // private countryTodayource = '';
  private globalTotalSource = 'https://covidapi.info/api/v1/global';
  // private globalTodaySource = '';

  // public lastRecordDate(): any {
  //   return this.http.get(this.lastRecordDateSource);
  // }

  public countryTotal(countryIso): any {
    return this.http.get(
        'https://covidapi.info/api/v1/country/' + countryIso + '/latest'
    );
  }

  // public countryToday(countryIso: any): any {
  //   return this.http.get(
  //       'https://covidapi.info/api/v1/country/' +
  //       countryIso +
  //       '/' + this.LastRecordDate
  //   );
  // }

  public globalTotal(): any {
    // this.http.get(this.globalTotalSource);
    return this.http.get('https://covidapi.info/api/v1/global');
  }

  // public globalToday(date): any {
  //   return this.http.get(
  //       'https://covidapi.info/api/v1/global/' +
  //       date
  //   );
  // }
}
