import { Component, OnInit } from '@angular/core'
import { AlertType } from '@sebgroup/extract'

@Component({
  selector: 'green-alert',
  templateUrl: './alert.component.html',
})
export class AlertComponent implements OnInit {
  alerts: Array<{ text: string; type?: AlertType }> = []

  edit = false

  reset() {
    this.alerts = [
      { text: 'Alert 1' },
      { text: 'Alert 2', type: 'success' },
      { text: 'Alert 3', type: 'warning' },
      { text: 'Alert 4', type: 'danger' },
      { text: 'Alert 5', type: 'info' },
    ]
  }

  ngOnInit() {
    this.reset()
  }
}
