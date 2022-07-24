import { Component, OnInit } from '@angular/core';
import Category from "../../../interfaces/category.interface";
import ProductClass from "../../../interfaces/class.interface";
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-new-class',
  templateUrl: './new-class.component.html',
  styleUrls: ['./new-class.component.scss']
})
export class NewClassComponent implements OnInit {
  categories!: Category[]
  model: ProductClass = {
    display_name: '',
    name: '',
    inherits_price: false,
    class_price: 0,
    class_cost: 0,
    category: ''
  }

  constructor(private dataService: DataService) {
    dataService.categories$.subscribe(data => {
      this.categories = data
    })
  }

  ngOnInit(): void {
  }

  categoryChanged(): void {
    console.log(`category changed to ${this.model.category}`)
  }

  submit(): void {
    this.dataService.addNewClass(this.model);
    this.model = {
      display_name: '',
      name: '',
      inherits_price: false,
      class_price: 0,
      class_cost: 0,
      category: ''
    }
  }

}
