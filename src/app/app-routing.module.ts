import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {InstructionsComponent} from './instructions/instructions.component'
import {ParentFormComponent} from './parent-form/parent-form.component'
import {NavBarComponent} from './nav-bar/nav-bar.component'

const routes: Routes = [
  {path:"",component:InstructionsComponent},
  {path:"instructions",component:InstructionsComponent},
  {path:"form",component:ParentFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
