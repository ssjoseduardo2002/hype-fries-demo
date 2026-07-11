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
      id: 1, 
      titulo: 'Hamburguesas', 
      imagen: 'assets/images/gallery/clasica.jpg' 
    },  
    { 
      id: 2, 
      titulo: 'Papas a la francesa', 
      imagen: 'assets/images/gallery/9.jpg' 
    },
    { 
      id: 3, 
      titulo: 'Boneless', 
      imagen: 'assets/images/gallery/30.jpg' 
    },
    { 
      id: 4, 
      titulo: 'Malteadas y Limonada', 
      imagen: 'assets/images/gallery/44.jpg' 
    },
    { 
      id: 5, 
      titulo: 'Combos Hype', 
      imagen: 'assets/images/gallery/31.jpg' 
    }
  ];
}