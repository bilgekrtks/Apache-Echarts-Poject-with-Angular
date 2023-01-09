import { AfterViewInit, Component, Input } from '@angular/core';
import * as echarts from 'echarts';
import { ChartModel } from '../model/charts.models';
@Component({
  template: ``,
  styleUrls: ['./abstract-class.component.scss'],
})
export abstract class AbstractClassComponent<T> implements AfterViewInit {
  chartDom!: HTMLElement;
  chart!: echarts.ECharts;
  @Input() chartId!: number;
  @Input() selectedChart!: ChartModel;
  constructor() {}

  ngAfterViewInit(): void {
    this.chartDom = document.getElementById('chart') ?? ({} as HTMLElement);
    this.chart = echarts.init(this.chartDom, {
      renderer: 'canvas',
    });
    this.chartDom.id = `${this.chartId}`;
    window.onresize = () => this.chart?.resize();
    this.chart.setOption(this.selectedChart.options);
  }
  protected abstract createChartId(): void;
}
