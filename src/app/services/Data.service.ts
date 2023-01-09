import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CategoryModel, ChartModel } from '../model/charts.models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  charts!: Observable<ChartModel[]>;
  category!: Observable<CategoryModel[]>;
  currentSelection$: Subject<number> = new Subject<number>();
  constructor(private http: HttpClient) {}
  getCharts() {
    this.charts = this.http.get<ChartModel[]>(
      'http://localhost:3000/chartsOption'
    );
    return this.charts;
  }

  getFilteredChart(id: number) {
    return id == 1
      ? this.getCharts()
      : this.getCharts().pipe(
          map((el) => el.filter((x) => x.categoryId === id))
        );
  }

  getCategories() {
    this.category = this.http.get<CategoryModel[]>(
      'http://localhost:3000/categories'
    );
    return this.category;
  }
  getTheme() {
    return this.http.get<any>('http://localhost:3000/vintageTheme');
  }
}
