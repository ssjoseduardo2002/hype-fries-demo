import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { MenuComponent } from './components/menu/menu.component';
import { SocialMatricsComponent } from './components/social-matrics/social-matrics.component';
import { InstagramGalleryComponent } from './components/instagram-gallery/instagram-gallery';
import { FooterComponent } from './components/footer/footer.component';
// Importación necesaria para el botón flotante
import { WhatsappButtonComponent } from './components/whatsapp-button/whatsapp-button'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NavbarComponent, 
    HeroComponent, 
    MenuComponent, 
    SocialMatricsComponent, 
    InstagramGalleryComponent, 
    FooterComponent,
    WhatsappButtonComponent // Componente registrado aquí
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss', // Ajustado a styleUrl (estándar Angular 17+)
})
export class App {
  protected readonly title = signal('Hype Fries');
}