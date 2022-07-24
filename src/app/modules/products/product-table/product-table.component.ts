import { Component, OnInit } from '@angular/core';
import Product from "../../../interfaces/product.interface";
import {DataService} from "../../../services/data.service";
import {MatTableDataSource} from "@angular/material/table";
import {Observable} from "rxjs";

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.scss']
})
export class ProductTableComponent implements OnInit {
  displayedColumns: string[] = ['name', 'category', 'class', 'cost', 'price', 'profit'];
  dataSource!: MatTableDataSource<Product>;
  isLoading = true;

  constructor(private dataService: DataService) {
    this.dataSource = new MatTableDataSource<Product>();
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataService.products$.subscribe(data => {
      this.isLoading = false;
      this.dataSource.data = data
    })
  }

}
