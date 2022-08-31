import { Component } from '@angular/core';
import { DatetimeChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
})
export class ExampleComponent {
  datepickerValue;

  onSelect(event) {
    const value = (event as CustomEvent<DatetimeChangeEventDetail>).detail
      .value;
    console.log(value);
    this.datepickerValue = value;
  }
}
