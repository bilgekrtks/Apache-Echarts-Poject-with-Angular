import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateChartComponent } from './create-chart/create-chart.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import { TableModule } from 'primeng/table';
import { DockModule } from 'primeng/dock';
import { DragDropModule } from 'primeng/dragdrop';
import { ListboxModule } from 'primeng/listbox';
@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavbarComponent,
    CreateChartComponent,
    DragDropComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CardModule,
    DockModule,
    ListboxModule,
    DropdownModule,
    ButtonModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    DragDropModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
