import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject,Subject } from 'rxjs';
import Child from 'src/models/Child';

@Injectable({
  providedIn: 'root'
})
export class ChildServiceService {

  constructor(public http:HttpClient) { }
  GetChildren():Observable<Child[]>{
    return this.http.get<Child[]>("https://localhost:7054/api/Child")
  }
  GetChild(id:string):Observable<Child>{
   return this.http.get<Child>(`https://localhost:7054/api/Child/${id}`)
 }

 PostChild(child: Child){
   return this.http.post("https://localhost:7054/api/Child",child)
 }
 DeleteChild(id:string){
   return this.http.delete(`https://localhost:7054/api/Child/${id}`)
 }
}
