export interface Categoria {
  id: number;
  titulo: string;
  imagen: string;
}

export interface Platillo {
  id: number;
  categoriaId: number; // Esto debe coincidir con el 'id' de la Categoria
  nombre: string;
  descripcion: string;
  precio: number;
}