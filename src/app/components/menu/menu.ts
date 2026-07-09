import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Platillo } from '../../menu.model'; // Asegúrate de que la ruta sea correcta

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class MenuComponent {
  platillos: Platillo[] = [
    { nombre: 'Papas Hype', descripcion: 'Crujientes con aderezo secreto.', precio: '$85', imagen: 'assets/images/papas1.jpg' },
    { nombre: 'Smash Burger', descripcion: 'Doble carne, queso americano.', precio: '$120', imagen: 'assets/images/burger1.jpg' },
    { nombre: 'Malteada Oreo', descripcion: 'Crema batida y trozos de galleta.', precio: '$65', imagen: 'assets/images/shake1.jpg' }
  ];
}