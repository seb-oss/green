import { Component, OnInit } from '@angular/core'

import { BadgeType } from '@sebgroup/extract'

@Component({
    selector: 'green-badge',
    templateUrl: './badge.component.html',
    standalone: false
})
export class BadgeComponent implements OnInit {
  badges: Array<{ text: string; type?: BadgeType }> = []

  edit = false

  reset() {
    this.badges = [
      { text: 'Badge 1', type: 'danger' },
      { text: 'Badge 2', type: 'warning' },
      { text: 'Badge 3', type: 'success' },
      { text: 'Badge 4', type: 'light' },
      { text: 'Badge 5', type: 'dark' },
      { text: 'Badge 6' },
    ]
  }

  ngOnInit() {
    this.reset()
  }
}
