import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactTestPageComponent } from './components/kesko-contentful/react-test.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactTestPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tuotekortti-poc';
}
