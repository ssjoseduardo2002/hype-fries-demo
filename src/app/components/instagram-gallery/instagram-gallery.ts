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
    { id: 1, image: 'assets/images/gallery/1.jpg', link: 'https://www.instagram.com/p/DZfzdrwD3vF/?img_index=3' },
    { id: 2, image: 'assets/images/gallery/2_2.jpg', link: 'https://www.instagram.com/p/DZfzdrwD3vF/?img_index=4' },
    { id: 3, image: 'assets/images/gallery/3_2.jpg', link: 'https://www.instagram.com/p/DZfzdrwD3vF/?img_index=5' },
    { id: 4, image: 'assets/images/gallery/4_2.jpg', link: 'https://www.instagram.com/p/DZfzdrwD3vF/?img_index=2' },
    { id: 5, image: 'assets/images/gallery/5_2.jpg', link: 'https://www.instagram.com/p/DZfzdrwD3vF/?img_index=1' },
    { id: 6, image: 'assets/images/gallery/6_2.jpg', link: 'https://www.instagram.com/p/DXz_nUwmyBj/?img_index=5' }
  ];
}