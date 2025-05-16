<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Intervención en el desarrollo del lenguaje'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p.mb-4 El lenguaje es mucho más que palabras; es la herramienta con la que se construyen pensamientos, emociones y relaciones. Por ello, comprender su desarrollo y las estrategias para fortalecerlo, es clave en la primera infancia.

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-7.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-bold ¿Cómo facilitar una comunicación efectiva desde los primeros años? 

      .col-lg-6.mb-3.mb-lg-0
        .bg-color-7.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-bold ¿Qué estrategias permiten potenciar esta habilidad en diferentes contextos? 
    
    p.mb-5 Acompáñenos en este recorrido, para descubrir cómo favorecer el desarrollo lingüístico y brindar a cada niño la oportunidad de expresarse y comprender el mundo que lo rodea. 

    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Procesos del desarrollo del lenguaje
    
    p.mb-4 El lenguaje es una de las habilidades más complejas y fascinantes del desarrollo infantil, permitiendo la comunicación, la socialización y la construcción del pensamiento. Su adquisición no ocurre de manera espontánea, sino a través de un proceso progresivo en el que intervienen múltiples factores biológicos, sociales y ambientales.

    .bg-full-width.bg-color-1.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Procesos del desarrollo del lenguaje 
            p.mb-4(data-aos="fade-right") En el PDF <b>Procesos del desarrollo del lenguaje</b>, se exploran las etapas de este proceso, desde los primeros balbuceos hasta la construcción de frases complejas, así como los elementos clave que influyen en su evolución. A través de este material, se podrá comprender cómo la estimulación temprana, la interacción con el entorno y la calidad de las experiencias lingüísticas impactan en la adquisición del lenguaje, asegurando que cada niño desarrolle sus habilidades comunicativas de manera óptima.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Procesos del desarrollo del lenguaje .
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/2.png', alt='')


    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Estrategias de intervención temprana

    .row.justify-content-center.align-items-stretch.mb-4
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-7.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-bold ¿Cómo los niños aprenden a hablar?

      .col-lg-6.mb-3.mb-lg-0
        .bg-color-7.p-4(data-aos="fade-left").h-100
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-bold ¿Es un proceso automático o requiere estímulos específicos? 
    
    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        p(data-aos="fade-left") Aunque el lenguaje es una capacidad innata del ser humano, su desarrollo depende en gran medida, de la interacción con el entorno y de la estimulación que reciba desde los primeros meses de vida. En este sentido, el papel de los adultos es fundamental, pues son quienes, a través de diversas estrategias, pueden facilitar y enriquecer la adquisición del lenguaje oral.
    
        .bg-color-4.p-4.mb-3(data-aos="fade-left")
          p.mb-0 El lenguaje no solo permite la comunicación, sino que es la base del pensamiento, el aprendizaje y la socialización. Desde el nacimiento, los niños muestran una predisposición natural para el desarrollo lingüístico, pero su evolución no es uniforme ni lineal. Cada niño tiene su propio ritmo, influenciado por factores biológicos, sociales y ambientales (Herrezuelo, 2014).
        p(data-aos="fade-left") Sin embargo, lo que sí es constante es la importancia de una estimulación adecuada y oportuna. Por ello, más que esperar a que el lenguaje "aparezca", es esencial intervenir de manera intencionada, para fortalecer sus habilidades comunicativas.

    p.mb-4 Las estrategias de intervención temprana en el desarrollo del lenguaje, abarcan un conjunto de técnicas diseñadas para fomentar la comunicación oral de manera natural y progresiva.

    TabsC.color-acento-contenido.mb-5lg-
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Etapa prelingüística" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.mb-3.mb-lg-0.order-2
            h4 Etapa prelingüística
            p Los bebés comienzan su proceso comunicativo a través del llanto, la mirada y los balbuceos. En este punto, el contacto visual, el uso de una entonación afectiva y la imitación de sonidos, son esenciales para que el niño asocie las palabras con emociones y significados.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/5.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Etapa lingüística" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.mb-3.mb-lg-0.order-2
            h4 Etapa lingüística
            p Cuando comienzan a aparecer las primeras palabras, es importante ampliar el vocabulario mediante la repetición, la narración de historias y el uso de preguntas abiertas que fomenten la expresión.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/6.png', alt='')
    
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Etapa postlingüística" :icon="require('@/assets/bullets/1.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.col-xl-8.mb-4.mb-md-0.mb-3.mb-lg-0.order-2
            h4 Etapa postlingüística
            p La conversación se convierte en una herramienta clave para afianzar estructuras gramaticales y enriquecer el discurso del niño.
    
          .col-md-8.col-lg-5.col-xl-4.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/7.png', alt='', style="width: 100%;")
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
                p Para lograr un impacto positivo en el desarrollo del lenguaje, es fundamental transformar cada momento cotidiano en una oportunidad de aprendizaje. Acciones simples, como describir lo que ocurre en el entorno, nombrar objetos y emociones, o fomentar el juego simbólico, contribuyen para que el niño asocie las palabras con su significado y desarrolle confianza en su capacidad comunicativa. Asimismo, la lectura compartida, el canto y la dramatización de historias, son recursos efectivos para fortalecer la comprensión y la producción del lenguaje.
                p Más allá de la aplicación de técnicas específicas, la clave del éxito en la intervención temprana, radica en la interacción constante, el afecto y la paciencia. Un niño que se siente escuchado y valorado, desarrollará una relación positiva con el lenguaje y estará más motivado para comunicarse. En este sentido, la intervención no solo debe centrarse en corregir o enseñar, sino en crear un entorno enriquecedor donde el niño pueda explorar, expresarse y, sobre todo, disfrutar del proceso de aprender a hablar.
              .col-lg-4(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema2/8.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/9.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Así, comprender y aplicar estrategias de intervención temprana no solo facilita el desarrollo lingüístico, sino que también fortalece las bases para un aprendizaje integral. La comunicación es el puente hacia el conocimiento, la socialización y la construcción de identidad, por lo que acompañar este proceso con sensibilidad y atención es, sin duda, una de las mayores oportunidades para garantizar que cada niño alcance su máximo potencial. 
        p(data-aos="fade-left") En este sentido, el juego desempeña un papel fundamental en la estimulación del lenguaje:
    
    .row.align-items-center.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/10.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") 
        
        LineaTiempoD.color-primario.large(data-aos="fade-left")
          div(numero="1" titulo="¿Qué tan importante es el juego en el desarrollo lingüístico?") 
            p A simple vista, podría parecer solo una forma de entretenimiento, pero en realidad es una herramienta poderosa para la adquisición y el fortalecimiento de las habilidades comunicativas en la primera infancia. A través del juego, el niño explora, experimenta y descubre nuevas formas de comunicarse, estableciendo conexiones entre sonidos, palabras y significados, en un ambiente natural y motivador. De este modo, la intervención temprana no solo implica enseñar palabras, sino también propiciar espacios de interacción lúdica que enriquezcan la experiencia del lenguaje y fomenten un desarrollo integral (Rosemberg, 2008).
            p Las actividades lúdicas no solo estimulan el desarrollo del lenguaje oral, sino que también potencian la interacción social y la construcción del pensamiento. Juegos como canciones con gestos, rimas, narraciones interactivas y actividades de imitación, permiten que el niño asocia sonidos con acciones, amplíe su vocabulario y desarrolla estructuras gramaticales de manera espontánea. Además, el juego facilita la regulación emocional y la expresión de ideas, lo que contribuye a fortalecer la comunicación efectiva, desde los primeros años de vida.

          div(numero="2" titulo="¿Qué tipo de actividades son más efectivas para fomentar el lenguaje?")
            p La clave está en proponer experiencias variadas y adaptadas a cada etapa del desarrollo. En la etapa prelingüística, los juegos de sonidos y el contacto visual, favorecen la atención conjunta y la imitación. A medida que el lenguaje emerge, las narraciones interactivas y los diálogos en el juego simbólico, enriquecen la estructura lingüística y la comprensión. En todo momento, la participación del adulto es esencial, pues su retroalimentación y modelado lingüístico, guían y potencian el aprendizaje del niño.
            p En este sentido, la intervención temprana a través del juego no es solo una estrategia, sino una necesidad para garantizar un desarrollo lingüístico sólido. Crear espacios donde el niño pueda jugar, explorar y comunicarse sin presión, fortalece su confianza y su interés por el lenguaje. Así, más que una actividad recreativa, el juego se convierte en un puente hacia el aprendizaje, permitiendo que el niño descubra el poder de la comunicación en un entorno afectivo y estimulante. 
          div(numero="3" titulo="¿Cómo influye la manera en que un adulto se comunica con un niño en su desarrollo del lenguaje?") 
            p Desde los primeros meses de vida, la interacción con el cuidador desempeña un papel crucial en la construcción de habilidades lingüísticas. No se trata solo de hablarle al niño, sino de cómo se le habla, con qué intención y en qué contexto. La calidad de estas interacciones puede marcar la diferencia en su proceso de adquisición del lenguaje, porque el tono de voz, la gestualidad y la respuesta afectiva enriquecen su capacidad para comprender y producir palabras. De este modo, tanto el juego como la interacción con los adultos constituyen pilares fundamentales en la estimulación lingüística temprana, favoreciendo un desarrollo integral y una comunicación efectiva desde los primeros años de vida.
    
    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema2/11.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") El habla dirigida al niño, también conocida como <b>"habla materna"</b> o <b>"lenguaje infantilizado"</b>, es un estilo de comunicación caracterizado por un tono afectivo, pausado y exagerado, que facilita la atención y la comprensión. Este tipo de habla, acompañado de gestos, variaciones en la entonación y contacto visual, capta el interés del niño y lo motiva a responder, sentando las bases para el desarrollo de la comunicación. Más que un simple ajuste en la manera de hablar, esta estrategia es una herramienta poderosa que favorece la discriminación de sonidos, el reconocimiento de palabras y la estructuración de frases.
    
    p.mb-4 Pero el rol del cuidador no se limita a hablar, sino que implica escuchar, responder y <b>modelar</b> el lenguaje. La interacción debe ser bidireccional, permitiendo que el niño exprese sus sonidos, gestos o palabras y reciba una respuesta significativa. Al repetir, ampliar y reforzar sus intentos comunicativos, el adulto no solo estimula el lenguaje, sino que también fomenta la confianza y el deseo del niño por expresarse.

    .row.mb-5
      .col-lg-4.order-2
        figure
          img(src="@/assets/curso/tema2/12.png", data-aos="zoom-in")
      .col-lg-8.order-1.mb-3.mb-lg-0
        .bg-color-2.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/13.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Es importante resaltar que la estimulación lingüística no ocurre únicamente en momentos específicos, sino en la cotidianidad: al nombrar objetos en el entorno, describir acciones, hacer preguntas abiertas o compartir cuentos e historias. Cada interacción es una oportunidad para enriquecer el lenguaje, fortalecer el vínculo afectivo y potenciar el desarrollo comunicativo del niño.
        p(data-aos="fade-left") De este modo, el cuidador se convierte en el principal mediador en el proceso de adquisición del lenguaje, desempeñando un papel fundamental en la manera en que el niño construye sus habilidades comunicativas. Su labor no consiste en enseñar de manera estructurada, sino en propiciar un ambiente de comunicación natural y enriquecedor, donde el lenguaje se descubra como una herramienta poderosa para expresar pensamientos, emociones y necesidades. 

    .bg-full-width.bg-h85.mb-5
      .px-4.px-md-5.py-4
        div 
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/14.svg", style="max-width: 190px").mx-auto
            .col-lg
              p.mb-0.text-white En este sentido, es fundamental reconocer que el desarrollo del lenguaje en la primera infancia no es un proceso aislado, sino dinámico y profundamente influenciado por el entorno y las interacciones cotidianas. Más allá de la incorporación de palabras, cada intercambio comunicativo contribuye a la construcción del pensamiento, la expresión de emociones y el fortalecimiento del vínculo con los demás.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-4.p-4.h-100(data-aos="fade-left")
          p(data-aos="fade-left") <b>¿Cuántas oportunidades se presentan a diario para enriquecer este proceso?</b> Un gesto, una respuesta atenta o una conversación en medio del juego, pueden marcar la diferencia en la manera en que un niño explora y utiliza el lenguaje. Por ello, acompañar este camino con sensibilidad y estrategias adecuadas, no solo favorece su desarrollo lingüístico, sino que también fortalece su confianza y curiosidad por descubrir el mundo a través de la comunicación.
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/15.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-5.p-4.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Luego de comprender la importancia de la intervención temprana en el desarrollo del lenguaje, resulta esencial abordar la <b>detección temprana de alteraciones del lenguaje.</b> Identificar señales de alerta a tiempo, permite implementar estrategias oportunas que favorezcan la comunicación y el aprendizaje en la infancia.
          figure.d-flex.justify-content-end
            img(src="@/assets/curso/tema2/16.svg", style="max-width: 90px")
    
        
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Detección temprana de alteraciones del lenguaje
    
    p.mb-4 El desarrollo del lenguaje es un proceso clave en la infancia, ya que permite la comunicación, la interacción social y el aprendizaje. Sin embargo, en algunos casos, este proceso puede presentar dificultades que afectan la expresión y comprensión del niño, impactando su desarrollo integral.
    
    .bg-full-width.bg-color-1.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Detección temprana de alteraciones del lenguaje
            p.mb-4(data-aos="fade-right") En el PDF <b>Detección temprana de alteraciones del lenguaje</b>, se abordan las señales de alerta que pueden indicar la necesidad de una evaluación más detallada, así como los factores que influyen en la adquisición del lenguaje. A través de este material, se podrá comprender la importancia de una detección oportuna y de estrategias de intervención adecuadas para garantizar que cada niño reciba el apoyo necesario en su proceso comunicativo.
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Detección temprana de alteraciones del lenguaje.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/17.png', alt='')
    
    p.mb-4 Un programa de intervención en casos de dificultades lingüísticas no puede ser generalizado, porque el desarrollo del lenguaje es un proceso altamente variable y depende de múltiples factores, como la edad del niño, el tipo de alteración, el nivel de estimulación recibido y la presencia de condiciones asociadas. Sin embargo, existen principios básicos que guían la planificación de cualquier intervención:

    .bg-full-width.bg-fondo-3.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema2/18.svg', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="2.5%" y="64.5%" numero="+")
                h5 Evaluación integral
                p Antes de establecer un plan de acción, es necesario identificar las características específicas de la dificultad lingüística y sus posibles causas. La evaluación debe contemplar no solo el lenguaje oral, sino también la comprensión, la expresión, la pragmática y otros aspectos de la comunicación.
    
              .bg-color-white.box-shadow.p-3(x="29%" y="6%" numero="+")
                h5 Atención personalizada
                p No todos los niños con dificultades lingüísticas requieren el mismo tipo de intervención. Algunos necesitan estimulación temprana para favorecer la aparición del habla, mientras que otros requieren apoyo en la articulación, el acceso al vocabulario o la estructuración del discurso.
    
              .bg-color-white.box-shadow.p-3(x="43%" y="94%" numero="+")
                h5 Entorno comunicativo enriquecido
                p Más allá del trabajo individual con el niño, la intervención debe incluir estrategias que fomenten un ambiente de comunicación rico y constante, donde el lenguaje sea una herramienta funcional y significativa.
    
              .bg-color-white.box-shadow.p-3(x="55%" y="6%" numero="+")
                h5 Participación activa de la familia
                p La labor de los terapeutas y educadores, no es suficiente si el niño no recibe apoyo en su hogar. Incluir a la familia en el proceso de intervención, garantiza que las estrategias utilizadas en el ámbito terapéutico se refuercen en la vida cotidiana.
    
              .bg-color-white.box-shadow.p-3(x="77.7%" y="77.5%" numero="+")
                h5 Uso de herramientas y recursos adaptados
                p La tecnología, los materiales visuales y los juegos didácticos, pueden ser grandes aliados en la estimulación del lenguaje, siempre que se utilicen de manera estructurada y con un propósito claro.
    
    p.mb-4 Los programas de intervención en casos de dificultades lingüísticas pueden dividirse en diferentes enfoques, según el tipo de alteración y la edad del niño:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/18.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Estimulación del lenguaje prelingüístico
              p Para niños que aún no han desarrollado el habla, se trabaja en la comunicación no verbal a través de gestos, miradas, sonidos y acciones compartidas. En este enfoque, se priorizan estrategias como el juego interactivo, la imitación y la repetición de sonidos para sentar las bases del lenguaje oral.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/19.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Intervención en la articulación y fonología
              p Para niños que presentan dificultades en la pronunciación de ciertos sonidos, se diseñan actividades que fortalecen la movilidad de los órganos fonadores, como ejercicios de soplo, discriminación auditiva y repetición guiada de palabras y frases.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/20.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Desarrollo del vocabulario y la comprensión
              p Algunos niños pueden presentar un lenguaje limitado en cuanto a la cantidad de palabras que utilizan o dificultades en la comprensión de mensajes. En estos casos, se promueve la ampliación del vocabulario mediante el uso de imágenes, narraciones y juegos de categorización.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/21.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Fortalecimiento de la estructuración del lenguaje
              p Cuando el niño tiene dificultades para construir frases con sentido lógico o expresar sus ideas de manera coherente, se implementan estrategias basadas en el modelado del lenguaje, la lectura compartida y la práctica de estructuras gramaticales sencillas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema2/22.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Estimulación de la interacción y la pragmática
              p Para niños que presentan alteraciones en la comunicación social, se trabajan aspectos como el turno de palabra, la expresión de emociones y la adaptación del lenguaje, a diferentes contextos.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/23.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") La efectividad de cualquier programa de intervención no depende únicamente de los profesionales que lo diseñan, sino también del entorno en el que se desenvuelve el niño. Padres, cuidadores y docentes, cumplen un rol fundamental en la aplicación y refuerzo de estrategias que favorezcan el desarrollo del lenguaje. Cada conversación, cada gesto de atención y cada oportunidad de interacción, son momentos valiosos para estimular la comunicación.
    
        .bg-color-2.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/24.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Es importante recordar que la intervención no debe centrarse únicamente en corregir dificultades, sino en potenciar las capacidades del niño y brindarle herramientas para que descubra el lenguaje como un medio de expresión y conexión con los demás. Acompañar este proceso con sensibilidad, paciencia y estrategias adecuadas, resulta fundamental para asegurar que cada niño reciba el apoyo necesario para desarrollar su máximo potencial lingüístico. 
        p(data-aos="fade-left") Desde esta perspectiva, reconocer la importancia de la detección temprana de alteraciones del lenguaje implica comprender que, si bien cada niño tiene su propio ritmo de desarrollo, existen señales que no deben pasarse por alto. La observación atenta, la evaluación oportuna y la implementación de estrategias de intervención adecuadas, no solo favorecen el desarrollo lingüístico, sino que también fortalecen la confianza, la capacidad de aprendizaje y la relación del niño con su entorno. 

    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.justify-content-center.align-items-center
          .col-lg-12
            .row.justify-content-center.align-items-center
              .col-lg-8(data-aos="fade-left").mb-3.mb-lg-0
                p Cada palabra que logra expresar, cada gesto comprendido y cada interacción significativa, representan avances en su camino hacia la comunicación. Así, más que corregir dificultades, el verdadero propósito es acompañar, guiar y ofrecer herramientas que le permitan descubrir el poder del lenguaje como una vía para explorar, entender y transformar el mundo que lo rodea.
                p A continuación, explicaremos la estimulación sensorial, que juega un papel fundamental en el desarrollo integral de los niños, incluyendo su capacidad para comunicarse. Esta estimulación está directamente relacionada con la adquisición y comprensión del lenguaje, porque favorece la integración de los sentidos y fortalece las conexiones cerebrales necesarias para una comunicación efectiva.
              .col-lg-4(data-aos="zoom-in")
                img.img-fluid(src='@/assets/curso/tema2/25.svg', style="max-width:486px", alt="" ).mx-auto.mx-lg-0.ms-lg-auto.mb-4.mb-lg-0
    








    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/106676" target="_blank" rel="noopener noreferrer") Aparicio Aznar, M. (Il.) & Igualada, A. (Il.). (2019). El desarrollo del lenguaje y la comunicación en la infancia: ( ed.). Editorial UOC.
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/116323 " target="_blank" rel="noopener noreferrer") Vázquez de Sebastián, J. & Leiva Madueño, I. (2018). Manual práctico de patología del lenguaje: evaluación e intervención en adultos y niños: ( ed.). Editorial UOC. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://publicacionescd.uleam.edu.ec/index.php/sapientiae/article/view/1001 " target="_blank" rel="noopener noreferrer") Mendoza, L. D. V., & Intriago, H. A. M. (2025). Estrategias de intervención temprana para fomento del desarrollo del lenguaje en niños de educación inicial. Revista Científica Multidisciplinaria SAPIENTIAE. ISSN: 2600-6030, 8(16), 265-286. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.sciencedirect.com/science/article/abs/pii/S0214460310701558 " target="_blank" rel="noopener noreferrer") Gràcia, M., Ausejo, R., & Porras, M. (2010). Intervención temprana en comunicación y lenguaje: colaboración con las educadoras y familias de dos niños. Revista de logopedia, foniatría y audiología, 30(4), 186-195. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://polodelconocimiento.com/ojs/index.php/es/article/view/237 " target="_blank" rel="noopener noreferrer") Patiño-Zambrano, V. P., Enireb-García, M. D., Alvarado-Alvarez, A. M., & Patiño-Zambrano, W. A. (2017). Detección temprana del retraso del lenguaje en niños menores de 6 años. Polo del Conocimiento, 2(7), 239-253. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.babystellahelpsyou.com/blog/2020/3/16/cmo-saber-si-su-nio-tiene-retraso-en-el-habla " target="_blank" rel="noopener noreferrer") ¿Cómo saber si su niño tiene retraso en el habla? — Baby Stella Helps You. (s.f.). Baby Stella Helps You. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://www.cerebrosenaccion.com/pages/intervencion-temprana-desarrollo-del-lenguaje-y-habla " target="_blank" rel="noopener noreferrer") Intervención y estimulación temprana: Desarrollo del Lenguaje y Habla. (s.f.). Cerebros en Acción. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://gapsiat.com/senales-alerta-desarrollo-infantil " target="_blank" rel="noopener noreferrer") Señales de alerta en el desarrollo infantil: cómo identificarlas. (s.f.). GAPSIAT.   

            

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=UaiWI2HYHpc " target="_blank" rel="noopener noreferrer") AEIPI Asociación Española de Intervención en la Primera Infancia. (2023, 29 de mayo). Minipíldora 24 AELFA-IF - AEIPI Desarrollo del lenguaje [Video]. YouTube. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=dixaWEule2Y " target="_blank" rel="noopener noreferrer") Kibbutz .es. (2021, 18 de noviembre). Lectura 4. El estudio de la adquisición del lenguaje [Video]. YouTube.  
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=VccBKUrJSdY " target="_blank" rel="noopener noreferrer") Alexandra Pq. (2020, 21 de agosto). ESTRATEGIAS PARA EL DESARROLLO DEL LENGUAJE EN NIÑOS DE 0 A 6 AÑOS [Video]. YouTube. 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
