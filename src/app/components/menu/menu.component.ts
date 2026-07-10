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
    { 
      titulo: 'Hamburguesas', 
      imagen: 'assets/images/gallery/clasica.jpg' 
    },
    { 
      titulo: 'Papas a la francesa', 
      imagen: 'assets/images/gallery/9.jpg' 
    },
    { 
      titulo: 'Boneless', 
      imagen: 'assets/images/gallery/30.jpg' 
    },
    { 
      titulo: 'Malteadas y Limonada', 
      imagen: 'assets/images/gallery/44.jpg' 
    },
    { 
      titulo: 'Combos Hype', 
      imagen: 'assets/images/gallery/31.jpg' 
    }
  ];
}
