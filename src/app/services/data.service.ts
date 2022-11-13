import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument, DocumentReference} from '@angular/fire/compat/firestore';
import { Observable, map, take } from 'rxjs';
import Product from '../interfaces/product.interface';
import {AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {ToastService} from "./toast.service";
import ProductClass from "../interfaces/class.interface";
import Category from "../interfaces/category.interface";
import { Invoice, InvoiceLine } from "../interfaces/invoice.interface";


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private productsCollection: AngularFirestoreCollection<Product>;
  products$!: Observable<Product[]>

  private classesCollection!: AngularFirestoreCollection<ProductClass>;
  classes$!: Observable<ProductClass[]>

  private categoriesCollection!: AngularFirestoreCollection<Category>;
  categories$!: Observable<Category[]>

  private invoicesCollection!: AngularFirestoreCollection<Invoice>;
  invoices!: Observable<Invoice[]>

  private nextItemNumber!: Observable<{value: number} | undefined>;
  private nextItemNumberDoc$: AngularFirestoreDocument<{value: number}>;

  constructor(private firestore: AngularFirestore, private toastService: ToastService) {
    console.log("Data service init.")
    this.productsCollection = this.firestore.collection('products');
    this.products$ = this.productsCollection.valueChanges();

    this.classesCollection = this.firestore.collection('classes');
    this.classes$ = this.classesCollection.valueChanges();

    this.categoriesCollection = this.firestore.collection('categories');
    this.categories$ = this.categoriesCollection.valueChanges();

    this.invoicesCollection = this.firestore.collection('invoices');
    this.invoices = this.invoicesCollection.valueChanges();

    this.nextItemNumber = this.firestore.collection('utility').doc<{value: number}>('NextItemNumber').valueChanges();
    this.nextItemNumberDoc$ = this.firestore.collection('utility').doc<{value: number}>('NextItemNumber');
  }

  addNewProduct(product: Product): void {
    this.productsCollection.add(product).then(res => {
      this.toastService.showToast(`Added ${product.name} successfully!`)
    })
    
    this.nextItemNumber.pipe(take(1)).subscribe(val => {
      this.nextItemNumberDoc$.update({
        value: val!.value + 1
      })
      console.log("hopefully this only adds once.")
    })
  }

  getNextItemNumber(): Observable<{value: number} | undefined> {
    return this.nextItemNumber;
  }

  addNewCategory(cat: Category): void {
    // this.categoriesCollection.add(cat).then(res => {
    //   this.toastService.showToast(`Added category ${cat.display_name} successfully!`)
    // })
    // Use this new way of adding documents. The old way made an auto-generated doc key, which we don't want.
    this.categoriesCollection.doc(cat.name).set(cat).then(res => {
      this.toastService.showToast(`Category ${cat.display_name} written to the database!`)
    })
  }

  newInvoiceDoc(): AngularFirestoreDocument<Invoice> {
    return this.invoicesCollection.doc();
  }

   getItemFromScanCode(scanCode: string): Observable<Product | undefined> {
    console.log("getting item...")
    return this.firestore.collection<Product>('products', (ref) => ref.where("barcode_box", "==", scanCode))
      .valueChanges()
      .pipe(map(val => val.length > 0 ? val[0] : undefined))
  }

  addNewClass(prodClass: ProductClass): void {
    this.classesCollection.doc(prodClass.name).set(prodClass).then(res => {
      this.toastService.showToast(`Class ${prodClass.display_name} written to the database!`)
    })
  }

  getClassByName(className: string): AngularFirestoreDocument<ProductClass> {
    return this.classesCollection.doc(className)
  }
}
