import { Component, OnInit } from '@angular/core';

import { Day } from '../day';
import { DayService } from '../day.service';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css'],
})
export class DaysComponent implements OnInit {
  days: Day[] = [];

  constructor(private dayService: DayService) {}

  ngOnInit(): void {
    this.getDays();
  }

  getDays(): void {
    this.dayService.getDays().subscribe((days) => (this.days = days));
  }
}
