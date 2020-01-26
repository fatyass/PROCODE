import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cours } from '../shared/cours';
import { Observable, observable, from } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token',

  }),
};

@Injectable({
  providedIn: 'root'
})
export class CoursService {
  private REST_API_SERVER = "http://localhost:3306/api/courses";

  
    constructor(private http: HttpClient) { }
    //get("/courses")
    getCours(): Observable<Cours[]> {
      
      return this.http.get<Cours[]>(this.REST_API_SERVER, httpOptions);
      
    }
    //post("/courses")
    addCours(newCours: Cours): Observable<Cours[]> {
      console.log(newCours);
  
      return this.http.post<Cours[]>(this.REST_API_SERVER, JSON.stringify(newCours), httpOptions);
    }
    //get("/courses/:id")
    Cours(id: String): Observable<Cours[]> {
      const url = `${this.REST_API_SERVER}/${id}`;
      return this.http.get<Cours[]>(url, httpOptions);
    }
    //put("/courses/:id")
    updateCours(updateCours: Cours): Observable<Cours[]> {
      const url = `${this.REST_API_SERVER}/${updateCours.id}`;
  
      let updatedCours = {
        //TODO
      }
      return this.http.put<Cours[]>(url, JSON.stringify(updatedCours));
    }
    //delete("/courses/:id")
    deleteCours(id: String): Observable<Cours[]> {
      const url = `${this.REST_API_SERVER}/${id}`;
      console.log(id);
      return this.http.delete<Cours[]>(url, httpOptions);
    }
  }
  

