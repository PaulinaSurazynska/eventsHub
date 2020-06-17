import { Component, OnInit } from '@angular/core';
import { EventsService } from '../events.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.scss'],
})
export class SpecialEventsComponent implements OnInit {
  specialEvents = [];
  constructor(private eventService: EventsService, private router: Router) {}

  ngOnInit(): void {
    this.eventService.getSpecialEvents().subscribe(
      (res) => (this.specialEvents = res),
      (error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            this.router.navigate(['/login']);
          }
        }
      }
    );
  }
}
