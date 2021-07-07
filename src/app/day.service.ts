import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Day } from './day';
import { DAYS } from './mock-days';

@Injectable({
  providedIn: 'root',
})
export class DayService {
  constructor() {}

  getDays(): Observable<Day[]> {
    const days = of(DAYS);
    return days;
  }
}
