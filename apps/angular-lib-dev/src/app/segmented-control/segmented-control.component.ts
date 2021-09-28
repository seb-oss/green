import { Component } from '@angular/core';
import { Observable, of } from 'rxjs'
import { SegmentedControl } from '../../../../../libs/angular/src/lib/segmented-control/segmented-control.component'

@Component({
  templateUrl: './segmented-control.component.html',
  styleUrls: ['./segmented-control.component.css']
})
export class SegmentedControlComponent {

  $controls: Observable<Array<SegmentedControl>> = of([
    {url: './option-a', text:'Option A'},
    {url: './option-b', text:'Option B'},
  ]);
}
