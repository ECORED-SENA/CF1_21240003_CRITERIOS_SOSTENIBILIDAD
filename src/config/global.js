export default {
  global: {
    componenteFormativo:
      'El futuro de la materialidad y estrategias que generan valor',
    descripcionCurso:
      'Este componente proporciona la información necesaria para reconocer los componentes, el marco institucional y las estrategias y herramientas de sostenibilidad más usadas dentro del contexto productivo, esto con el fin de contar con los conocimientos necesarios para poder  identificar, gestionar y promover los impactos del desarrollo sostenible en las operaciones y procesos organizacionales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Componentes de la sostenibilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Componentes claves para el desarrollo sostenible (ambiente, economía, tecnología y sociedad)',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Operaciones y procesos organizacionales',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Análisis de materialidad socioambiental',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Entendimiento del modelo de negocio de una organización (Método Canvas)',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Entendimiento de los procesos dentro de la cadena de valor de la organización',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Impactos ambientales: herramientas de identificación y evaluación de impactos (evaluación de impactos ambientales EIA, huellas ambientales, análisis de ciclo de vida ACV, huella ecológica)',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'Partes interesadas: identificación, clasificación y priorización de partes interesadas',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Priorización de temas ambientales',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Marco institucional para el desarrollo sostenible (normativa internacional, nacional y local, tratados, políticas y normas legales)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Estrategias y herramientas para la sostenibilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Economía circular y producción sostenible',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Ecoetiquetas y declaraciones ambientales',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo:
              'Modelos de negocio sostenible (Empresas B, negocios verdes)',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo: 'Responsabilidad social empresarial',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Indicadores ambientales',
            hash: 't_4_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Impactos ambientales: Herramientas de identificación y evaluación de impactos (evaluación de impactos ambientales EIA, huellas ambientales, análisis de ciclo de vida ACV, huella ecológica).',
      referencia: 'Senace, Perú. (9 de febrero de 2017). Impactos Ambientales ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=SnO4bjRghGk&ab_channel=SenacePer%C3%BA',
    },
    {
      tema:
        'Partes interesadas: identificación, clasificación y priorización de partes interesadas.',
      referencia:
        'Reficco, E, Lobo, I., Rueda, A. (2013). Wok: ¿una cadena de restaurantes sostenible?. Caso Universidad de los Andes, Caso # CP-02-01.',
      tipo: 'Estudio de caso ',
      descarga: '/downloads/anexo1.pdf',
    },
    {
      tema:
        'Entendimiento de los procesos de la cadena de valor de la organización.',
      referencia:
        'Leonard, A., Sachs, J. Fox, L. (10 de marzo del 2007). The story of stuff',
      tipo: 'Video',
      link: 'http://www.youtube.com/watch?v=x5NVqDPYKjg&feature=related',
    },
    {
      tema:
        'Impactos ambientales: Herramientas de identificación y evaluación de impactos (evaluación de impactos ambientales EIA, huellas ambientales, análisis de ciclo de vida ACV, huella ecológica).',
      referencia:
        'Environmental, E.  (26 de enero 2016). Views on Environmental Footprint - Teaser. ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=FHPq0vPTu2M&list=PLIzqPSxpstTn0x2qLwXlNWbSS7Ka1w7Wl&index=2',
    },
    {
      tema: 'Economía circular y producción sostenible.',
      referencia: 'Foundation, E. M. (s.f). Rethinking Progress ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=RstFV_n6wRg',
    },
  ],
  glosario: [
    {
      termino: 'Cadena de valor',
      significado:
        'Secuencia completa de actividades o partes que proporcionan o reciben valor en forma de productos o servicios.',
    },
    {
      termino: 'Desarrollo sostenible',
      significado:
        'Integración de las metas de una calidad de vida elevada, la salud y la prosperidad con justicia social y al mantenimiento de la capacidad de la tierra para conservar la vida en toda su diversidad. Estas metas sociales, económicas y ambientales son interdependientes y se refuerzan mutuamente. El desarrollo sostenible puede considerarse como una vía para expresar las más amplias expectativas de la sociedad en su conjunto.',
    },
    {
      termino: 'Impacto de una organización',
      significado:
        'Cambio positivo o negativo que se genera en la sociedad, la economía o el medio ambiente, producido, en su totalidad o parcialmente, como consecuencia de las decisiones y actividades pasadas y presentes de una organización.',
    },
    {
      termino: 'Materialidad',
      significado:
        'Se refiere a los asuntos de suma importancia que pueden influir sobre el rumbo de la organización, su estrategia corporativa y en el modelo de negocio.',
    },
    {
      termino: 'Partes interesadas',
      significado:
        'Individuo o grupo que tiene intereses en cualquier decisión o actividad de la organización.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cancillería - Ministerio de Relaciones Exteriores de Colombia. (2022). Antecedentes de la Agenda 2030 para el Desarrollo Sostenible.',
      link: 'https://www.cancilleria.gov.co/rio/acerca',
    },
    {
      referencia:
        'Castiblanco Rozo, C. (s.f.). Curso internacional: Cambio climático, economía ambiental y estilos de desarrollo. Comisión Económica para América Latina y el Caribe CEPAL y Universidad Nacional de Colombia',
      link:
        'https://www.cepal.org/sites/default/files/courses/files/presentacion_carmenza_castiblanco.pdf',
    },
    {
      referencia:
        'De Miguel, C., Tavares, M. (2015). El desafío de la sostenibilidad ambiental en América Latina y el Caribe. Comisión Económica para América Latina y el Caribe CEPAL.',
      link:
        'https://repositorio.cepal.org/bitstream/handle/11362/37791/LCM23_es.pdf',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (2022). El Consejo Nacional de Política Económica y Social CONPES. El Consejo Nacional de Política Económica y Social CONPES.',
      link: 'https://www.dnp.gov.co/CONPES',
    },
    {
      referencia:
        'Domínguez, R., León, M., Samaniego, J.,  Sankel, O. (2019). Recursos naturales, medio ambiente y sostenibilidad 70 años de pensamiento de la CEPAL. Comisión Económica para América Latina y el Caribe (CEPAL).',
      link:
        'https://repositorio.cepal.org/bitstream/handle/11362/44785/1/S1900378_es.pdf',
    },
    {
      referencia:
        'Gobierno Nacional de Colombia, 2019, Plan Estratégico Institucional 2019-2022, Ministerio de Ambiente, Desarrollo Sostenible, V1., equipo de trabajo liderado por Muñoz R, Dorian Alberto, Bogotá, pp. 1 - 83.',
    },
    {
      referencia:
        'Herrán , C. (2012). Marco institucional para el desarrollo sostenible: El mayor desafío de la Cumbre Río + 20. (F. E. FES, Ed.).',
      link:
        'https://library.fes.de/pdf-files/bueros/la-energiayclima/09158.pdf',
    },
    {
      referencia:
        'Ministerio de Ambiente y Desarrollo Sostenible & Autoridad Nacional de Licencias Ambientales ANLA. (2018). Metodología general para la elaboración y presentación de estudios ambientales. ANDI.',
      link:
        'http://www.andi.com.co/Uploads/Metodolog%C3%ADa%20Estudios%20Ambientales%202018.pdf',
    },
    {
      referencia:
        'Organización Internacional de Normalización . (2010). Guía de responsabilidad social (ISO 26000).',
      link: 'https://www.iso.org/obp/ui#iso:std:iso:26000:ed-1:v1:es',
    },
    {
      referencia:
        'Plata de Plata, D., & Plata Díaz, O. (2009). Ambiente, economía, tecnología y sociedad: componentes clave para el desarrollo. MULTICIENCIAS, 9(1), 7-12.',
      link:
        'https://produccioncientificaluz.org/index.php/multiciencias/article/view/16760/16734',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Ingrid Natalia Lozano Muñoz',
        cargo: 'Experto Temático',
        centro: 'Centro Agropecuario la Granja - Regional Tolima',
      },
      {
        nombre: 'Germán Alberto Trujillo Salas',
        cargo: 'Experto Temático',
        centro: 'Centro Agropecuario la Granja - Regional Tolima',
      },
      {
        nombre: 'Jeimy Lorena Romero Perilla',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro de la industria, la empresa y los servicios - Regional Norte de Santander ',
      },
      {
        nombre: 'María Inés Machado López',
        cargo: 'Diseñador Instruccional',
        centro:
          'Centro de la industria, la empresa y los servicios - Regional Norte de Santander ',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Asesor metodológico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Pérez',
        cargo: 'Soporte organizacional',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Diana Carolina Acevedo Barón',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sandra Milena Triana Pinto',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
