import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class EvidenciaService {

  constructor(private http:HttpClient ) { }

  getCadenaB64():any {
    return this.http.get("http://localhost:3000/posts/1", {params : {}})
  }
}
