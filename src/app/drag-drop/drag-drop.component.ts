import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { map, Observable, switchMap } from 'rxjs';
import { ChartModel } from '../model/charts.models';
import { DataService } from '../services/Data.service';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.scss'],
})
export class DragDropComponent {
  dockItems: MenuItem[] = [];
  routerItems: any[] = [];

  selectedCharts!: ChartModel[];
  draggedCharts: ChartModel | any;
  availableChats!: ChartModel[];
  cardsList$!: Observable<ChartModel[]>;
  constructor(public cardService: DataService) {}

  ngOnInit() {
    this.cardsList$ = this.cardService.getCharts();
    this.selectedCharts = [];
  }
  dragStart(product: ChartModel) {
    this.draggedCharts = product;
  }

  drop() {
    if (this.draggedCharts) {
      this.selectedCharts = [...this.selectedCharts, this.draggedCharts];
    }
  }
  // drop() {
  //   if (this.draggedCharts) {
  //     let draggedChartsIndex = this.findIndex(this.draggedCharts);
  //     this.selectedCharts = [...this.selectedCharts, this.draggedCharts];
  //     this.availableChats = this.availableChats.filter(
  //       (val, i) => i != draggedChartsIndex
  //     );
  //     this.draggedCharts = null;
  //   }
  // }

  dragEnd() {
    if (this.draggedCharts) {
      let draggedChartsIndex = this.findIndex(this.draggedCharts);
      this.selectedCharts = [...this.selectedCharts, this.draggedCharts];
      this.availableChats = this.availableChats.filter(
        (val, i) => i != draggedChartsIndex
      );
      this.draggedCharts = null;
    }
  }

  findIndex(product: ChartModel) {
    let index = -1;
    for (let i = 0; i < this.availableChats.length; i++) {
      if (product.id === this.availableChats[i].id) {
        index = i;
        break;
      }
    }
    return index;
  }
}
