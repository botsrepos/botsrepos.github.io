import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {DataTableService} from './data-table/data-table.service';
import { NavbarComponent } from './navbar/navbar.component';
import {RouterModule} from '@angular/router';
import { EntryFormComponent } from './entry-form/entry-form.component';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    NavbarComponent,
    EntryFormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'home', component: DataTableComponent },
      {path: 'entryform', component: EntryFormComponent }
    ])
],
  providers: [DataTableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
