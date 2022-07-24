import { Component, OnInit } from '@angular/core';
import Product from "../../../interfaces/product.interface";
import {DataService} from "../../../services/data.service";
import Category from "../../../interfaces/category.interface";

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})
export class NewCategoryComponent implements OnInit {

  model: Category = {
    display_name: '',
    tax_group: '',
    name: ''
  }

  constructor(private dataService: DataService) { }

  ngOnInit(): void { }

  submit(): void {
    this.dataService.addNewCategory(this.model);
    this.model = {
      display_name: '',
      tax_group: '',
      name: ''
    }
  }
}
