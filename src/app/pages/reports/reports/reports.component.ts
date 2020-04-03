import { Component, OnInit, ViewChild, ElementRef, ViewChildren } from '@angular/core';

import currencyFormatter from "currency-formatter";

import { Category } from '../../categories/shared/category.model';
import { Entry } from '../../entries/shared/entry.model';
import { EntryService } from '../../entries/shared/entry.service';
import { CategoryService } from '../../categories/shared/category.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  expenseTotal: any = 0;
  revenueTotal: any = 0;  
  balance: any = 0;

  expenseChartData: any;
  revenueChartData: any;

  chartOptions = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        } 
      }]
    }
  };

  categories: Category[] = [];
  entries: Entry[] = [];

  @ViewChildren('month') month: ElementRef = null;
  @ViewChildren('year') year: ElementRef = null;

  constructor(
    private entryService: EntryService,
    private categoryService: CategoryService 
  ) { }

  ngOnInit() {
    this.categoryService.getAll()
    .subscribe(categories => this.categories = categories)

  }

  public generateReports() {
    const month = this.month.nativeElement.value;
    const year = this.year.nativeElement.value;

    if(!month || year)
      alert("Você precisa selecionar o Mês e o Ano para gerar um relatório.")
    else
      this.entryService.getByMonthAndYear(month, year)


  }

}
