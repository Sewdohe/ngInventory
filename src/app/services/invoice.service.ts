import { Injectable } from '@angular/core';
import { AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Observable, of, mergeMap, take } from 'rxjs';
import { Invoice } from '../interfaces/invoice.interface';
import Product from '../interfaces/product.interface';
import { DataService } from "./data.service";
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  newInvoiceDoc?: AngularFirestoreDocument<Invoice>;
  currentInvoice?: Observable<Invoice | undefined> = undefined;
  invoiceData?: Invoice | undefined;

  constructor(private dataService: DataService, private toastService: ToastService) {
    console.log("Invoice service created.")
    if(!this.currentInvoice){
      this.invoiceInit();
    }
  }

  invoiceInit() {
    this.newInvoiceDoc = this.dataService.newInvoiceDoc();
    this.currentInvoice = this.newInvoiceDoc.valueChanges()

    this.newInvoiceDoc.set({
      total: 0,
      lines: []
    })

    console.log("Set new empty invoice in the database")
    
    this.currentInvoice.subscribe(inv => {
      this.invoiceData = inv
    })
  }

  isInvoiceEmpty(invoice: AngularFirestoreDocument<Invoice> | undefined): Observable<boolean> {
    return invoice!.valueChanges().pipe(mergeMap(inv => {
      let docJSON = JSON.stringify(inv);
      console.log(`invoice json is ${docJSON}`)
      let isEmpty = docJSON ==  `{"total":0,"lines":[]}` ? true : false
      return of(isEmpty)
    }))
  }

  addItemToInvoice(product: Product, qty: number): void {
    this.currentInvoice?.pipe(take(1)).subscribe(inv => {
      console.log("adding item to invoice")
      console.log(inv)
      let existingLine = inv!.lines.findIndex(line => {
        return line.name == product.name
      })
      console.log(existingLine)
      if (existingLine != -1) {
        // there is an index that already exists
        let newLines = inv!.lines
        newLines[existingLine].qty += qty
        this.newInvoiceDoc?.update({lines: newLines})
      } else {
        // this is a new invoice line
        let newLines = inv!.lines
        newLines.push({name: product.name, qty: qty, price: product.price})
        this.newInvoiceDoc!.update({lines: newLines})
      }
    })
  }

  addFromScanCode(barcode: string, qty: number) {
    // just testing if the invoice is empty or not here.
    let isEmpty: boolean;
    this.isInvoiceEmpty(this.newInvoiceDoc).subscribe(res => {
      console.log(res)
    })
    this.dataService.getItemFromScanCode(barcode).subscribe(val => {
      if (val) {
        this.addItemToInvoice(val, qty)
      } else {
        this.toastService.showToast("No Item Found")
      }
    });
  }
}
