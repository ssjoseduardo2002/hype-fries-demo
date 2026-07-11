import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Categoria, Platillo } from './menu.model';

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
  ];

  // Base de datos completa
  platillos: Platillo[] = [
    // --- Hamburguesas (Categoría 1) ---
    { id: 101, categoriaId: 1, nombre: 'Hamburguesa Clásica', descripcion: '130 gr. de fresca carne de res, queso gratinado, pan costra de queso, tocino, lechuga, tomate, jalapeños, cebolla, cátsup y ranch.', precio: 176.00 },
    { id: 102, categoriaId: 1, nombre: 'Combo Clásico', descripcion: '130 gr. de fresca carne de res, queso gratinado, pan costra de queso, tocino, lechuga, tomate, jalapeños, cebolla, cátsup y ranch. Papas grandes, refresco o limonada.', precio: 293.00 },
    { id: 103, categoriaId: 1, nombre: 'Hamburguesa Hawaiana', descripcion: '130 gr. de fresca carne de res, queso gratinado, pan costra de queso, tocino, piña, lechuga, tomate, jalapeños, cebolla carameliza, BBQ y ranch.', precio: 189.00 },
    { id: 104, categoriaId: 1, nombre: 'Combo Hawaiana', descripcion: '130 gr. de fresca carne de res, queso gratinado, pan costra de queso, tocino, piña, lechuga, tomate, jalapeños, cebolla carameliza, BBQ y ranch. Incluye papas grandes, refresco o limonada.', precio: 306.00 },
    { id: 105, categoriaId: 1, nombre: 'Hamburguesa de Champiñones', descripcion: '130 gr. de fresca carne de res, queso gratinado, pan costra de queso, tocino, champiñones con queso, lechuga, tomate, jalapeño, cebolla, cátsup y ranch.', precio: 189.00 },
    { id: 106, categoriaId: 1, nombre: 'Combo Champiñones', descripcion: '130 gr. de fresca carne de res, queso gratinado, pan costra de queso, tocino, champiñones con queso, lechuga, tomate, jalapeño, cebolla, cátsup y ranch. Incluye papas grandes, refresco o limonada.', precio: 257.00 },
    { id: 107, categoriaId: 1, nombre: 'Hamburguesa Smash', descripcion: 'Doble porcion de 130 gr. carne de res fresca, queso amarillo, pan brioche, tocino, cebolla carameliza, aderezo SMASH, pepinillos.', precio: 209.00 },
    { id: 108, categoriaId: 1, nombre: 'Combo Smash', descripcion: 'Dos porciones de 130 gr. carne de res fresca, queso amarillo, pan brioche, tocino, cebolla carameliza, aderezo SMASH, pepinillos. Incluye papas grandes, refresco o limonada.', precio: 336.00 },
    { id: 109, categoriaId: 1, nombre: 'Hamburguesa Chicken HYPE', descripcion: 'Pechuga de pollo empanizada en salsa de tu eleccion (BBQ, buffalo, Mango habanero), pan brioche, vegetales y ranch.', precio: 176.00 },
    { id: 110, categoriaId: 1, nombre: 'Combo Chicken HYPE', descripcion: 'Pechuga de pollo empanizada en salsa de tu eleccion (BBQ, buffalo, Mango habanero), pan brioche, vegetales y ranch. Papas grandes, refresco o limonada.', precio: 293.00 },

    // --- Papas (Categoría 2) ---
    { id: 301, categoriaId: 2, nombre: 'Papas Superhype', descripcion: 'Aderezos a elección y dos toppings.', precio: 130.00 },
    { id: 302, categoriaId: 2, nombre: 'Papas Clásicas', descripcion: 'Aderezos a elección, 250 gramos de papas.', precio: 117.00 },
    { id: 303, categoriaId: 2, nombre: 'Papas Hype', descripcion: 'Aderezos a elección y un topping.', precio: 150.00 },

    // --- Boneless (Categoría 3) ---
    { id: 201, categoriaId: 3, nombre: 'Combo Boneless BBQ', descripcion: 'Orden con 8 a 9 piezas de boneless con papas grandes, refresco o limonada.', precio: 293.00 },
    { id: 202, categoriaId: 3, nombre: 'Boneless Buffalo', descripcion: 'Orden con 8 a 9 piezas de boneless.', precio: 176.00 },
    { id: 203, categoriaId: 3, nombre: 'Boneless BBQ', descripcion: 'Orden con 8 a 9 piezas de boneless.', precio: 176.00 },
    { id: 204, categoriaId: 3, nombre: 'Combo Boneless Buffalo', descripcion: 'Orden con 8 a 9 piezas de boneless, con papas grandes, refresco o limonada.', precio: 293.00 },
    { id: 205, categoriaId: 3, nombre: 'Boneless Pimienta Limón', descripcion: 'Orden con 8 a 9 piezas de boneless.', precio: 156.00 },
    { id: 206, categoriaId: 3, nombre: 'Combo Boneless Pimienta Limón', descripcion: 'Orden con 8 a 9 piezas de boneless, con papas grandes, refresco o limonada.', precio: 257.00 },
    { id: 207, categoriaId: 3, nombre: 'Combo Boneless Mango Habanero', descripcion: 'Orden con 8 a 9 piezas de boneless con papas grandes, refresco o limonada.', precio: 293.00 },
    { id: 208, categoriaId: 3, nombre: 'Boneless Mango Habanero', descripcion: 'Orden con 8 a 9 piezas de boneless.', precio: 176.00 },

    // --- Malteadas y Bebidas (Categoría 4) ---
    { id: 401, categoriaId: 4, nombre: 'Malteada de Oreo', descripcion: '16 Onzas.', precio: 104.00 },
    { id: 402, categoriaId: 4, nombre: 'Malteada de Chocolate', descripcion: '16 Onzas.', precio: 104.00 },
    { id: 403, categoriaId: 4, nombre: 'Malteada de Fresa', descripcion: '16 Onzas.', precio: 104.00 },
    { id: 404, categoriaId: 4, nombre: 'Malteada de Vainilla', descripcion: '16 Onzas.', precio: 104.00 },
    { id: 405, categoriaId: 4, nombre: 'Fanta', descripcion: '355 ml.', precio: 32.00 },
    { id: 406, categoriaId: 4, nombre: 'Fresca', descripcion: '355 ml.', precio: 46.00 },
    { id: 407, categoriaId: 4, nombre: 'Sidral Mundet', descripcion: '355 ml.', precio: 46.00 },
    { id: 408, categoriaId: 4, nombre: 'Limonada Rosa', descripcion: '16 Onzas.', precio: 39.00 },
    { id: 409, categoriaId: 4, nombre: 'Coca Cola Regular', descripcion: '355 ml.', precio: 46.00 },
    { id: 410, categoriaId: 4, nombre: 'Sprite 355 ml', descripcion: 'Botella de plastico', precio: 25.00 }
  ];

  seleccionarCategoria(cat: Categoria) {
    this.categoriaSeleccionada = cat;
  }

  get productosFiltrados() {
    return this.platillos.filter(p => p.categoriaId === this.categoriaSeleccionada?.id);
  }
}