import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Favrouite } from './../../models/favrouite';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
const localUrl = 'https://jsonplaceholder.typicode.com/todos';
const limit = "?_limit=10";

@Injectable({
  providedIn: 'root'
})


export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  getFavrouite():Observable<Favrouite[]>{
    return this.httpClient.get<Favrouite[]>(`${localUrl}${limit}`);
  }
  
    
}
