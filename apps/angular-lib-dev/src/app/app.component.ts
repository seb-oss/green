import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'green-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  get routes() {
    return this.router.config
      .filter(route => route.data && route.data.name)
  }
  constructor(public router: Router) {
  }
}
