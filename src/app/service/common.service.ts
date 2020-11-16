import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  getMockJson() {
    return this.http.get('../../assets/movie.json');
  }

  getIndiaNews() {
    return this.http.get('http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=33f3a0195d484ea0928cfad58fca34d7');
  }
}
