import { TequilaProduct, SpecialEdition, SocialProject } from './types';

export const CORE_TRILOGY: TequilaProduct[] = [
  {
    id: 'blanco',
    name: 'Blanco',
    type: 'Blanco',
    tagline: 'La esencia más pura del agave azul',
    description: 'Destilado con devoción inmediatamente después de la molienda y cocción del agave en hornos de mampostería tradicional. Captura el alma viva y rebelde de los Altos de Jalisco en su estado más virgen y honesto.',
    colorHex: '#e8f4f8',
    abv: '37% Alc. Vol.',
    aging: 'Sin añejamiento (Embotellado joven)',
    origin: 'Atotonilco El Alto, Altos de Jalisco, México',
    visualNotes: 'Limpio, cristalino, brillante, de cuerpo sutil y generoso arrastre en copa.',
    aromaNotes: [
      'Agave cocido dulce de gran intensidad',
      'Matices cítricos de lima y pomelo',
      'Sutil toque de pimienta negra y flores silvestres'
    ],
    tasteNotes: [
      'Entrada sedosa y fresca',
      'Excelente balance herbal y dulzura natural',
      'Final persistente, limpio y ligeramente mineral'
    ],
    priceCOP: 'COP $185,000',
    priceUSD: '$45 USD',
    distributors: [
      { name: 'Rappi', region: 'Colombia · México', type: 'online', url: 'https://rappi.com' },
      { name: 'Domicilios.com', region: 'Colombia', type: 'online', url: 'https://domicilios.com' },
      { name: 'Licorería Bleinheim', region: 'Bogotá, Colombia', type: 'tienda' },
      { name: 'Almacenes Éxito', region: 'Colombia (nacional)', type: 'tienda' },
    ]
  },
  {
    id: 'anejo',
    name: 'Añejo',
    type: 'Añejo',
    tagline: 'La paciencia madurada en roble',
    description: 'Criado y reposado en barricas de roble americano seleccionadas con tostados medios por más de 12 meses. Una joya para saborear lentamente, apreciando cómo el tiempo y la madera esculpen la complejidad absoluta.',
    colorHex: '#dca954',
    abv: '37% Alc. Vol.',
    aging: '18 meses en barricas de roble americano',
    origin: 'Jesús María, Altos de Jalisco, México',
    visualNotes: 'Cálido color ámbar profundo, con destellos cobrizos y cuerpo robusto.',
    aromaNotes: [
      'Vainilla intensa y melaza caramelizada',
      'Frutas secas y almendras tostadas',
      'Suaves notas ahumadas y de cedro'
    ],
    tasteNotes: [
      'Muy complejo con cuerpo aterciopelado',
      'Notas de higo, chocolate oscuro y canela',
      'Postgusto largo y elegante con marcada presencia de madera noble'
    ],
    priceCOP: 'COP $295,000',
    priceUSD: '$72 USD',
    distributors: [
      { name: 'Rappi', region: 'Colombia · México', type: 'online', url: 'https://rappi.com' },
      { name: 'Domicilios.com', region: 'Colombia', type: 'online', url: 'https://domicilios.com' },
      { name: 'Licorería Bleinheim', region: 'Bogotá, Colombia', type: 'tienda' },
      { name: 'El Corte Inglés Gourmet', region: 'España (importación)', type: 'tienda' },
    ]
  },
  {
    id: 'cristalino-anejo',
    name: 'Cristalino Añejo',
    type: 'Cristalino',
    tagline: 'El balance perfecto entre alma y claridad',
    description: 'Nuestra obra de arte contemporánea. Un tequila añejo que se somete a un meticuloso doble proceso de filtración por carbón activado, eliminando los pigmentos maderosos de la barrica pero preservando intactos sus aromas y complejidad.',
    colorHex: '#fbfbfb',
    abv: '37% Alc. Vol.',
    aging: '14 meses de reposo y doble filtración carbónica',
    origin: 'Los Altos de Jalisco, México',
    visualNotes: 'Absolutamente transparente y límpido, con un brillo brillante platinado que sorprende al ojo.',
    aromaNotes: [
      'Agave horneado combinado con roble maduro',
      'Miel de agave, vainilla sutil y flores de azahar',
      'Matiz muy fresco y elegante'
    ],
    tasteNotes: [
      'Extraordinaria suavidad en la entrada en boca',
      'Equilibrio óptimo entre el dulzor del agave y la madera',
      'Final infinitamente sedoso, redondo y sin asperezas'
    ],
    priceCOP: 'COP $350,000',
    priceUSD: '$85 USD',
    distributors: [
      { name: 'Rappi', region: 'Colombia · México', type: 'online', url: 'https://rappi.com' },
      { name: 'Domicilios.com', region: 'Colombia', type: 'online', url: 'https://domicilios.com' },
      { name: 'Licorería Bleinheim', region: 'Bogotá, Colombia', type: 'tienda' },
      { name: 'Don Martin Premium Club', region: 'Pedidos directos', type: 'online' },
    ]
  }
];

export const SPECIAL_EDITIONS: SpecialEdition[] = [
  {
    id: 'carbon',
    name: 'Añejo Cristalino Carbón',
    tagline: 'Edición Especial "Día de la Afrocolombianidad"',
    bottleTheme: 'Botella de silueta oscura carbón con collarín tradicional de colores patrios colombianos, rindiendo homenaje al legado y el orgullo afro en el territorio.',
    details: 'Un tequila con carácter indomable que fusiona el sabor clásico del Añejo con un filtrado único de carbón de coco seleccionado. Presentación de colección que celebra la diversidad y el valor de nuestra raíz africana.',
    socialImpactContext: 'Cada botella adquirida destina recursos directos para financiar el programa "Semillas de Libertad", que otorga becas universitarias completas y apoyo a emprendedoras afrocolombianas en el Pacífico y Caribe colombiano.',
    bgColor: 'rgba(23, 23, 23, 0.9)',
    textColor: 'text-neutral-100',
    accentColor: '#facc15', // Gold
    hasGoldFlakes: false,
    tastingHighlights: [
      'Toques sutiles de coco caramelizado',
      'Final sedoso y ahumado excepcional',
      '37% Alc. Vol. de pura elegancia embotellada'
    ]
  },
  {
    id: 'flamingo',
    name: 'Blanco Rosado Flamingo',
    tagline: 'Edición Especial "Día del Orgullo"',
    bottleTheme: 'Botella con un delicado tono rosa flamenco natural, cuello decorado con la bandera del Orgullo LGBTQI+, un canto a la diversidad y un porvenir inclusivo.',
    details: 'Un destilado vibrante y libre que adquiere un sutil color rosáceo mediante un reposo de pocas semanas en barricas de vino tinto Malbec premium. Floral, alegre e inolvidable.',
    socialImpactContext: 'Las ventas financian directamente centros comunitarios de apoyo, asesorías de salud mental gratuitas y programas de inserción laboral para jóvenes LGBTQI+ en situación de vulnerabilidad social.',
    bgColor: 'rgba(67, 24, 30, 0.9)',
    textColor: 'text-rose-100',
    accentColor: '#f43f5e', // Rose
    hasGoldFlakes: false,
    tastingHighlights: [
      'Infusión floral de pétalos de hibisco',
      'Frescura de frambuesa y bayas rojas',
      'Arranque alegre y final dulce texturado'
    ]
  },
  {
    id: 'dorado',
    name: 'Blanco Agave Dorado con Hojuelas de Oro',
    tagline: 'Edición Especial "Golden Agave Spirit"',
    bottleTheme: 'Botella transparente de lujo que contiene hojuelas de oro de 24 quilates flotando elegantemente y un distintivo collarín verde esmeralda y plata viva.',
    details: 'La cumbre de la exclusividad y la celebración. Un tequila blanco excepcional en el que flotan copos de oro comestible de la más alta pureza, emitiendo destellos tridimensionales al servir.',
    socialImpactContext: 'Los aportes apoyan directamente a las de asociaciones agrarias de pequeños cañicultores y comunidades rurales, financiando sistemas de riego sostenible para preservar nuestra tierra.',
    bgColor: 'rgba(12, 38, 28, 0.9)',
    textColor: 'text-emerald-50',
    accentColor: '#10b981', // Emerald
    hasGoldFlakes: true,
    tastingHighlights: [
      'Hojuelas de oro de 24k comestible en suspensión',
      'Matices elegantes de jengibre y cardamomo',
      'Entrada extraordinariamente suave y mística'
    ]
  }
];

export const SOCIAL_PROJECTS: SocialProject[] = [
  {
    id: 'proj1',
    title: 'Educación y Futuro Artesano',
    location: 'Chocó y Valle del Cauca, Colombia',
    description: 'Financiación de escuelas técnicas de artesanía tradicional y becas de educación superior para jóvenes de áreas vulnerables, permitiendo que trasciendan socialmente protegiendo sus saberes ancestrales.',
    impactMetric: '+120 Becas Universitarias Anuales',
    iconName: 'GraduationCap'
  },
  {
    id: 'proj2',
    title: 'Apoyo Sostenible LGBTIQ+',
    location: 'Bogotá y Medellín, Colombia',
    description: 'Soporte económico para hogares de albergue, programas de formación laboral y servicios de apoyo legal y psicológico enfocado en mitigar la discriminación en microentornos.',
    impactMetric: '3 Centros de Albergue Financiados',
    iconName: 'HeartHandshake'
  },
  {
    id: 'proj3',
    title: 'Agua para la Comunidad Rural',
    location: 'Zonas rurales de Colombia y Jalisco, México',
    description: 'Implementación de pozos de extracción y sistemas sustentables de purificación de agua en comunidades agrarias cercanas a los centros de acopio y cultivo, garantizando el recurso vital.',
    impactMetric: '15 Mapas de Riego y Pozos Comunitarios',
    iconName: 'Droplet'
  }
];

export const TIMELINE_PROCESS = [
  {
    title: 'El Origen del Suelo',
    subtitle: 'El Barro Rojo de los Altos',
    description: 'Nuestros agaves azules Weber crecen a más de 2,000 metros de altura en los suelos arcillosos y volcánicos de los Altos de Jalisco. Este suelo rojizo, rico en hierro, le otorga al agave un nivel de azúcares y complejidad único en el mundo.'
  },
  {
    title: 'La Jima Paciente',
    subtitle: 'Artesanos del Acero',
    description: 'No aceleramos la tierra. Esperamos de 7 a 9 años a que el agave alcance su madurez idónea. Los jimadores cortan a mano cada penca usando la coa de jima, dejando el "corazón" o piña perfectamente limpio.'
  },
  {
    title: 'La Alquimia del Horno',
    subtitle: 'Cocción Lenta de 48 Horas',
    description: 'Cocemos las piñas en hornos de mampostería gruesa con vapor lento. Este horneado paciente de dos días convierte los almidones complejos en mieles aromáticas, impregnando aromas acaramelados y de tierra húmeda.'
  },
  {
    title: 'El Susurro del Cobre',
    subtitle: 'Destilación Artesanal',
    description: 'El fermento natural se destila doblemente en alambiques de cobre tradicionales. Monitoreamos con rigor el flujo para separar el "corazón" del destilado, garantizando que solo la porción más excelsa y aromática pase a las botellas o barricas.'
  }
];
