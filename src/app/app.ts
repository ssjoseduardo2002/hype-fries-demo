import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HeroComponent} from './components/hero/hero.component';
import {MenuComponent} from './components/menu/menu.component';
import {SocialMatricsComponent} from './components/social-matrics/social-matrics.component';
import {FooterComponent} from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroComponent, MenuComponent, SocialMatricsComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Hype Fries');
}