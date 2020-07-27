import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IncomeDetailComponent} from "./components/income/income-detail/income-detail.component";
import {MainPageComponent} from "./components/main-page/main-page.component";
import {LoginComponent} from "./auth/login/login.component";
import {TestComponent} from "./test/test.component";


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: MainPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'income/edit', component: IncomeDetailComponent},
  {path: 'test', component: TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
