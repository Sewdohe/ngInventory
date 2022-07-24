import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ProductsDashComponent} from "./modules/products/products-dash/products-dash.component";
import {ProductTableComponent} from "./modules/products/product-table/product-table.component";
import {NewProductComponent} from "./modules/products/new-product/new-product.component";
import {NewCategoryComponent} from "./modules/products/new-category/new-category.component";
import {NewClassComponent} from "./modules/products/new-class/new-class.component";
import {InvoiceDashboardComponent} from "./modules/invoices/invoice-dashboard/invoice-dashboard.component";
import {NewInvoiceComponent} from "./modules/invoices/new-invoice/new-invoice.component";
import { InvoiceViewComponent } from './modules/invoices/invoice-view/invoice-view.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'products', component: ProductsDashComponent},
  {path: 'products/view', component: ProductTableComponent},
  {path: 'products/new-product', component: NewProductComponent},
  {path: 'products/new-class', component: NewClassComponent},
  {path: 'products/new-category', component: NewCategoryComponent},
  {path: 'invoices', component: InvoiceDashboardComponent},
  {path: 'invoices/new-invoice', component: NewInvoiceComponent},
  {path: 'invoices/view-invoice', component: InvoiceViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
