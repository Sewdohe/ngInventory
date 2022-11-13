import { Component, OnInit } from '@angular/core';
import {WindowService} from "../../../services/window.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-products-dash',
  templateUrl: './products-dash.component.html',
  styleUrls: ['./products-dash.component.scss']
})
export class ProductsDashComponent implements OnInit {

  constructor(private windowService: WindowService, private router: Router) { }

  ngOnInit(): void {
  }

  navigateSomewhere(url: string): void {
    this.router.navigate([url])
  }

  openNewItemWindow(): void {
    this.windowService.newWindow('products/new-product')
  }

  openWindow(url: string): void {
    this.windowService.newWindow(url);
  }

}
