import { NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Component, viewChild } from '@angular/core';

import { NgApexchartsModule } from "ng-apexcharts";
import { CommonModule } from '@angular/common';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  grid: ApexGrid;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};





@Component({
    selector: 'app-express-market',
    imports: [
        NgClass,
        FormsModule,
        CommonModule,
        NgApexchartsModule
    ],
    templateUrl: './express-market.component.html',
    styleUrl: './express-market.component.css'
})
export class ExpressMarketComponent {
  activeTab: string = 'buy'; // Default active tab

  isDropdownOpen = false;
  selectedCurrency: string ='USD';
  currencies = ['UAH', 'USD', 'CHF', 'GBP'];

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectCurrency(currency: string) {
    this.selectedCurrency = currency;
    this.isDropdownOpen = false;
  }

  chips = [50, 100, 500, 1000, 2000];
  amount: number | null = null;

  onChipClick(value: number) {
    this.amount = value;
  }


  readonly chart = viewChild.required<ChartComponent>("chart");
  public chartOptions: ChartOptions;

  
  constructor() {
    this.chartOptions = {
      series: [
        {
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ],
      chart: {
        
        height: 350,
        type: "area",
        background: "#141518",
        
        foreColor:  "#f3ef52",
        toolbar: {
          show: true,
          tools: {
            download: false,   // вимкнути кнопку "download"
            zoom: false,       // вимкнути "zoom" (гумка для збільшення)
            zoomin: true,      // увімкнути кнопку "zoom in"
            zoomout: true,     // увімкнути кнопку "zoom out"
            pan: false,        // вимкнути "pan"
            reset: false       // вимкнути "reset zoom"
          }
        },
       
        
      },
      
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
      xaxis: {
        axisBorder: {
          color:"#141518"
        },
        
        
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z"
        ]
      },
      yaxis:{
        axisBorder: { show: false },
        axisTicks:  { show: false },
      },
      grid: {
        show:true
      },
      
      
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm"
        }
      }
    };
  }



}
