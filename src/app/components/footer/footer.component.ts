import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true, // Aseguramos que sea standalone
  imports: [CommonModule], // CommonModule siempre es bueno tenerlo por si usas directivas como *ngIf o *ngFor
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  // Ya que todo el contenido es estático (texto, horarios, créditos),
  // no necesitamos lógica adicional aquí por ahora. 
  // ¡El componente está listo para mostrarse!
}