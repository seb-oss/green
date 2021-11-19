import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core'
import { FormBuilder } from '@angular/forms'

@Component({
  selector: 'green-dropdown',
  templateUrl: './dropdown.component.html',
})
export class DropdownComponent implements AfterViewInit {
  @ViewChild('container', { read: ElementRef }) public _container:
    | ElementRef<HTMLIFrameElement>
    | undefined

  options: Array<{ key: string; value: any }> = [
    {
      key: 'Option 1',
      value: 1,
    },
    {
      key: 'Option 2',
      value: 2,
    },
    {
      key: 'Option 3',
      value: 3,
    },
  ]
  dropdownForm = this._fb.group({
    select1: [1],
    select2: [2],
    select3: [3],
  })
  constructor(private _fb: FormBuilder) {}
  ngAfterViewInit() {
    if (this._container) {
      this._container.nativeElement.scrollTop = 500
      this._container.nativeElement.scrollLeft = 500
    }
  }
}
