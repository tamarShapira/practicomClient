import { Component,OnInit ,OnChanges,Input, Output, EventEmitter, OnDestroy,ViewChild,} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {FormsModule} from '@angular/forms'

import Parent from 'src/models/Parent';
import Child from 'src/models/Child';
import {ParentServiceService} from 'src/app/parent-service.service';
import { ChildServiceService } from '../child-service.service';

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.scss']
})

export class ParentFormComponent implements OnInit{

data = [];
isAddingChild=false;
// @ViewChild('myForm') form: any;
constructor(
  public parentService: ParentServiceService,
  public childServise: ChildServiceService) {}

ngOnInit(): void {
}

funcAdd(){
  console.log("addChild")
  this.isAddingChild=true;
  console.log(this.isAddingChild)
}
save(parent){
//  console.log('parent:', this.parentService.parent);
//   this.parentService.parent.children = this.parentService.Children;
//   if (this.form.valid) {
//     const find = this.parentService
//       .getParent(this.parentService.parent.parentId)
//       .subscribe(
//         (succ) => {
//           if (succ === null) {
//             console.log('parent: ', this.parentService.parent.parentSpecies);
//             console.log('children', this.parentService.Children);
//             this.parentService
//               .addParent(
//                 new Parent(
//                   0,
//                   this.parentService.parent.parentFirstName,
//                   this.parentService.parent.parentLastName,
//                    this.parentService.parent.parentId,
//                   this.parentService.parent.parentDOB,
//                   this.parentService.parent.parentHMO,
//                   this.parentService.parent.parentSpecies,
//                   this.parentService.Children,
//                 )
//               )
//               .subscribe(
//                 (succ) => {
//                   this.parentService.Children.map;
//                   console.log('succ', succ);
//                   alert('ברוך הבא');
//                   this.data.push(
//                     new Parent(
//                       0,
//                       this.parentService.parent.parentFirstName,
//                       this.parentService.parent.parentLastName,
//                       this.parentService.parent.parentId,
//                       this.parentService.parent.parentDOB,
//                       this.parentService.parent.parentHMO,
//                       this.parentService.parent.parentSpecies,
//                       this.parentService.Children,
//                     )
//                   );
//                   this.parentService.Children.map((item) =>
//                     this.data.push(
//                       new Child(
//                         item.Id,
//                         item.childName,
//                         item.childId,
//                         item.childDOB
//                       )
//                     )
//                   );
//                   this.parentService.Children=[]
//                   this.data = [];
//                 },
//                 (err) => {
//                   console.log('err', err);
//                 }
//               );
//           } else {
//             console.log('succes:)))))))', succ);
//             alert('אתה כבר רשום למערכת');
//           }
//         },
//         (err) => {
//           console.log('err', err);
//         }
//       );
//   }
  console.log('saveparent');
  console.log(this.parentService.parent.parentFirstName)
  console.log(this.parentService.Children)

   this.parentService.addParent(new Parent
    (0,
    this.parentService.parent.parentFirstName,
    this.parentService.parent.parentLastName,
    this.parentService.parent.parentId,
    this.parentService.parent.parentDOB,
    this.parentService.parent.parentHMO,
    this.parentService.parent.parentSpecies,
    this.parentService.Children)).subscribe(succ=>{succ},err=>{console.log(err);console.log("error from adding user")})
   this.data.push(this.parentService.parent)
   this.data.push(this.parentService.Children)
 this.parentService.currentParent=this.parentService.parent
 localStorage.setItem("wasSaved",JSON.stringify(true))
 this.parentService.parent=new Parent(null,"","","",new Date(),null,null,null)
 this.isAddingChild=false;
 }
 saveChild(child){
  
// console.log('child', this.parentService.child);
// this.parentService.Children.push(
//   new Child(
//     this.parentService.child.Id,
//     this.parentService.child.childName,
//     this.parentService.child.childId,
//     this.parentService.child.childDOB
//   )
// );
// console.log('children', this.parentService.Children);

  console.log("saveChild")
  console.log(this.parentService.child)
  this.parentService.Children.push(this.parentService.child)
  this.parentService.child=new Child(0,"","",new Date())
  console.log(this.parentService.Children);
  this.isAddingChild=false;
 }
}


 