import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DaysComponent } from './days/days.component';
import { DayDetailComponent } from './day-detail/day-detail.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, DaysComponent, DayDetailComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
