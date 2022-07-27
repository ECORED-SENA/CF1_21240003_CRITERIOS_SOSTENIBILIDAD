<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: #161730") 2
      h1 Análisis de materialidad socioambiental
    .row.bg21
      .col-12.px-5
        p.mb-5 Según el <em>Global Reporting Initiative</em>, (2013), en el campo de la sostenibilidad, el término de materialidad representa:
        .row.justify-content-center.mb-5
          .col-lg-10
            img.mb-3(src='@/assets/curso/tema1/img31.svg')
          .col-lg-10
            .bloque-texto-b.color-secundario
              .bloque-texto-b__texto
                i.fas.fa-quote-left
                p Aquellos asuntos que tienen un impacto directo o indirecto en la competencia de la organización para generar, preservar o destruir el valor económico, social y/o ambiental para las partes interesadas.
                i.fas.fa-quote-right
        .row.align-items-center.justify-content-center(data-aos="fade-right")
          .col-lg-5
            img(src='@/assets/curso/tema2/img01.png')
          .col-lg-5.p-3
            .dual-txt-deco
                p.py-5(style="position: relative; z-index: 1;") Desde esta perspectiva, la materialidad socioambiental es uno de los conceptos fundamentales utilizados como un modelo que permite determinar los aspectos claves a incluir en los informes de gestión (no financieros) y sobre los cuales desean obtener información los grupos de interés. Estos deben estar orientados a establecer la forma como la organización aporta (muchas veces de manera indirecta) al logro de los ODS (Objetivos de Desarrollo Sostenible).
    .row.bg18
      .col-12.px-5
        p.mb-5 Se puede revisar el siguiente recurso educativo para reconocer algunos aspectos que se deben tener en cuenta en el análisis de la materialidad socio-ambiental:
        TabsA.color-secundario
          .tarjeta.color-secundario.p-4(titulo="1. Determinación:").shadow-sm.p-4
            .row.align-items-center.p-4
              .col-12
                h4 1. Determinación
                p.mb-3 No existe una forma única para determinar la materialidad socioambiental en términos de sostenibilidad de una organización, sin embargo, su determinación puede ser considerada como un gran un desafío porque en esa articulación sistemática del modelo de negocio con los aspectos sociales y ambientales y los grupos de interés de mayor influencia en la organización, se deben incorporar y priorizar las opiniones de las partes interesadas, involucrar a la alta dirección, extender la evaluación de la materialidad a lo largo de la cadena de valor y replantear la relación naturaleza, producción y desarrollo. 
          .tarjeta.color-secundario.p-4(titulo="2. Identificación:").shadow-sm.p-4
            .row.align-items-center.p-4
              .col-12
                h4 2. Identificación
                p.mb-3 La combinación de la información sobre la empresa, su modelo de negocio, la cadena de valor, el ciclo de vida, su modelo de gobernanza, el mapa de las partes interesadas y la identificación de sus principales impactos y riesgos, permiten comparar y priorizar aquellos asuntos de mayor impacto para la continuidad del negocio. Es vital identificar aspectos de interés para el sector en el cual se desempeña la organización, así como las particularidades de la zona sociodemográfica en la cual desarrolla sus operaciones.
          .tarjeta.color-secundario.p-4(titulo="3. Priorización:").shadow-sm.p-4
            .row.align-items-center.p-4
              .col-12
                h4 3. Priorización
                p.mb-3 Los modelos de materialidad recomiendan herramientas y criterios que facilitan el levantamiento de la información fundamental para priorizar los asuntos ambientales y sociales de cada caso en particular. Una vez identificados, los asuntos materiales deben ser priorizados de acuerdo con las expectativas e intereses de los grupos de interés, no deberán ser más de 10, sin embargo, para iniciar, es clave identificar aquellos que son muy relevantes (idealmente entre 1 y 3), que serán el punto de partida para focalizar la Estrategia de Sostenibilidad Corporativa (ESC).
        Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Entendimiento del modelo de negocio de una organización (Método Canvas)
    .row.justify-content-center.align-items-end.mb-5
      .col-lg-3.mb-4.mb-lg-0
        figure
         img(src='@/assets/curso/tema2/img02.svg')(data-aos="fade-right")
      .col-lg-6.mb-5.mb-lg-0
        .cajon.color-secundario.py-4.px-5(data-aos="fade-right")
           p.my-2 En la literatura se pueden encontrar diversas definiciones de modelo de negocio, sin embargo, en este contexto el modelo de negocio se tomará como la manera en que una organización o una persona describe de manera lógica la forma en la cual crea, entrega y captura valor.
      .col-lg-3.mt-5.mt-lg-0
        figure
         img(src='@/assets/curso/tema2/img03.svg')(data-aos="fade-right")
    p.mb-5 El modelo de negocio puede estar fundamentado o sustentado bajo tres (3) pilares básicos, para conocerlos revisar con atención el siguiente recurso educativo: 
    .row.mb-5.justify-content-center
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img04.svg')})`}")
            .tarjeta-flip__contenido.p-5.p-xl-5
              h4.text-center.mt-5 Creación de valor
              p.text-center Los beneficios que se aportan a los clientes al solucionar un problema.
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img05.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4.text-center.mt-5 Clientes
              p.text-center Concentración de la oferta en un grupo o segmento de clientes para poder ofrecer la propuesta de valor más adecuada para ellos.
      .col-lg-4
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img06.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4.text-center.mt-5 Rentabilidad
              p.text-center Creación de valor  para obtener ingresos que sean mayores a los gastos para que el negocio sea viable.
    p El modelo de negocio se puede describir a través de un método simplificado dividido en una parte lógica (sobre la eficiencia) y una parte emotiva (sobre la generación de valor) y compuesto por nueve bloques básicos (mercado meta, propuesta de valor, canales, relación con el consumidor, flujo de ingresos, recursos clave, actividades clave, socios clave y estructura de costos), que muestran de forma lógica como una empresa planea la forma de generar dinero. 
    p.mb-5 Este método es llamado método Canvas que fue desarrollado en 2011 por Alexander Osterwalder e Yves Pigneur, permite describir de forma simplificada los elementos e interacciones que ha elegido la organización para crear, entregar e intercambiar valor, que en otras palabras se puede definir como una herramienta de mapeo general de la empresa en la que se puede identificar la estructura de la organización y validar si la propuesta de valor es única o auténtica (ver figura 4).
    .row.bg22
      .col-12.px-5
        .row
          .col-lg-12
            p(style="color: #9FBE37").mb-0 #[b Figura 4]. 
            p.mb-5 #[em Formato simplificado del método Canvas]
        .row.justify-content-center(data-aos="fade-right").mb-5
          .col-lg-10
            figure
              img(data-aos="fade-right")(src='@/assets/curso/tema2/img07.svg').m-auto
    p.mb-5 Para poder aplicar el método Canvas se debe considerar un orden en particular que facilite el entendimiento de las diferentes interacciones entre divisiones y bloques, para conocerlo se debe revisar con atención el siguiente recurso educativo: 
    .row.justify-content-center.mb-2.p-3
      .col-12.col-md-10
        .row.bg06
          .col-12.col-md-1.d-flex.justify-content-center.align-items-center.p-2
              h1.tn.bgn.mb-0 1
          .col-12.col-md-2.d-flex.justify-content-center.align-items-center
            img(data-aos="fade-right")(src='@/assets/curso/tema2/img09.svg', style="width: 90px").m-auto
          .col-12.col-md-9.p-3
            h4 Mercado meta
            p.mb-0 Definición de los diferentes grupos de personas u organizaciones que la empresa desea alcanzar y servir.
    .row.justify-content-center.mb-2.p-3
      .col-12.col-md-10
        .row.bg06
          .col-12.col-md-1.d-flex.justify-content-center.align-items-center.p-2
            h1.tn.bgn.mb-0 2
          .col-12.col-md-2.d-flex.justify-content-center.align-items-center
            img(data-aos="fade-right")(src='@/assets/curso/tema2/img11.svg', style="width: 90px").m-auto
          .col-12.col-md-9.p-3
            h4 Propuesta de valor
            p.mb-0 Descripción del set de producción y/o servicios que crean valor para un segmento específico de clientes.
    .row.justify-content-center.mb-2.p-3
      .col-12.col-md-10
        .row.bg06
          .col-12.col-md-1.d-flex.justify-content-center.align-items-center.p-2
            h1.tn.bgn.mb-0 3
          .col-12.col-md-2.d-flex.justify-content-center.align-items-center
            img(data-aos="fade-right")(src='@/assets/curso/tema2/img13.svg', style="width: 90px").m-auto
          .col-12.col-md-9.p-3
            h4 Canales
            p.mb-0 Descripción de cómo la organización comunica y llega a su mercado meta para entregar su propuesta de valor.
    .row.justify-content-center.mb-2.p-3
      .col-12.col-md-10
        .row.bg06
          .col-12.col-md-1.d-flex.justify-content-center.align-items-center.p-2
            h1.tn.bgn.mb-0 4
          .col-12.col-md-2.d-flex.justify-content-center.align-items-center
            img(data-aos="fade-right")(src='@/assets/curso/tema2/img15.svg', style="width: 90px").m-auto
          .col-12.col-md-9.p-3
            h4 Relación con el consumidor
            p.mb-0 Descripción de los tipos de relaciones que una compañía establece con su mercado meta.
    .row.justify-content-center.mb-2.p-3
      .col-12.col-md-10
        .row.bg06
          .col-12.col-md-1.d-flex.justify-content-center.align-items-center.p-2
            h1.tn.bgn.mb-0 5
          .col-12.col-md-2.d-flex.justify-content-center.align-items-center
            img(data-aos="fade-right")(src='@/assets/curso/tema2/img17.svg', style="width: 90px").m-auto
          .col-12.col-md-9.p-3
            h4 Flujo de Ingresos
            p.mb-0 Representación de la caja que una empresa genera, proveniente de los distintos mercados meta.
    .row.justify-content-center.mb-2.p-3
      .col-12.col-md-10
        .row.bg06
          .col-12.col-md-1.d-flex.justify-content-center.align-items-center.p-2
            h1.tn.bgn.mb-0 6
          .col-12.col-md-2.d-flex.justify-content-center.align-items-center
            img(data-aos="fade-right")(src='@/assets/curso/tema2/img67.svg', style="width: 90px").m-auto
          .col-12.col-md-9.p-3
            h4 Recursos clave
            p.mb-0 Descripción de los elementos más importantes que se requieren para que el modelo de negocios funcione.
    .row.justify-content-center.mb-2.p-3
      .col-12.col-md-10
        .row.bg06
          .col-12.col-md-1.d-flex.justify-content-center.align-items-center.p-2
            h1.tn.bgn.mb-0 7
          .col-12.col-md-2.d-flex.justify-content-center.align-items-center
            img(data-aos="fade-right")(src='@/assets/curso/tema2/img68.svg', style="width: 90px").m-auto
          .col-12.col-md-9.p-3
            h4 Actividades clave
            p.mb-0 Descripción de las acciones más importantes que se requieren para que el modelo de negocios funcione.
    .row.justify-content-center.mb-2.p-3
      .col-12.col-md-10
        .row.bg06
          .col-12.col-md-1.d-flex.justify-content-center.align-items-center.p-2
            h1.tn.bgn.mb-0 8
          .col-12.col-md-2.d-flex.justify-content-center.align-items-center
            img(data-aos="fade-right")(src='@/assets/curso/tema2/img69.svg', style="width: 90px").m-auto
          .col-12.col-md-9.p-3
            h4 Socios clave
            p.mb-0 Descripción de las alianzas más importantes que se requieren para que el modelo de negocios funcione.
    .row.justify-content-center.mb-5.p-3
      .col-12.col-md-10
        .row.bg06
          .col-12.col-md-1.d-flex.justify-content-center.align-items-center.p-2
            h1.tn.bgn.mb-0 9
          .col-12.col-md-2.d-flex.justify-content-center.align-items-center
            img(data-aos="fade-right")(src='@/assets/curso/tema2/img70.svg', style="width: 90px").m-auto
          .col-12.col-md-9.p-3
            h4 Estructura de costos
            p.mb-0 Descripción de los costos en los que se incurren para operar el modelo de negocio.
    p.mb-3 Asimismo, para poder realizar el diseño o analizar el modelo de negocio aplicando el método Canvas es importante iniciar dando respuesta a las preguntas: ¿Cómo?, ¿Qué?, ¿Quién? y ¿Cuánto?
    p.mb-5 En la siguiente tabla se describe de manera más concreta cómo se deben formular este tipo de preguntas (ver tabla 1):
    .row.justify-content-center.mb-5
      .col-lg-12
        p.mb-0 #[b Tabla 1]. 
        p #[em Preguntas clave que debe responder el método Canvas]
    .bg07
      .row.justify-content-center(data-aos="fade-right").mb-5
        .col-lg-12
          figure
            img(data-aos="fade-right")(src='@/assets/curso/tema2/img21.svg').m-auto
    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Entendimiento de los procesos dentro de la cadena de valor de la organización
    .row
      .bg08 
        p.mb-4 La cadena de valor describe aquellos eslabones que participan y se conectan a través de diversos modelos al negocio de la empresa, en estos procesos se incluyen: proveedores, proveedores de sus proveedores, distribuidores, canales de distribución, clientes, gestores de residuos, entre otros; estos son aliados de la empresa que en su conjunto representan la cadena de valor, la cual se compara con el ciclo de vida de los productos o servicios que esta ofrece.
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-4.mb-5.mb-lg-0
            .cajon.color-primario.shadow-sm(data-aos="fade-right")
              .p-4
                p.mb-0 Para que una empresa pueda realizar el análisis de la cadena de valor, debe tener identificado el modelo de negocio y los aspectos sociales y ambientales que interactúan constantemente con el día a día de la operación; para ello, pueden implementar un  modelo que está tomando fuerza y que permite dimensionar el negocio bajo una esfera de circularidad e integración socioambiental.
          .col-lg-4.mb-5.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img23.png')(data-aos="fade-right")
          .col-lg-4
            .dual-txt-deco2
              p(style="position: relative; z-index: 1;") La primera fuente de materialidad socioambiental inicia con la identificación de los principales flujos de materiales y sus impactos ambientales a lo largo de la cadena de valor o ciclo de vida del producto, la evaluación de los impactos críticos se fundamenta en la identificación de los servicios ecosistémicos utilizados y la identificación de la contaminación generada en cada eslabón de la cadena; para ello, se deben identificar los volúmenes u órdenes de magnitud de los flujos de materiales y su posible contaminación.
        p Para el adecuado entendimiento de las entradas y salidas de cada uno de los eslabones de la cadena de la organización, a continuación, se presenta el ejemplo del diagrama básico para realizar esta identificación y análisis (ver figura 5): 
        .row.justify-content-center.mb-4
          .col-lg-12
            p.mb-0 #[b Figura 5]. 
            p #[em Diagrama básico de la cadena de valor]
        .row.justify-content-center(data-aos="fade-right").mb-4
          .col-lg-12
            img(data-aos="fade-right")(src='@/assets/curso/tema2/img24.svg').m-auto
    Separador
    #t_2_3
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Impactos ambientales: herramientas de identificación y evaluación de impactos (evaluación de impactos ambientales EIA, huellas ambientales, análisis del ciclo de vida ACV, huella ecológica)
    .row.mb-5
      .col-12.bg09
        .row
          .col-lg-6
            .p-5
              p Actualmente las organizaciones se han visto obligadas a desarrollar acciones que impliquen el cuidado del medio ambiente y en respuesta a estas exigencias ven en la sostenibilidad ambiental la oportunidad para mejorar su comportamiento y desarrollar estrategias efectivas respecto a su responsabilidad social.
              p.mb-0 Dada esta realidad, la identificación y evaluación de los impactos ambientales son parte fundamental para la determinación de la materialidad socioambiental. Desde esta perspectiva, es importante entender lo que implica un impacto ambiental, sus tipos y métodos de identificación.
    .row.align-items-center.mb-5
      .col-lg-4.bg11.p-3
        h4.text-white.text-center.mb-0 Aspecto e impacto ambiental: 
    p.mb-5 El aspecto ambiental es considerado como la causa que genera un efecto negativo o positivo en el entorno, ese efecto es llamado impacto ambiental, en el siguiente recurso educativo podrá visualizar las definiciones más acertadas para estos dos términos:
    .row.mb-5
      .col-lg.m-2
        .row
          .col-12
            figure
              img(src='@/assets/curso/tema2/img26.svg', style="width: 90px").m-auto
          .col-12.bg12.pb-3
            .p-3.bg-white.shadow-sm(style="height: 180px")
              h4.mb-0.text-center Aspecto
              p.mb-0.text-center Elemento de las actividades, productos o servicios de una organización que pueden interactuar con el medio ambiente.
      .col-lg.m-2
        .row
          .col-12
            figure
              img(src='@/assets/curso/tema2/img28.svg', style="width: 105px").m-auto
          .col-12.bg13.pb-3
            .p-3.bg-white.shadow-sm(style="height: 180px")
              h4.text-center.mt-4 Causa
              h4.text-center Aspecto
      .col-lg.m-2
        .row
          .col-12
            figure
              img(src='@/assets/curso/tema2/img30.svg', style="width: 105px").m-auto
          .col-12.bg14.pb-3
            .p-3.bg-white.shadow-sm(style="height: 180px")
              h4.text-center.mt-4 Causa
              h4.text-center Impacto
      .col-lg.m-2
        .row
          .col-12
            figure
              img(src='@/assets/curso/tema2/img32.svg', style="width: 105px").m-auto
          .col-12.bg15.pb-3
            .p-3.bg-white.shadow-sm(style="height: 180px")
              h4.mb-0.text-center Impacto
              p.mb-0.text-center Cualquier cambio en el medio ambiente, sea adverso o beneficioso, como resultado total o parcial de los aspectos ambientales.
    .row.mb-2.align-items-center
      .col-lg-3.bg11.p-3.mb-5
        h4.text-white.text-center.mb-0 Tipos de impacto: 
      p.mb-5 De acuerdo con lo definido en la metodología general para la elaboración y presentación de estudios ambientales se definen algunos tipos de impacto ambiental, para conocerlos se debe revisar con atención el siguiente recurso educativo: 
    .row.justify-content-center
      .col.col-10.d-flex.justify-content-center
        ImagenInfografica.color-acento-contenido.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img34.png')
          .tarjeta.color-acento-botones.p-3(x="36%" y="63%" numero="1")
            figure.fig-position1
              img(src='@/assets/curso/tema2/img37.svg', style="width: 35px")
            h5.mb-2 Impacto acumulativo 
            p.text-small Impacto ambiental que resulta de efectos sucesivos, incrementales, y/o combinados de proyectos, obras o actividades cuando se suma a otros impactos existentes, planeados y/o futuros razonablemente anticipados. Para efectos prácticos, la identificación, análisis y manejo de los impactos acumulativos se deben orientar a aquellos que sean reconocidos como significativos, que se manifiestan en diversas escalas espacio - temporales.
          .tarjeta.color-acento-botones.p-3(x="65%" y="12%" numero="2")
            figure.fig-position1
              img(src='@/assets/curso/tema2/img38.svg', style="width: 35px")
            h5.mb-2 Impacto continuo o periódico 
            p.text-small Impacto ambiental que depende del período en que se manifieste.
          .tarjeta.color-acento-botones.p-3(x="17%" y="38%" numero="3")
            figure.fig-position1
              img(src='@/assets/curso/tema2/img39.svg', style="width: 35px")
            h5.mb-2 Impacto residual
            p.text-small Impacto cuyos efectos persisten en el ambiente, luego de aplicadas las medidas de prevención, mitigación y corrección, razón por la cual se deben aplicar medidas de compensación.
          .tarjeta.color-acento-botones.p-3(x="75%" y="63%" numero="4")
            figure.fig-position1
              img(src='@/assets/curso/tema2/img40.svg', style="width: 35px")
            h5.mb-2 Impacto reversible o irreversible 
            p.text-small Impacto ambiental que depende de la posibilidad de regresar a las condiciones originales.
          .tarjeta.color-acento-botones.p-3(x="43%" y="14%" numero="5")
            figure.fig-position1
              img(src='@/assets/curso/tema2/img41.svg', style="width: 35px")
            h5.mb-2 Impacto sinérgico 
            p.text-small Impacto que tiene origen en las interacciones complejas entre otros impactos, ya sean generados por un mismo proyecto o por varios. Un impacto sinérgico puede evidenciarse cuando el efecto combinado de dos impactos es mayor que su suma o cuando éstos ocasionan la aparición de un tercer impacto.
          .tarjeta.color-acento-botones.p-3(x="49%" y="83%" numero="6")
            figure.fig-position1
              img(src='@/assets/curso/tema2/img42.svg', style="width: 35px")
            h5.mb-2 Impacto temporal o permanente 
            p.text-small El impacto es por un período determinado o es definitivo.
    .row.mb-2.align-items-center
      .col-lg-3.bg11.p-3.mb-5
        h4.text-white.text-center.mb-0 Métodos de identificación:
    .row.bg23.mb-5
      .col-12.px-5
        p.mb-4 El primer paso que se debe dar es identificar los aspectos ambientales asociados a la organización, para posteriormente evaluarlos y determinar cuáles son prioritarios, es decir, los que potencialmente pueden generar un mayor daño ambiental, y, en consecuencia, tomar acciones específicas para combatirlos.
        P.mb-5 Cabe resaltar que no existen diferentes métodos para identificar y evaluar impactos ambientales, en la siguiente figura 6 se encuentran los pasos básicos para realizar dicha acción:
        .row.justify-content-center
          .col-lg-10
            p.mb-0(style="color: #9FBE37") #[b Figura 6].
            p.mb-4 #[em Métodos de identificación]
            figure.mb-4
              img(data-aos="fade-right")(src='@/assets/curso/tema2/img35.svg').m-auto
        p.mb-5 Para realizar la identificación y evaluación de impactos ambientales se pueden aplicar los siguientes métodos:
          .row.justify-contente-center.align-items-center.mb-4
            .col-lg-10
              .row 
                .col-lg-4.mb-4.mb-lg-0.p-5.d-flex.align-items-center
                  figure
                    img(src='@/assets/curso/tema2/img36.png' style="width: 300px").m-auto
                .col-lg-8.p-3
                  p #[b Evaluación de impactos ambientales (EIA):]
                  .dual-txt-deco3
                    p(style="position: relative; z-index: 1;") Es el procedimiento que incluye estudios, informes técnicos y consultas que permiten estimar las consecuencias que un determinado proyecto, instalación o actividad causa sobre el medio ambiente. Se trata de un análisis a partir del cual se puede aprobar o rechazar un proyecto, en el marco de los efectos ambientales.
                    p #[b #[u La E.I.A].] constituye una de las herramientas más útiles para la protección ambiental, ya que incorpora variables sociales, ambientales y económicas. También se entiende como un proceso de análisis que anticipa los futuros efectos ambientales negativos y positivos para determinadas acciones, y permite seleccionar alternativas que disminuyan los impactos.
                    p Por ello, es necesario impulsar el control y la adopción de medidas preventivas, correctivas o compensatorias en aquellas actuaciones susceptibles de producir efectos negativos sobre el medio, afectando con ello a la calidad de vida de los ciudadanos.
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.mb-4.mb-lg-0
          h4 Huellas ambientales: 
          .dual-txt-deco3
            p(style="position: relative; z-index: 1;") Estas huellas consolidan un análisis de potenciales impactos ambientales que se generan de forma directa o indirecta a lo largo del ciclo de vida de un producto, servicio u organización. 
            p.mb-0 Esta medición ha concretado la metodología de Análisis de Ciclo de Vida (ACV), especificando los impactos que deben incluirse en este análisis; la huella ambiental define de manera concreta la ejecución del ACV y determina alcances y categorías de impacto para que los resultados puedan ser comparables entre sí.
        .col-lg-5
          figure
            img.mb-5(src='@/assets/curso/tema2/img37.png' style="width: 450px").m-auto
        .col-lg-10
          p.mb-5 Dentro de la huella ambiental se consideran un máximo de 14 tipos diferentes de impactos ambientales, los cuales puedes observar en la siguiente figura 7.
          p.mb-0(style="color: #9FBE37") #[b Figura 7].
          p.mb-4 #[em Tipos de impactos ambientales]
          figure
            img(src='@/assets/curso/tema2/img44.svg').m-auto
    .row.justify-content-center.mb-5
      .col-lg-10
        p.mb-4 #[b Análisis del Ciclo de Vida (ACV):]
        .dual-txt-deco4.mb-5
          p(style="position: relative; z-index: 1;") El #[b Análisis del Ciclo de Vida (ACV)] es una metodología a través de la cual se puede realizar un análisis objetivo de estimación y evaluación de los impactos que puede provocar sobre el medio ambiente un producto o servicio a lo largo de todas las etapas de su vida.
      .col-lg-8
        .cajon.color-secundario.p-4.mb-5
          .row.align-items-center
            .col-lg-auto.mb-4.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/img45.svg' style="width: 90px").m-auto
            .col
              p.mb-0 #[b El ACV] fue de diseñado en los años setenta debido a los impactos negativos producidos por los procesos productivos es esta época. Actualmente, no hay una única teoría, guía, manual o procedimiento especifico a seguir para realizar este análisis, sin embargo, se cuenta con algunos lineamientos que se pueden aplicar de acuerdo con los problemas que quiera detectar y resolver la organización.
      .col-lg-10
        p El ACV, cuenta con un principio básico el cual es identificar y describir cada una de las etapas del ciclo de vida de un producto y/o servicio desde la etapa extractiva de materias primas, productiva, de distribución y el uso final del producto y/o servicio (reciclado, reuso o disposición final).
        p.mb-5 La vida de un producto comienza en el diseño y desarrollo de éste y finaliza con las actividades de reutilización y reciclaje, al observar con atención el recurso educativo propuesto se pueden conocer en detalle cada una de estas etapas:
      .col-lg-6.mb-5
        ImagenInfografica.color-primario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img46.svg')
          .tarjeta.color-terciario.p-3(x="63%" y="40%" numero="+")
            .row
              .col-auto
                figure
                  img(src='@/assets/curso/tema2/img47.svg' style="width: 20px").m-auto
              .col
                .row.bg24
                  .col-12
                    .row.align-items-end.mb-3
                      .col-3
                        figure
                          img(src='@/assets/curso/tema2/img48.svg').m-auto
                      .col-9.bg25
                        p.mb-0 #[b Adquisición de materias primas:]
                    .row
                      .col-12
                        .p-4.shadow
                          p.mb-0 Son las actividades necesarias para la producción relacionadas con la extracción de las materias primas, el uso de recursos (energía, agua, entre otros) y el transporte de estas a planta de producción.
          .tarjeta.color-terciario.p-3(x="58%" y="8%" numero="+")
            .row
              .col-auto
                figure
                  img(src='@/assets/curso/tema2/img49.svg' style="width: 20px").m-auto
              .col
                .row.bg26
                  .col-12
                    .row.align-items-end.mb-3
                      .col-3
                        figure
                          img(src='@/assets/curso/tema2/img50.svg').m-auto
                      .col-9.bg27
                        p.mb-0 #[b Proceso y fabricación:]
                    .row
                      .col-12
                        .p-4.shadow
                          p.mb-0 Son las actividades relacionadas con la transformación de las materias primas y recursos en un producto o servicio.
          .tarjeta.color-terciario.p-3(x="92%" y="45%" numero="+")
            .row
              .col-auto
                figure
                  img(src='@/assets/curso/tema2/img51.svg' style="width: 20px").m-auto
              .col
                .row.bg28
                  .col-12
                    .row.align-items-end.mb-3
                      .col-3
                        figure
                          img(src='@/assets/curso/tema2/img52.svg').m-auto
                      .col-9.bg29
                        p.mb-0 #[b.text-white Distribución y transporte:]
                    .row
                      .col-12
                        .p-4.shadow
                          p.mb-0 Son las actividades relacionadas con el transporte del producto o servicio desde la organización transformadora hasta el cliente meta.
          .tarjeta.color-terciario.p-3(x="65%" y="86%" numero="+")
            .row
              .col-auto
                figure
                  img(src='@/assets/curso/tema2/img53.svg' style="width: 20px").m-auto
              .col
                .row.bg30
                  .col-12
                    .row.align-items-end.mb-3
                      .col-3
                        figure
                          img(src='@/assets/curso/tema2/img54.svg').m-auto
                      .col-9.bg31
                        p.mb-0 #[b Uso, reutilización y mantenimiento:]
                    .row
                      .col-12
                        .p-4.shadow
                          p.mb-0 Son las actividades relacionadas con el uso del producto o servicio por el cliente meta hasta el fin de su vida útil.
          .tarjeta.color-terciario.p-3(x="16%" y="75%" numero="+")
            .row
              .col-auto
                figure
                  img(src='@/assets/curso/tema2/img55.svg' style="width: 20px").m-auto
              .col
                .row.bg32
                  .col-12
                    .row.align-items-end.mb-3
                      .col-3
                        figure
                          img(src='@/assets/curso/tema2/img56.svg').m-auto
                      .col-9.bg33
                        p.mb-0 #[b Reciclaje:]
                    .row
                      .col-12
                        .p-4.shadow
                          p.mb-0 Son las actividades relacionadas con la reintroducción del producto o servicio al ciclo productivo de la misma organización que lo produjo (ciclo cerrado de reciclaje) o en ciclo productivo de otra organización (ciclo abierto de reciclaje).
          .tarjeta.color-terciario.p-3(x="12%" y="27%" numero="+")
            .row
              .col-auto
                figure
                  img(src='@/assets/curso/tema2/img57.svg' style="width: 20px").m-auto
              .col
                .row.bg34
                  .col-12
                    .row.align-items-end.mb-3
                      .col-3
                        figure
                          img(src='@/assets/curso/tema2/img58.svg').m-auto
                      .col-9.bg35
                        p.mb-0 #[b Gestión de los residuos:]
                    .row
                      .col-12
                        .p-4.shadow
                          p.mb-0 Son las actividades relacionadas con la disposición final del producto (relleno sanitario o vertedero).
      .col-lg-10
        p.mb-5 El marco normativo para el Análisis de Ciclo de Vida es:
      .row.justify-content-center.mb-5
        .col-lg-8.bg36.mb-4
          p.mb-0.text-center 1. #[b NTC-ISO 14040]. Gestión Ambiental. Análisis de Ciclo de Vida. Principios y marco de referencia.
        .col-lg-8.bg37
          p.mb-0.text-center 2. #[b NTC-ISO 14044]. Gestión Ambiental. Análisis de Ciclo de Vida. Requisitos y directrices.
      .col-lg-10
        p.mb-4 #[b Huella ecológica:]
        .dual-txt-deco5
          p(style="position: relative; z-index: 1;") El concepto fue propuesto en 1996 por William Rees y Malthis Wackernagel, la huella ecológica es un indicador que permite determinar el impacto de la sociedad sobre el planeta, asociado al modelo y hábitos de consumo y los recursos requeridos para cubrir dicho modelo.
        p.mb-5 En el siguiente recurso educativo puede identificar la diferencia entre, huella ecológica, huella hídrica y huella de carbono (ver figura 8):
        .row.mb-5
          .col-lg-10
            .row
              .col-12.bg11.p-3.mb-5
                h4.text-white.text-center.mb-0 Diferencia entre, huella ecológica, huella hídrica y huella de carbono:
            .row.justify-content-center
              .col-10.col-lg.mb-4.mb-lg-0
                .tarjeta.tarjeta-flip.color-primario1(@mouseover="indicadorTarjetaFlip = false")
                  .indicador--hover(v-if="indicadorTarjetaFlip")
                  .tarjeta-flip__contenedor
                    .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img59.svg')})`}")
                    .tarjeta-flip__contenido.p-4
                      h4 HUELLA ECOLÓGICA
                      p Contempla todos los factores relacionados con el estilo de vida y su impacto en el entorno ambiental. 
                      p.mb-0 Es la forma de medir el impacto que la humanidad ejerce sobre el planeta.
              .col-10.col-lg.mb-4.mb-lg-0
                .tarjeta.tarjeta-flip.color-primario3(@mouseover="indicadorTarjetaFlip = false")
                  .indicador--hover(v-if="indicadorTarjetaFlip")
                  .tarjeta-flip__contenedor
                    .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img61.svg')})`}")
                    .tarjeta-flip__contenido.p-4
                      h4 HUELLA HÍDRICA
                      p Es el volumen total de agua dulce usada para producir los bienes y servicios en una empresa, o consumidos por un individuo u organización. Este indicador fue desarrollado por Arjen Hoeskstra en 2002.
              .col-10.col-lg
                .tarjeta.tarjeta-flip.color-primario2(@mouseover="indicadorTarjetaFlip = false")
                  .indicador--hover(v-if="indicadorTarjetaFlip")
                  .tarjeta-flip__contenedor
                    .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img60.svg')})`}")
                    .tarjeta-flip__contenido.p-4
                      h4 HUELLA DE CARBONO
                      p Considera las emisiones de CO2, cuenta todos los gases de efecto invernadero (GEI) y se emplea para determinar el impacto de las actividades humanas en el medio ambiente.
        p.mb-0(style="color: #9FBE37") #[b Figura 8].
        p.mb-4 #[em Componente de la huella hídrica]
        .row.mb-2
          .col-lg-10.p-4.bg38
            h3.mb-0.text-center.text-white Huella hídrica azul
          .col-6.col-lg-5.p-4.bg39
            p.mb-0 Cantidad (m3 o L) de agua dulce de fuentes subterráneas o superficiales usadas en cada uno de los procesos de la cadena de valor de un producto.
          .col-6.col-lg-5.p-4.bg40
            p.mb-0 Monitoreo a través de contadores de flujo y aforadores.
          .col-lg-10.p-4.bg41
            h3.mb-0.text-center.text-white Huella hídrica verde
          .col-6.col-lg-5.p-4.bg42
            p.mb-0 Cantidad (m3 o L) de agua lluvia, nieve o deshielo usada en cada uno de los procesos de la cadena de valor de un producto o incorporada.
          .col-6.col-lg-5.p-4.bg43
            p.mb-0 Monitoreo continuo de la cantidad de agua de precipitación capturada (verificar reportes climáticos diarios).
          .col-lg-10.p-4.bg44
            h3.mb-0.text-center.text-white Huella hídrica gris
          .col-6.col-lg-5.p-4.bg45
            p.mb-0 Cantidad (m3 o L) de vertida como resultado del proceso productivo y la cantidad (m3 o L) de agua necesaria para diluir los contaminantes presentes para que sea asimilada por el ecosistema.
          .col-6.col-lg-5.p-4.bg46
            p.mb-0 Monitoreo de la cantidad de agua que entra y sale del proceso productivo y evaluación de los principales parámetros de calidad del agua.
        .row
          .col-lg-10.p-2.bg45
            .p.mb-0.text-end Nota. SENA (2022).
    p #[b Material Complementario]
    p.mb-5 Para ampliar la información respecto al tema de impactos ambientales, se invita a consultar el siguiente vídeo, en donde se encontrarán aspectos fundamentales que permiten su entendimiento:
    .row.bg47
      .col-12.p-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/SnO4bjRghGk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

  

    Separador
    #t_2_4
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Partes interesadas: identificación, clasificación y priorización de partes interesadas
    p Los grupos de interés son esos individuos, grupos de individuos u organizaciones que afectan o podrían ser afectados por las actividades, productos o servicios y el desempeño asociado a una organización. 
    p.mb-5 No existe una única forma para identificar y clasificar las partes interesadas de interés, sin embargo, es necesario utilizar una metodología que considere los siguientes atributos, como puede observarse a continuación:
    .row.align-items-center.mb-5
      .col-lg-6
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Dependencia")
            .col-12
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema2/img62.svg', style="width: 90px")
                .col
                  p.mb-0 Grupos o individuos dependientes de las actividades, productos y servicios, o de los que la organización depende para poder operar.
          .row(titulo="Responsabilidad")
            .col-12
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema2/img63.svg', style="width: 90px")
                .col
                  p.mb-0 Grupos o individuos con quienes la organización tiene o puede tener responsabilidades legales, comerciales, operacionales o ético - morales.
          .row(titulo="Tensión")
            .col-12
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema2/img64.svg', style="width: 90px")
                .col
                  p.mb-0 Grupos o individuos que necesitan atención inmediata de la organización respecto a aspectos financieros, a cuestiones económicas  y asuntos sociales y ambientales.
          .row(titulo="Influencia")
            .col-12
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema2/img65.svg', style="width: 90px")
                .col
                  p.mb-0 Grupos o individuos que pueden tener un impacto en la toma de decisiones estratégicas u operativas de la organización  o de los grupos de interés.
          .row(titulo="Perspectiva")
            .col-12
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema2/img66.svg', style="width: 90px")
                .col
                  p.mb-0 Grupos o individuos cuyos puntos de vista diversos pueden conducir a una nueva comprensión de la situación y la identificación de oportunidades.
      .col-lg-6
        figure
          img(src='@/assets/curso/tema2/img38.png' style="width: 550px").m-auto
    p Conforme a estos atributos u otros según la metodología establecida se realiza una evaluación en la que se determina cuales, de estos individuos, grupos de individuos u organizaciones son los más relevantes para la organización por su nivel de dependencia, responsabilidad, tensión, influencia y perspectivas.
    Separador
    #t_2_5
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.5 Priorización de temas materiales
    .row.mb-5
      .col-lg-4.mb-4.mb-lg-0
        .cajon.color-acento-botones.p-4
          p.mb-0 Según el #[b #[em Global Reporting Initiative (GRI)]], los temas materiales deben reflejar los impactos económicos, ambientales y sociales significativos para la organización y su relación con los aspectos sustancialmente relevantes y la toma de decisiones.
      .col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema2/img39.png' style="width: 450px").m-auto
      .col-lg-4
        .dual-txt-deco6
          p(style="position: relative; z-index: 1;") El término #[b “temas materiales”], se utilizó inicialmente en el sector financiero para describir aquellos asuntos con impacto financiero que influían en la toma de decisiones gerenciales. Abordar los asuntos materiales contribuye a obtener mayores rendimientos al tener una visión integrada de la sostenibilidad en el negocio.
    p.mb-5 La priorización de los temas materiales se ilustra en el siguiente cuadro cartesiano, en el eje de las X se encuentra la importancia de los impactos económicos, ambientales y sociales y en el eje Y la influencia en las evaluaciones y decisiones de los grupos de interés (ver figura 9):
    .row.justify-content-center.mb-5
      .col-lg-10
        p.mb-0(style="color: #9FBE37") #[b Figura 9].
        p.mb-4 #[em Priorización de temas materiales]
        figure.mb-3
          img(src='@/assets/curso/tema2/img40.png').m-auto
        p.text-end.mb-0 Nota. Matriz de materialidad. Tomado de:
        p.text-end https://susty.org/wp-content/uploads/2018/08/Matriz-de-Materialidad-GRI-1.png
    p.mb-0 La matriz de materialidad permite interrelacionar los temas más importantes para la organización y la influencia de las partes interesadas frente a estos. En esta matriz se pueden identificar los temas materiales con menor, mediana y mayor importancia, donde los de mayor importancia serán los temas materiales centrales a trabajar en la estrategia de sostenibilidad de la organización.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
