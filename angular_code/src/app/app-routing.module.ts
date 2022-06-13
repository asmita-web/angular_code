import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';


const routes: Routes = [
{
  path:"",
  component:LoginpageComponent
},
{
  path:"login",
  component:LoginpageComponent
},
{
  path:"homepage",
  component:HomepageComponent
},
{
  path:"homepage/:id",
  component:HomepageComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
