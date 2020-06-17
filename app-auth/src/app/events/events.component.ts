import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {
  events = [];

  constructor(private eventService: EventsService) {}

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(
      (res) => (this.events = res),
      (error) => console.log(error)
    );
  }
}
