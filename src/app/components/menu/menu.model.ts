// Define la estructura de las categorías principales del menú
export interface Categoria {
  id: number;
  titulo: string;
  imagen: string; // Imagen representativa de la categoría
}

// Define la estructura de cada producto, ahora con soporte para imagen opcional
export interface Platillo {
  id: number;
  categoriaId: number; // Relación con Categoria.id
  nombre: string;
  descripcion: string;
  precio: number;
  imagen?: string; // Propiedad opcional: si el platillo tiene foto, la ponemos; si no, queda vacía
}