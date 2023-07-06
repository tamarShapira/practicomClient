import { Component,OnInit ,Input} from '@angular/core';
import {ParentServiceService} from 'src/app/parent-service.service';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.scss']
})
export class InstructionsComponent implements OnInit{
@Input()
 tempUser:string=this.parentService.parent.parentFirstName+" "+this.parentService.parent.parentLastName;

constructor(public parentService:ParentServiceService){
  console.log(this.tempUser);
// if(this.parentService.getFromStorage()!=null){
//   var JS_Obj=this.parentService.getFromStorage();
//   var res=[];
//   Object.keys(JS_Obj).forEach(function (key){
//   res.push(JS_Obj[key]);
//   }); }
//   if(this.tempUser)
//   this.tempUser=res[0]+" "+res[1];
// else
// this.tempUser="";
 }
ngOnInit(): void {
}
}
