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
    { titulo: 'Hamburguesas', imagen: 'assets/images/burger1.jpg' },
    { titulo: 'Papas', imagen: 'assets/images/papas1.jpg' },
    { titulo: 'Boneless', imagen: 'assets/images/boneless.jpg' },
    { titulo: 'Malteadas', imagen: 'assets/images/shake1.jpg' },
    { titulo: 'Combos Hype', imagen: 'assets/images/combo.jpg' }
  ];
}
