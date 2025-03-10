import { Component, ElementRef, HostListener, inject, OnInit, viewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'aa-public',
  imports: [],
  templateUrl: './public.component.html',
  styleUrl: './public.component.scss'
})
export class PublicComponent implements OnInit {

  dashboard = viewChild<ElementRef>('dashboard');

  #sanitizer = inject(DomSanitizer);

  dashboardUrl = this.#sanitizer.bypassSecurityTrustResourceUrl('https://www.example.com');

  @HostListener('eventName', ['$event'])
  onMessage(event: MessageEvent) {
    if (event.origin !== 'https://www.example.com') {
      return;
    }
    console.log('Message received from iframe:', event.data);
  }

  ngOnInit() {
    console.log(this.dashboard());
  }
  loadUrl(url: string) {
    console.log('Loading URL:', url);
    this.dashboardUrl = this.#sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  sendMessage() {
    const iframeWindow = (this.dashboard() as ElementRef).nativeElement.contentWindow;
    iframeWindow.postMessage('Hello from Angular', '*');
  }

}
