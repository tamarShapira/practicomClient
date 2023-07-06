import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject,Subject } from 'rxjs';
import Child from 'src/models/Child';
import Parent from 'src/models/Parent';
//import {  throwError } from 'rxjs';
//import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ParentServiceService {
  parent:Parent=new Parent(0,"","","",new Date(),"","",[]);
  child:Child=new Child(0,"","",new Date())
  Children:Child[]=[]
  currentParent=new Parent(null,"","","",new Date(),"","",[])

  constructor(private http:HttpClient) { Parent}
  // currentParent=new BehaviorSubject<{}>(null);
  
 setInStorage(prnt){
  sessionStorage.setItem("currentParent",JSON.stringify(prnt));
 }
 removeFromStorage(){
  sessionStorage.removeItem("currentParent");
 }
 getFromStorage(){
  let p=sessionStorage.getItem("currentParent");
  if(p==null)
  return null;
  return JSON.parse(p);
 }
  addParent(prnt:Parent):Observable<Parent>{
    return this.http.post<Parent>("https://localhost:7054/api/Parent",prnt);
  }
  getParent(id:string):Observable<Parent>{
    return this.http.get<Parent>(`https://localhost:7054/api/Parent/${id}`)
  }
  // DeleteParent(id:string){
  //   return this.http.delete(`https://localhost:7146/api/Parents/${id}`)
  // }
 
}
