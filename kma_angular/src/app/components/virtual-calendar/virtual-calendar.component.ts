import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef, OnInit,
} from '@angular/core';
import { EventColor } from 'calendar-utils';
import dayGridPlugin from '@fullcalendar/daygrid';
@Component({
  selector: 'app-virtual-calendar',
  templateUrl: './virtual-calendar.component.html',
  styleUrls: ['./virtual-calendar.component.scss', './assets/css/style.css']
})
export class VirtualCalendarComponent implements OnInit {
  constructor() {
  }
  ngOnInit() {
  }

  selectedDate!: Date;
  startDay!: Date;
  endDay!: Date;

  dateSelected(date: Date) {
    if (!this.startDay || (date < this.startDay)) {
      this.startDay = date;
    } else if (!this.endDay || (date > this.endDay)) {
      this.endDay = date;
    } else {
      this.startDay = date;
      this.endDay = date;
    }
    this.selectedDate = date;
  }

  protected readonly Date = Date;
}
