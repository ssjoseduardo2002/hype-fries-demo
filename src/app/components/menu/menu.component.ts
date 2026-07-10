import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Categoria } from './menu.model';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  categorias: Categoria[] = [
    { titulo: 'Hamburguesas', imagen: 'assets/images/gallery/smash.jpg' },
    { titulo: 'Papas a la francesa', imagen: 'assets/images/gallery/papas-clasicas.jpg' },
    { titulo: 'Boneless', imagen: 'assets/images/gallery/BBQ.jpg' },
    { titulo: 'Malteadas', imagen: 'assets/images/gallery/para-limonada-rosa.jpg' }, // O la que prefieras
    { titulo: 'Combos Hype', imagen: 'assets/images/gallery/HYPE.jpg' }
  ];
}
