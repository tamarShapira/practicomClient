import { Component,OnInit } from '@angular/core';
import {ParentServiceService} from 'src/app/parent-service.service'
import { ChildServiceService } from './child-service.service';
import Parent from 'src/models/Parent';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  empty=new Parent(null,null,null,null,null,null,null,null)
  ngOnInit(): void {
   
  }
  title = 'practice-project';
}
