import { Component } from '@angular/core'
import { Router } from '@angular/router'

//import '@sebgroup/green-core/components/button/index.js'
import '@sebgroup/green-core/components/menu-button/index.js'
import '@sebgroup/green-core/components/flex/index.js'

@Component({
  selector: 'green-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent {
  get routes() {
    return this.router.config.filter((route) => route.data && route.data.name)
  }
  constructor(public router: Router) {}
}
