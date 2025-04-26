export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'Fundamentos de la estimulación temprana',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Fundamentos de la estimulación temprana',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto y definición de la estimulación temprana',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Bases neurocientíficas y psicológicas de la estimulación temprana',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Objetivos de la estimulación temprana',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Principios básicos de la estimulación temprana',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Ámbitos de aplicación de la estimulación temprana',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Intervención en el desarrollo del lenguaje',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Procesos del desarrollo del lenguaje',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Estrategias de intervención temprana',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Detección temprana de alteraciones del lenguaje',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Estimulación sensorial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Estrategias de estimulación sensorial',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Aplicación en el aula y en el hogar',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
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
    ],
  },
  referencias: [
    {
      referencia:
        'Prieto Saborit, J. A. (2012). estimulación temprana y psicomotricidad: ( ed.). Wanceulen Editorial. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/63324',
    },
    {
      referencia:
        'Vidal Lucena, M. (Coord.). (2007). estimulación temprana de 0 a 6 años: desarrollo de capacidades, valoración y programas de intervención: 1a parte: perspectiva histórico-científico-social: ( ed.). Editorial CEPE. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/153533',
    },
    {
      referencia:
        'Pulido Sánchez, S. (2005). Periodos críticos para el desarrollo del lenguaje.Universidad Cooperativa de Colombia, Facultad de Ciencias Sociales, Psicología, Barrancabermeja. ',
      link: 'https://hdl.handle.net/20.500.12494/53869',
    },
    {
      referencia:
        'Sousa, D. A. (Ed.). (2014). Neurociencia educativa: Mente, cerebro y educación (Vol. 131). Narcea Ediciones. ',
      link: 'https://surl.li/mjampb ',
    },
    {
      referencia:
        'García Salaya, M. E., Ávila Soliz , L. G., & de la Cruz Hernández, M. (2024). La Estimulación de Plasticidad Cerebral en el Proceso de Aprendizaje en Niños de Educación Básica. Ciencia Latina Revista Científica Multidisciplinar, 8(5), 5604-5615. ',
      link: 'https://doi.org/10.37811/cl_rcm.v8i5.13994 ',
    },
    {
      referencia:
        'Babativa Novoa, D. (2017). Psicología del desarrollo infantil. Bogotá: AREANDINA. Fundación Universitaria del Área Andina. Disponible en: ',
      link: 'https://digitk.areandina.edu.co/handle/areandina/1340',
    },
    {
      referencia:
        'Graus, M. E. G. (2019). La zona de desarrollo próximo como base de la pedagogía desarrolladora. Didasc@ lia: didáctica y educación, 10(4), 33-50. ',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=7248596 ',
    },
    {
      referencia:
        'Bowlby, J. (1989). Aplicaciones clínicas de una teoría del apego. Ibérica. Paidós. ',
      link: 'https://surl.li/igdxiv ',
    },
    {
      referencia:
        'Vidal Lucena, M. (Coord.). (2007). estimulación temprana de 0 a 6 años: desarrollo de capacidades, valoración y programas de intervención: 2a parte: desarrollo de capacidades e intervención temprana: ( ed.). Editorial CEPE. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/153534',
    },
    {
      referencia:
        'Bruner, J. (1983). Play, thought, and language. Peabody Journal Of Education, 60(3), 60-69. ',
      link: 'https://doi.org/10.1080/01619568309538407 ',
    },
    {
      referencia:
        'Owens, R. E. (2003). Desarrollo del lenguaje. Madrid: Prentice Hall. ',
      link: 'https://surl.li/sndpaz ',
    },
    {
      referencia:
        'Santiuste Bermejo, V. (2005). Bases biológicas y genéticas del lenguaje: relación con el concepto de dificultades de aprendizaje. Revista de psicología y educación. ',
      link: 'https://www.revistadepsicologiayeducacion.es/abstract?pii=11 ',
    },
    {
      referencia:
        'Herrera, Luis. (2019). Procesamiento Cerebral del Lenguaje: Historia y evolución teórica. Fides et Ratio - Revista de Difusión cultural y científica de la Universidad La Salle en Bolivia, 17(17), 101-130. Recuperado en 20 de febrero de 2025, de ',
      link:
        'http://www.scielo.org.bo/scielo.php?script=sci_arttext&pid=S2071-081X2019000100007&lng=es&tlng=es. ',
    },
    {
      referencia:
        'Cobo-Ortiz, Y. (2017). Estimulación del lenguaje oral en Educación Infantil. ',
      link: 'https://crea.ujaen.es/items/1cea7fbc-8dde-4854-a860-d0c2afcb3212',
    },
    {
      referencia:
        'Orta-Torres, S. (2014). Detección temprana de dificultades de lenguaje en Educación Infantil. ',
      link: 'https://crea.ujaen.es/items/414c454d-643f-4085-a3ca-e9912cb59acc',
    },
    {
      referencia:
        'Herrezuelo Pérez, M. E. (2014). El desarrollo del lenguaje oral de 3 a 6 años y sus principales trastornos. ',
      link: 'https://uvadoc.uva.es/handle/10324/6794 ',
    },
    {
      referencia:
        'Rosemberg, C. R. (2008). El lenguaje y el juego en la educación infantil. Enseñar en clave de juego: enlazando juegos y contenidos, 61-75. ',
      link:
        'https://www.researchgate.net/publication/316845394_El_lenguaje_y_el_juego_en_la_educacion_infantil ',
    },
    {
      referencia:
        'Martín Ruiz, M. L. (2014). Propuesta de un sistema para detección precoz de trastornos del lenguaje en niños de 0 a 6 años (Doctoral dissertation, ETSIS_Telecomunicacion). ',
      link: 'https://oa.upm.es/33500/ ',
    },
    {
      referencia:
        'Córdoba Navas, D. (2018). Desarrollo cognitivo, sensorial, motor y psicomotor en la infancia: (2 ed.). IC Editorial. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/113433',
    },
    {
      referencia:
        'Araújo, O. (2016, septiembre 17). La magia (del sentido) del tacto - Médico Internista. Medicina Interna. Médico Internista. Medicina Interna; Olga Araújo Loperena. ',
      link: 'https://medicointernista.es/la-magia-del-sentido-del-tacto/ ',
    },
    {
      referencia:
        'Granda, L. M. G., Cobos, A. C. A., & Montecé, J. A. F. (2024). Desarrollo sensorial y conciencia corporal en los niños de 12 a 36 meses del CDI La Aurora, cantón Daule, Ecuador. Ciencia y Educación, 5(12), 199-215. ',
      link:
        'https://www.cienciayeducacion.com/index.php/journal/article/view/656 ',
    },
    {
      referencia:
        'Aparicio, D. M. S., Mindiola, J. J. L., Torres, B. J. F., & Aparicio, D. J. S. (2022). La percepción sensorial, la cognición, la interactividad y las tecnologías de información y comunicación (TIC) en los procesos de aprendizaje. RECIAMUC, 6(2), 388-395. ',
      link: 'https://www.reciamuc.com/index.php/RECIAMUC/article/view/863 ',
    },
    {
      referencia:
        'García, V. H. T. (2017). La estimulación multisensorial y aprendizaje. Revista de Educación Inclusiva, 9(2). ',
      link:
        'https://revistaeducacioninclusiva.es/index.php/REI/article/view/65 ',
    },
  ],
  glosario: [
    {
      termino: 'Adaptación',
      significado:
        'Proceso mediante el cual los niños ajustan sus respuestas y comportamientos en función de los estímulos y experiencias de su entorno.',
    },
    {
      termino: 'Cognición',
      significado:
        'Conjunto de procesos mentales relacionados con el conocimiento, el aprendizaje, la comprensión y la memoria.',
    },
    {
      termino: 'Desarrollo emocional',
      significado:
        'Evolución de las capacidades emocionales de los niños, como el reconocimiento y manejo de emociones.',
    },
    {
      termino: 'Desarrollo motor',
      significado:
        'Proceso de maduración y perfeccionamiento de las habilidades físicas y motrices en los niños.',
    },
    {
      termino: 'Desarrollo sensorial',
      significado:
        'Proceso mediante el cual los niños desarrollan y perfeccionan sus sentidos, como la vista, el oído, el tacto, el gusto y el olfato.',
    },
    {
      termino: 'Estimulación temprana',
      significado:
        'Conjunto de intervenciones y actividades que favorecen el desarrollo físico, cognitivo, emocional y social de los niños desde el nacimiento hasta los tres años.',
    },
    {
      termino: 'Lenguaje',
      significado:
        'Habilidad humana para comunicarse mediante signos, sonidos y palabras, fundamental para el desarrollo cognitivo y social.',
    },
    {
      termino: 'Neurociencia',
      significado:
        'Rama de la ciencia que estudia el cerebro y los procesos cerebrales involucrados en el comportamiento y las funciones cognitivas.',
    },
    {
      termino: 'Plasticidad cerebral',
      significado:
        'Capacidad del cerebro para reorganizarse y formar nuevas conexiones neuronales, especialmente durante la infancia.',
    },
    {
      termino: 'Primera infancia: ',
      significado:
        'Etapa del desarrollo humano que abarca desde el nacimiento hasta los seis años, crucial para el aprendizaje y desarrollo integral.',
    },
    {
      termino: 'Reflejos primitivos',
      significado:
        'Respuestas automáticas e involuntarias presentes al nacer, que son esenciales para la supervivencia y el desarrollo motor.',
    },
    {
      termino: 'Sensorial',
      significado:
        'Relativo a los sentidos o a la percepción de estímulos a través de ellos.',
    },
    {
      termino: 'Teorías del desarrollo infantil',
      significado:
        'Conjunto de modelos explicativos sobre cómo los niños crecen, aprenden y desarrollan habilidades físicas, cognitivas y emocionales.',
    },
    {
      termino: 'Vínculo afectivo',
      significado:
        'Relación emocional profunda entre el niño y sus cuidadores, que influye en el desarrollo emocional y social.',
    },
  ],
}
