import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // 👈 ¡ESTA ES LA CLAVE DE LA MAGIA!

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule], // 👈 Aquí le decimos al componente que acepte *ngIf, *ngFor y ngClass
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'] // O .css según uses
})
export class MenuComponent {
  
  // Aquí está el arreglo dinámico que va a alimentar tus tarjetas con las fotos reales
  menuItems = [
    {
      title: 'Hype Fries Clásicas',
      description: 'Nuestras papas icónicas espolvoreadas con sazonador de la casa, bañadas en queso cheddar derretido y un toque de tocino crujiente.',
      price: '$85',
      image: 'assets/images/fries/papas-clasicas.jpg', // 📸 Ajusta el nombre a tu archivo real
      badge: 'Más Vendida 🔥',
      badgeClass: 'badge-hot'
    },
    {
      title: 'Monster BBQ Fries',
      description: 'Papas rústicas acompañadas de tiras de pollo crujiente, bañadas en salsa BBQ ahumada y aderezo ranch artesanal.',
      price: '$110',
      image: 'assets/images/fries/monster-bbq.jpg', // 📸 Ajusta el nombre a tu archivo real
      badge: null, // No lleva badge
      badgeClass: ''
    },
    {
      title: 'Chilli Cheese Fries',
      description: 'Para los que buscan intensidad: papas fritas cubiertas con nuestro chilli con carne de la casa, extra queso fundido y rodajas de jalapeño.',
      price: '$95',
      image: 'assets/images/fries/chilli-cheese.jpg', // 📸 Ajusta el nombre a tu archivo real
      badge: 'Nueva receta 🧀',
      badgeClass: 'badge-new'
    }
  ];
}
