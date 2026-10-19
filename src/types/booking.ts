export type RoomId = 'tangerina' | 'laranja' | 'roma' | 'figo' | 'casa-completa';

export interface RoomDefinition {
  id: RoomId;
  name: string;
  shortDescription: string;
  maxGuests: number;
  bedType: string;
  sizeM2: number;
  image: string;
}

export interface BookingState {
  roomId: RoomId;
  checkIn: string | null;  // Format YYYY-MM-DD
  checkOut: string | null; // Format YYYY-MM-DD
  adults: number;
  children: number;
}

export const ROOMS_CONFIG: Record<RoomId, RoomDefinition> = {
  tangerina: {
    id: 'tangerina',
    name: 'Quarto Tangerina',
    shortDescription: 'Quarto luminoso com sol da tarde e mobília rústica tradicional.',
    maxGuests: 2,
    bedType: '1 cama de casal',
    sizeM2: 17,
    image: '/assets/imagem/alojamento/bedroom-figo.jpg',
  },
  laranja: {
    id: 'laranja',
    name: 'Quarto Laranja',
    shortDescription: 'Dois leitos individuais acolhedores com iluminação natural suave.',
    maxGuests: 2,
    bedType: '2 camas de solteiro',
    sizeM2: 15,
    image: '/assets/imagem/alojamento/bedroom-figo.jpg',
  },
  roma: {
    id: 'roma',
    name: 'Quarto Romã',
    shortDescription: 'Ambiente rústico do lavrador alentejano com armário e comodidades.',
    maxGuests: 2,
    bedType: '1 cama de casal',
    sizeM2: 17,
    image: '/assets/imagem/alojamento/bedroom-figo.jpg',
  },
  figo: {
    id: 'figo',
    name: 'Quarto Figo',
    shortDescription: 'O quarto mais recatado da casa com vista para o pátio interior e escrivaninha.',
    maxGuests: 2,
    bedType: '1 cama de casal',
    sizeM2: 15,
    image: '/assets/imagem/alojamento/bedroom-figo.jpg',
  },
  'casa-completa': {
    id: 'casa-completa',
    name: 'Casa Completa (Toda a Propriedade)',
    shortDescription: 'Aluguer exclusivo de todo o monte alentejano, 4 quartos, sala com lareira e piscina.',
    maxGuests: 8,
    bedType: '4 quartos (3 camas de casal + 2 camas de solteiro)',
    sizeM2: 350,
    image: '/assets/imagem/alojamento/our-house.jpg',
  },
};
