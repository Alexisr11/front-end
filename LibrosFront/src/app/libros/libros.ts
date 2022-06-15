export interface creacionLibrosDTO{
  titulo: string;
  resumen: string;
  enLibrerias: boolean;
  fehcaLanzamiento: Date;
  poster: File;
}

export interface librosDTO{
  titulo: string;
  resumen: string;
  enLibrerias: boolean;
  fehcaLanzamiento: Date;
  poster: string;
}
