import { Component, OnInit } from '@angular/core';
import {WindowService} from "../../../services/window.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-invoice-dashboard',
  templateUrl: './invoice-dashboard.component.html',
  styleUrls: ['./invoice-dashboard.component.scss']
})
export class InvoiceDashboardComponent implements OnInit {

  constructor(private windowService: WindowService, private router: Router) { }

  ngOnInit(): void {
  }

  navigateSomewhere(url: string): void {
    this.router.navigate([url])
  }

  openWindow(url: string): void {
    this.windowService.newWindow(url);
  }

}
