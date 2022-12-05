import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboaardComponent } from './dashboaard/dashboaard.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'dashboaard',component:DashboaardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
