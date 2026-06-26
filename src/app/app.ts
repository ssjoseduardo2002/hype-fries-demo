import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavbarComponent} from './components/navbar/navbar.component';
import {HeroComponent} from './components/hero/hero.component';
import {MenuComponent} from './components/menu/menu.component';
import {SocialMatricsComponent} from './components/social-matrics/social-matrics.component';
import {InstagramGalleryComponent} from './components/instagram-gallery/instagram-gallery'; // Importación añadida
import {FooterComponent} from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NavbarComponent, 
    HeroComponent, 
    MenuComponent, 
    SocialMatricsComponent, 
    InstagramGalleryComponent, // Componente registrado
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'], // Nota: Cambié a styleUrls por convención, ajusta si es styleUrl
})
export class App {
  protected readonly title = signal('Hype Fries');
}