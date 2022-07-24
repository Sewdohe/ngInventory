import { Component, OnInit } from '@angular/core';
import { InvoiceLine, Invoice } from 'src/app/interfaces/invoice.interface';
import { InvoiceService } from 'src/app/services/invoice.service';
import { MatTableDataSource } from '@angular/material/table'
import { WindowService } from 'src/app/services/window.service';

@Component({
  selector: 'app-invoice-view',
  templateUrl: './invoice-view.component.html',
  styleUrls: ['./invoice-view.component.scss']
})
export class InvoiceViewComponent implements OnInit {
  dataSource: MatTableDataSource<{name: string, qty: number, price: number}> = new MatTableDataSource();
  displayedColumns = ['name', 'qty', 'price', 'total' ]
  isLoading = true;

  constructor(private invoiceService: InvoiceService, private windowService: WindowService) {

  }

  ngOnInit(): void {
    this.invoiceService.currentInvoice?.subscribe(invData => {
      console.log("Invoice changed")
      this.dataSource.data = invData!.lines;
      this.isLoading = false;
    })

    // this causes the invoice service to get a new firestore document
    // and the two components are looking at different invoices.
    // this.windowService.newWindow('invoices/new-invoice')
  }

}
