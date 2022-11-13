import {Injectable, NgZone} from '@angular/core';
import { appWindow, WebviewWindow } from '@tauri-apps/api/window'
import { invoke } from '@tauri-apps/api/tauri'
import {ToastService} from "./toast.service";
import {emit, EventCallback, listen} from '@tauri-apps/api/event'
import {Router} from "@angular/router";
import {SelectionChange} from "@angular/cdk/collections";

interface Payload {
  path: string
}

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  constructor(private toastService: ToastService, private router: Router, private zone: NgZone) {
    console.log('starting event listener')
    // @ts-ignore
    listen('navigate-to', ({payload}: string) => {
      this.zone.run(() => {
        console.log(payload)
        this.navigateTo(payload)
      })
    })
  }

  navigateTo(url: string): void {
    this.router.navigate([url])
  }

  isMainWindow(): boolean {
    return appWindow.label == "main";
  }

  closeWindow(): void {
    appWindow.close();
  }

  newWindow(url: string): void {
    const webview = new WebviewWindow('new-item', {
      decorations: false,
      alwaysOnTop: true,
      height: 750,
      width: 500,
    })
    webview.listen('tauri://created', function () {
      // webview window successfully created
      // now send the navigate event
    }).then(r => console.log("then done"))
      .finally(() => {
        setTimeout(() => {
            webview.emit('navigate-to', url).then(res => {
              console.log('event was emitted successfully')
            })
          },
          800);
      })
  }


 }
