import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import { InvoiceDashboardComponent } from './invoice-dashboard/invoice-dashboard.component';
import { NewInvoiceComponent } from './new-invoice/new-invoice.component';
import { InvoiceViewComponent } from './invoice-view/invoice-view.component';



@NgModule({
  declarations: [
    InvoiceDashboardComponent,
    NewInvoiceComponent,
    InvoiceViewComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class InvoicesModule { }
