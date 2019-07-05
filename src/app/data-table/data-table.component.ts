import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable } from '@angular/material';
import { DataTableDataSource } from './data-table-datasource';
import {DataTableItem} from './data-table-item.model';
import {DataTableService} from './data-table.service';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<DataTableItem>;
  dataSource: DataTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['authors', 'title', 'year', 'journal', 'paperLink', 'dataLink', 'abstract'];

  cardContent ;

  setCardValues(author) {
    this.cardContent = author;
    console.log(this.cardContent);
  }

  ngOnInit() {
    this.dataSource = new DataTableDataSource(this.dataService);

  }
  constructor(private dataService: DataTableService) { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    // this.table.renderRows();
  }
}
