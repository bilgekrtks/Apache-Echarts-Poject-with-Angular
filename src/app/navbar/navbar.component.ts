import { Component, Input, OnDestroy } from '@angular/core';
import { Observable, map, switchMap, takeUntil, Subject } from 'rxjs';
import { ChartModel } from '../model/charts.models';
import { DataService } from '../services/Data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnDestroy {
  private readonly onDestroy$: Subject<void> = new Subject<void>();
  filteredCards$!: Observable<ChartModel[]>;
  listCategories$!: Observable<any>;
  selection = 1;
  constructor(public cardService: DataService) {}

  ngOnInit() {
    this.listCategories$ = this.cardService.getCategories();
  }

  getFilter($event: number) {
    this.cardService.currentSelection$.next($event);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  getHome() {}
}
