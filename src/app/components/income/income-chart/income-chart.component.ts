import { Component, OnInit } from '@angular/core';
import {Income} from "../income.model";

@Component({
  selector: 'app-income-chart',
  templateUrl: './income-chart.component.html',
  styleUrls: ['./income-chart.component.css']
})
export class IncomeChartComponent implements OnInit {

  incomes: Income[];

  constructor() { }

  ngOnInit(): void {
  }

  getAchievedPercentage(goal: number, amount: number): number {
    return (amount / goal) * 100;
  }

  // Progress Bars
  move() {
    let elem = document.getElementById("myBar");
    let width = 5;
    let id = setInterval(frame, 10);
    function frame() {
      if (width == 100) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + '%';
        elem.innerHTML = width * 1  + '%';
      }
    }
  }

}
