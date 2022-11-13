import {Component, EventEmitter, OnInit} from '@angular/core';
import {DataService} from "../../../services/data.service";
import Product from "../../../interfaces/product.interface";
import {ToastService} from "../../../services/toast.service";
import ProductClass from "../../../interfaces/class.interface";
import Category from "../../../interfaces/category.interface";
import { WebviewWindow } from '@tauri-apps/api/window'
import {WindowService} from "../../../services/window.service";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {

  model: Product = {
    name: '',
    price: 0,
    cost: 0,
    number: 0,
    description: '',
    category: '',
    class: '',
    barcode_ea: '',
    barcode_box: '',
    barcode_case: ''
  };

  nextItemNumber!: number;
  isNumberLoading = true;

  classes!: ProductClass[]
  categories!: Category[]
  inheritsPrice: boolean = false;

  constructor(private dataService: DataService, private windowService: WindowService) {
    dataService.categories$.subscribe(data => {
      this.categories = data
    })

    dataService.classes$.subscribe(data => {
      this.classes = data
    })

    dataService.getNextItemNumber().subscribe(data => {
      if(data) {
        this.nextItemNumber = data.value;
        this.model.number = this.nextItemNumber;
        this.isNumberLoading = false;
      }
    })
  }

  ngOnInit(): void {
  }

  submit(): void {
    this.dataService.addNewProduct(this.model);
    this.model = {
      name: '',
      price: 0,
      cost: 0,
      description: '',
      category: '',
      class: '',
      barcode_ea: '',
      barcode_box: '',
      barcode_case: '',
      number: 0
    };
  }

  categoryChanged(): void {
    console.log(this.model.category)
  }

  cancelForm(): void {
    if(!this.windowService.isMainWindow()) {
      this.windowService.closeWindow();
    }
  }

  classChanged(): void {
    setTimeout(() => {
      let docRef = this.dataService.getClassByName(this.model.class);
      docRef.valueChanges().subscribe(data => {
        this.inheritsPrice = data?.inherits_price!
        this.model.price = data?.class_price!;
        this.model.cost = data?.class_cost!;
        console.log(`Class ${data?.display_name} inherits: ${data?.inherits_price!} ${data?.inherits_price! ? 'does' : 'doesn\'t inherit price'}`)
      })
    }, 1000)
  }

}
