import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Observable, switchMap, takeUntil, Subject, tap } from 'rxjs';
import { ChartModel } from '../model/charts.models';
import { DataService } from '../services/Data.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnDestroy, OnInit, AfterViewInit {
  private readonly onDestroy$: Subject<void> = new Subject<void>();
  id!: number;
  filteredCards$: Observable<ChartModel[]> =
    this.cardService.currentSelection$.pipe(
      takeUntil(this.onDestroy$),
      switchMap((selection) => this.cardService.getFilteredChart(selection))
    );

  constructor(public cardService: DataService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.cardService.currentSelection$.next(1);
    this.cardService.getCharts();
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
