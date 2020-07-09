import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LineChartComponent } from './line-chart/line-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './doughnut-chart/doughnut-chart.component';
import { BubbleChartComponent } from './bubble-chart/bubble-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { RadarChartComponent } from './radar-chart/radar-chart.component';
import{PolarAreaChartComponent} from './polar-area-chart/polar-area-chart.component'
import{DynamicChartComponent}from './dynamic-chart/dynamic-chart.component'


const routes: Routes = [
  {
    path: "line-chart",
    component: LineChartComponent
  },
  {
    path: "bar-chart",
    component: BarChartComponent
  },
  {
    path: "doughnut-chart",
    component: DoughnutChartComponent
  },
  {
    path: "bubble-chart",
    component: BubbleChartComponent
  },
  {
    path: "pie-chart",
    component: PieChartComponent
  },
  {
    path: "radar-chart",
    component: RadarChartComponent
  },
  {
    path: "dynamic-chart",
    component: DynamicChartComponent
  },
  {
    path: "polar-area-chart",
    component: PolarAreaChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
