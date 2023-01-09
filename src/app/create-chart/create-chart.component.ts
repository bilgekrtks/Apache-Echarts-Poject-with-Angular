import { Component } from '@angular/core';

import { ChartModel } from '../model/charts.models';
import { AbstractClassComponent } from '../abstract-class/abstract-class.component';
@Component({
  selector: 'app-create-chart',
  templateUrl: './create-chart.component.html',
  styleUrls: ['./create-chart.component.scss'],
})
export class CreateChartComponent extends AbstractClassComponent<ChartModel> {
  constructor() {
    super();
  }

  createChartId() {
    console.log('clickkk');
  }
}
