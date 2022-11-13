import { Component } from '@angular/core';
import { WindowService } from "./services/window.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngInventory';

  alert = () => {
    alert("wow")
  }

  constructor(private windowService: WindowService) {
  }
}
