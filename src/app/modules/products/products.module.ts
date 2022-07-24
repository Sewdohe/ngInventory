import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductsDashComponent } from './products-dash/products-dash.component';
import {AppRoutingModule} from "../../app-routing.module";
import {SharedModule} from "../shared/shared.module";
import { NewProductComponent } from './new-product/new-product.component';
import { NewClassComponent } from './new-class/new-class.component';
import { NewCategoryComponent } from './new-category/new-category.component';



@NgModule({
  declarations: [
    ProductTableComponent,
    ProductsDashComponent,
    NewProductComponent,
    NewClassComponent,
    NewCategoryComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: []
})
export class ProductsModule { }
