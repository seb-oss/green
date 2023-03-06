import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'ngg-slider',
  templateUrl: './slider.component.html',
})
export class NggSliderComponent implements OnInit {
  name: string = 'name'
  value: number = 600
  style: any = {}
  min: number = 500
  max: number = 600
  step: number = 1

  ngOnInit(): void {
    this.setTrackBackground()
  }

  onInput(): void {
    this.setTrackBackground()
  }

  setTrackBackground(): void {
    const _value = ((this.value - this.min) / (this.max - this.min)) * 100
    this.style.background = `linear-gradient(to right, #007ac7 0%, #007ac7 ${_value}%, #dedede ${_value}%, #dedede 100%)`
  }
}
