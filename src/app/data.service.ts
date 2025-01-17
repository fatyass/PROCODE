import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams} from '@angular/common/http';
import{ Observable, observable, from} from 'rxjs';
import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import{ Cours } from './Cours';
import { Courses } from './classes/courses';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private REST_API_SERVER = "http://localhost:3306";
  configUrl = 'assets/config.json';
  
  constructor(private httpClient: HttpClient) { }
  
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  /*
  public sendGetRequest(){
    return this.httpClient.get<Courses[]>(this.REST_API_SERVER, 
      {  params: new HttpParams({fromString: "_page=1&_limit=20"}), observe: "response"}).pipe(retry(3), catchError(this.handleError), 
      tap(res => {
      console.log(res.headers.get('Link'));
      this.parseLinkHeader(res.headers.get('Link'));
    }));
  }
  public sendGetRequestToUrl(url: string){
    return this.httpClient.get<Courses[]>(url, { observe: "response"}).pipe(retry(3), catchError(this.handleError),
     tap(res => {
      console.log(res.headers.get('Link'));
      this.parseLinkHeader(res.headers.get('Link'));
    }));
  }*/

  public sendGetRequest(){
    return this.httpClient.get(this.REST_API_SERVER);
  }

  

  getConfig() {
    return this.httpClient.get(this.configUrl);
  }
 public first: string = "";
 public prev: string = "";
 public next: string = "";
 public last: string = "";
 parseLinkHeader(header) {
  if (header.length == 0) {
    return ;
  }
  let parts = header.split(',');
  var links = {};
  parts.forEach( p => {
    let section = p.split(';');
    var url = section[0].replace(/<(.*)>/, '$1').trim();
    var name = section[1].replace(/rel="(.*)"/, '$1').trim();
    links[name] = url;
  });
  this.first  = links["first"];
  this.last   = links["last"];
  this.prev   = links["prev"];
  this.next   = links["next"]; 
}

}