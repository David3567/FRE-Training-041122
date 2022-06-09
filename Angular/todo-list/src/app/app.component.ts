import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SseService } from './services/sse.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  url = 'http://localhost:4231/sse';
  sseStream!: Subscription;

  constructor(private readonly sseService: SseService) {}

  ngOnInit(): void {
    this.sseStream = this.sseService
      .getServerSendEvent(this.url)
      .subscribe(console.log);
  }

  ngOnDestroy(): void {
    this.sseStream.unsubscribe();
  }
}
