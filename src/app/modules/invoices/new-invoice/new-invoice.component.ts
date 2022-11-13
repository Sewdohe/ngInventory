import { Component, OnInit } from '@angular/core';
import { InvoiceService } from 'src/app/services/invoice.service';

@Component({
  selector: 'app-new-invoice',
  templateUrl: './new-invoice.component.html',
  styleUrls: ['./new-invoice.component.scss']
})
export class NewInvoiceComponent implements OnInit {
  barCodeInput: string = ''
  qty: number = 1

  constructor(public invoiceService: InvoiceService) { }

  ngOnInit(): void {
    // this.invoiceService.invoiceInit();
  }

  ngOnDestroy(): void {

  }

  doSometing() {
    console.log("something")
    console.log(`submitted scancode query for ${this.barCodeInput}`)
    this.invoiceService.addFromScanCode(this.barCodeInput, this.qty)
  }

  submit() {
    console.log(`submitted scancode query for ${this.barCodeInput}`)
    this.invoiceService.addFromScanCode(this.barCodeInput, this.qty)
  }

}
