import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CovidApiService {
  constructor(private http: HttpClient) { }

  public lastRecordDateSource = 'https://covidapi.info/api/v1/latest-date';
  private globalTotalSource = 'https://covidapi.info/api/v1/global';

  public countryTotal(countryIso): any {
    return this.http.get(
        'https://covidapi.info/api/v1/country/' + countryIso + '/latest'
    );
  }

  public globalTotal(): any {
    // this.http.get(this.globalTotalSource);
    return this.http.get('https://covidapi.info/api/v1/global');
  }
}
