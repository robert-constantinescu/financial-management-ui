import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncomeComponent } from './components/income/income.component';
import { IncomeChartComponent } from './components/income/income-chart/income-chart.component';
import { IncomeDetailComponent } from './components/income/income-detail/income-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    IncomeComponent,
    IncomeChartComponent,
    IncomeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
