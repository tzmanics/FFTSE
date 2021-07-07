import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Day } from '../day';
import { DayService } from '../day.service';

@Component({
  selector: 'app-day-detail',
  templateUrl: './day-detail.component.html',
  styleUrls: ['./day-detail.component.css'],
})
export class DayDetailComponent implements OnInit {
  @Input() day?: Day;

  constructor(
    private route: ActivatedRoute,
    private dayService: DayService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getDay();
  }

  getDay(): void {
    const date = this.route.snapshot.paramMap.get('date') || '';
    this.dayService.getDay(date).subscribe((day) => (this.day = day));
  }

  goBack(): void {
    this.location.back();
  }
}
