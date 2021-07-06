import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DaysComponent } from './days/days.component';
import { DayDetailComponent } from './day-detail/day-detail.component';

@NgModule({
  declarations: [AppComponent, DaysComponent, DayDetailComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
