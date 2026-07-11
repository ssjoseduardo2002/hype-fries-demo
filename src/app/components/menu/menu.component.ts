import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Categoria } from './menu.model';

// Definimos la interfaz de platillos para que todo sea ordenado
export interface Platillo {
  id: number;
  categoriaId: number;
  nombre: string;
  descripcion: string;
  precio: number;
}

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  categoriaSeleccionada: Categoria | null = null;

  categorias: Categoria[] = [
    { id: 1, titulo: 'Hamburguesas', imagen: 'assets/images/gallery/clasica.jpg' },
    { id: 2, titulo: 'Papas a la francesa', imagen: 'assets/images/gallery/9.jpg' },
    { id: 3, titulo: 'Boneless', imagen: 'assets/images/gallery/30.jpg' },
    { id: 4, titulo: 'Malteadas y Limonada', imagen: 'assets/images/gallery/44.jpg' },
    { id: 5, titulo: 'Combos Hype', imagen: 'assets/images/gallery/31.jpg' }
  ];

  // Base de datos inicial, aquí puedes agregar todo lo de Didi Food
  platillos: Platillo[] = [
    { id: 101, categoriaId: 1, nombre: 'Hype Burger', descripcion: 'Carne premium, queso cheddar, tocino y aderezo Hype.', precio: 145 },
    { id: 102, categoriaId: 2, nombre: 'Papas Clásicas', descripcion: 'Crujientes y sazonadas al estilo de la casa.', precio: 65 },
    { id: 103, categoriaId: 3, nombre: 'Boneless Habanero', descripcion: '10 piezas bañadas en nuestra salsa secreta de habanero.', precio: 120 }
  ];

  // Función para capturar el clic y mostrar los productos
  seleccionarCategoria(cat: Categoria) {
    this.categoriaSeleccionada = cat;
  }

  // Filtra los productos según la categoría seleccionada
  get productosFiltrados() {
    return this.platillos.filter(p => p.categoriaId === this.categoriaSeleccionada?.id);
  }
}