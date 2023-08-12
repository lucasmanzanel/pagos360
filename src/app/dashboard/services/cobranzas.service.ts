import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PathRest } from 'src/app/static/path';

@Injectable({
  providedIn: 'root'
})
export class CobranzasService {

  constructor(private http:HttpClient) { }

  getCobranzas(date:any):Observable<any>{

    return this.http.get(PathRest.GET_COBRANZAS + `/${date}`)
    
  }


}
