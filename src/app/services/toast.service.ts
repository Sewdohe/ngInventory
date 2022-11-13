import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private _snackBar: MatSnackBar) { }

  showToast(message: string): void {
    this._snackBar.open(message, 'OK', {
      duration: 3000
    })
  }
}
