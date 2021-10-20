import { CreateComponent } from './components/create/create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadComponent } from './components/read/read.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'create',
    pathMatch:'full'
  },
{
  path:'create',
  component:CreateComponent
},
{
  path:'read',
  component:ReadComponent
},
{
  path: 'edit/:i',
  component:CreateComponent,
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
