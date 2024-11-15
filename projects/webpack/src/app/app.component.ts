import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'webpack';

  constructor() {
    // @ts-ignore
    import('country-list').then(mod => {
      console.log('module loaded', mod);
    })
  }

}
