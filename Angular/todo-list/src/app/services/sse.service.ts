import { Injectable, NgZone, Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SseService {
  constructor(private readonly zone: NgZone) {}

  getServerSendEvent(url: string) {
    return new Observable((observer: any) => {
      const eventSource = new EventSource(url);

      eventSource.onmessage = (event) =>
        this.zone.run(() => {
          observer.next(event);
        });

      eventSource.onerror = (error) =>
        this.zone.run(() => {
          observer.error(error);
        });

      return () => eventSource.close();
    });
  }
}
