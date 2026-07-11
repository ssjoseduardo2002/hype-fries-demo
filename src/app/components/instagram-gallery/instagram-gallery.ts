import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Asegúrate de tenerlo si es un componente Standalone

@Component({
  selector: 'app-instagram-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instagram-gallery.html',
  styleUrls: ['./instagram-gallery.scss']
})
export class InstagramGalleryComponent {
  // Arreglo con la información de los posts de HYPE FRIES
instagramPosts = [
  { id: 1, image: 'assets/images/gallery/41.jpg'},
  { id: 2, image: 'assets/images/gallery/16.jpg'},
  { id: 3, image: 'assets/images/gallery/15.jpg'},
  { id: 4, image: 'assets/images/gallery/10.jpg'},
  { id: 5, image: 'assets/images/gallery/7.jpg'},
  { id: 6, image: 'assets/images/gallery/papas clasicas.jpg'}
];
}