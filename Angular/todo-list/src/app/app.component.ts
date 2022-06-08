import { Component } from '@angular/core';
import { SseService } from './services/sse.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  url = 'http://localhost:4231';

  constructor(private readonly sseService: SseService) {}

  ngOnInit(): void {
    this.sseService.getServerSendEvent(this.url).subscribe(console.log);
  }
}
