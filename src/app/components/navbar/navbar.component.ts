import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para usar [ngClass]

@Component({
  selector: 'app-navbar',
  standalone: true, // Asegúrate que esté marcado como standalone
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isScrolled = false;

  // Escucha el evento de scroll en la ventana
  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Si el usuario baja más de 50px, activamos el estado "scrolled"
    this.isScrolled = window.scrollY > 50;
  }
}