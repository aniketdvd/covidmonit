import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {
  constructor(private http: HttpClient) {}

  private lastRecordDateSource = 'https://covidapi.info/api/v1/latest-date';
  // private countryTotalSource = '';
  // private countryTodayource = '';
  private globalTotalSource = 'https://covidapi.info/api/v1/global';
  // private globalTodaySource = '';

  private lastRecordDate(): any {
      this.http.get(this.lastRecordDateSource)
      .toPromise()
      .then(
          data => {
              return data;
          }
      );
  }

  public countryTotal(countryIso: string): any {
      this.http.get(
          'https://covidapi.info/api/v1/country/' +
          countryIso +
          '/latest'
      )
      .toPromise()
      .then(
          data => {
              return data;
          }
      );
  }

  public countryToday(countryIso: string): any {
      this.http.get(
          'https://covidapi.info/api/v1/country/' +
          countryIso +
          '/' + this.lastRecordDate()
      )
      .toPromise()
      .then(
          data => {
              return data;
          }
      );
  }

  public globalTotal(): any {
      return this.http.get('https://covidapi.info/api/v1/global');
  }

  public globalToday(countryIso: string): any {
      this.http.get(
          'https://covidapi.info/api/v1/global/' +
          this.lastRecordDate()
      )
      .toPromise()
      .then(
          data => {
              return data;
          }
      );
  }
}
