import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true, // Aseguramos que sea standalone
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  // Aquí podemos agregar lógica en el futuro, como un título dinámico,
  // o el control de un video que se pause al hacer scroll.
  // Por ahora, mantenemos la estructura lista para recibir el contenido visual.
}
