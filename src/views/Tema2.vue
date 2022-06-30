<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: #161730") 2
      h1 Análisis de materialidad socio ambiental
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
      .col-lg-6.p-5
        .dual-txt-deco
            p.py-5(style="position: relative; z-index: 1;") Desde esta perspectiva, la materialidad socio ambiental es uno de los conceptos fundamentales utilizados como un modelo que permite determinar los aspectos claves a incluir en los informes de gestión (no financieros) y sobre los cuales desean obtener información los grupos de interés. Estos deben estar orientados a establecer la forma como la organización aporta (muchas veces de manera indirecta) al logro de los ODS (Objetivos de Desarrollo Sostenible).
    p.mb-5 Se puede revisar el siguiente recurso educativo para reconocer algunos aspectos que se deben tener en cuenta en el análisis de la materialidad socio-ambiental: 
    TabsA.color-secundario.mb-5
      .tarjeta.color-secundario-t2.p-4(titulo="1. Determinación:")
        .row.align-items-center.p-4
          .col-12
            h4 1. Determinación:
            p.mb-3 No existe una forma única para determinar la materialidad socio ambiental en términos de sostenibilidad de una organización, sin embargo, su determinación puede ser considerada como un gran un desafío porque en esa articulación sistemática del modelo de negocio con los aspectos sociales y ambientales y los grupos de interés de mayor influencia en la organización, se deben incorporar y priorizar las opiniones de las partes interesadas, involucrar a la alta dirección, extender la evaluación de la materialidad a lo largo de la cadena de valor y replantear la relación naturaleza , producción y desarrollo. 

      .tarjeta.color-secundario-t2.p-4(titulo="2. Identificación:")
        .row.align-items-center.p-4
          .col-12
            h4 2. Identificación:
            p.mb-3 La combinación de la información sobre la empresa, su modelo de negocio, la cadena de valor, el ciclo de vida, su modelo de gobernanza, el mapa de las partes interesadas y la identificación de sus principales impactos y riesgos, permiten comparar y priorizar aquellos asuntos de mayor impacto para la continuidad del negocio. Es vital identificar aspectos de interés para el sector en el cual se desempeña la organización, así como las particularidades de la zona sociodemográfica en la cual desarrolla sus operaciones.
      .tarjeta.color-secundario-t2.p-4(titulo="3. Priorización:")
        .row.align-items-center.p-4
          .col-12
            h4 3. Priorización:
            p.mb-3 Los modelos de materialidad recomiendan herramientas y criterios que facilitan el levantamiento de la información fundamental para priorizar los asuntos ambientales y sociales de cada caso en particular. Una vez identificados, los asuntos materiales deben ser priorizados de acuerdo con las expectativas e intereses de los grupos de interés, no deberán ser más de 10, sin embargo, para iniciar, es clave identificar aquellos que son muy relevantes (idealmente entre 1 y 3), que serán el punto de partida para focalizar la Estrategia de Sostenibilidad Corporativa (ESC). 
    .col-lg-2
      figure
        img(src='@/assets/curso/tema1/img19.svg')(data-aos="fade-right")
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Entendimiento del modelo de negocio de una organización (Método Canvas)
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-3.mb-3
        figure
         img(src='@/assets/curso/tema2/img02.svg')(data-aos="fade-right")
      .col-lg-6.mb-3
        .cajon.color-secundario.p-4(data-aos="fade-right")
           p.mb-3 En la literatura se pueden encontrar diversas definiciones de modelo de negocio, sin embargo, en este contexto el modelo de negocio se tomará como la manera en que una organización o una persona describe de manera lógica la forma en la cual crea, entrega y captura valor.
      .col-lg-3
        figure
         img.img-t2(src='@/assets/curso/tema2/img03.svg')(data-aos="fade-right")
    p.mb-5 El modelo de negocio puede estar fundamentado o sustentado bajo tres (3) pilares básicos, para conocerlos revisar con atención el siguiente recurso educativo: 
    .row.mb-5.justify-content-center
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img04.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4.text-center.mt-5 Creación de valor
              p Los beneficios que se aportan a los clientes al solucionar un problema.
      .col-lg-4.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img05.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4.text-center.mt-5 Clientes
              p Concentración de la oferta en un grupo o segmento de clientes para poder ofrecer la propuesta de valor más adecuada para ellos.
      .col-lg-4
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema2/img06.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              h4.text-center.mt-5 Rentabilidad
              p Creación de valor  para obtener ingresos que sean mayores a los gastos para que el negocio sea viable.
    p.mb-5 El modelo de negocio se puede describir a través de un método simplificado dividido en una parte lógica (sobre la eficiencia) y una parte emotiva (sobre la generación de valor) y compuesto por nueve bloques básicos (mercado meta, propuesta de valor, canales, relación con el consumidor, flujo de ingresos, recursos clave, actividades clave, socios clave y estructura de costos), que muestran de forma lógica como una empresa planea la forma de generar dinero. 
    p.mb-0 Este método es llamado método Canvas que fue desarrollado en 2011 por Alexander Osterwalder e Yves Pigneur, permite describir de forma simplificada los elementos e interacciones que ha elegido la organización para crear, entregar e intercambiar valor, que en otras palabras se puede definir como una herramienta de mapeo general de la empresa en la que se puede identificar la estructura de la organización y validar si la propuesta de valor es única o autentica (ver figura 4). 
    .row.justify-content-end 
      .col-lg-2.mb-0
         figure
          img(src='@/assets/curso/tema1/img22.svg')(data-aos="fade-right")
      .col-lg-12
        p.mb-0 #[b Figura 4]. 
        p #[em Formato simplificado del método Canvas]
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
            p.mb-0 Descripción del set de producción y/o servicios que crean valor para un segmento especifico de clientes.
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
            img(data-aos="fade-right")(src='@/assets/curso/tema2/img17.svg', style="width: 90px").m-auto
          .col-12.col-md-9.p-3
            h4 Recursos clave
            p.mb-0 Descripción de los elementos más importantes que se requieren para que el modelo de negocios funcione.
    .row.justify-content-center.mb-2.p-3
      .col-12.col-md-10
        .row.bg06
          .col-12.col-md-1.d-flex.justify-content-center.align-items-center.p-2
            h1.tn.bgn.mb-0 7
          .col-12.col-md-2.d-flex.justify-content-center.align-items-center
            img(data-aos="fade-right")(src='@/assets/curso/tema2/img17.svg', style="width: 90px").m-auto
          .col-12.col-md-9.p-3
            h4 Actividades clave
            p.mb-0 Descripción de las acciones más importantes que se requieren para que el modelo de negocios funcione.
    .row.justify-content-center.mb-2.p-3
      .col-12.col-md-10
        .row.bg06
          .col-12.col-md-1.d-flex.justify-content-center.align-items-center.p-2
            h1.tn.bgn.mb-0 8
          .col-12.col-md-2.d-flex.justify-content-center.align-items-center
            img(data-aos="fade-right")(src='@/assets/curso/tema2/img17.svg', style="width: 90px").m-auto
          .col-12.col-md-9.p-3
            h4 Socios clave
            p.mb-0 Descripción de las alianzas más importantes que se requieren para que el modelo de negocios funcione.
    .row.justify-content-center.mb-5.p-3
      .col-12.col-md-10
        .row.bg06
          .col-12.col-md-1.d-flex.justify-content-center.align-items-center.p-2
            h1.tn.bgn.mb-0 9
          .col-12.col-md-2.d-flex.justify-content-center.align-items-center
            img(data-aos="fade-right")(src='@/assets/curso/tema2/img17.svg', style="width: 90px").m-auto
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
    .row.mb-5
      .bg08 
        p.mb-0 La cadena de valor describe aquellos eslabones que participan y se conectan a través de diversos modelos al negocio de la empresa, en estos procesos se incluyen: proveedores, proveedores de sus proveedores, distribuidores, canales de distribución, clientes, gestores de residuos, entre otros; estos son aliados de la empresa que en su conjunto representan la cadena de valor, la cual se compara con el ciclo de vida de los productos o servicios que esta ofrece.
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-4.mb-3
            .cajon.color-primario.p-4(data-aos="fade-right")
              p.mb-0 Para que una empresa pueda realizar el análisis de la cadena de valor, debe tener identificado el modelo de negocio y los aspectos sociales y ambientales que interactúan constantemente con el día a día de la operación; para ello, pueden implementar un  modelo que está tomando fuerza y que permite dimensionar el negocio bajo una esfera de circularidad e integración socio ambiental.
          .col-lg-4.mb-3
            figure
              img(src='@/assets/curso/tema2/img23.png')(data-aos="fade-right")
          .col-lg-4
            .dual-txt-deco2
              p.py-5(style="position: relative; z-index: 1;") La primera fuente de materialidad socio ambiental inicia con la identificación de los principales flujos de materiales y sus impactos ambientales a lo largo de la cadena de valor o ciclo de vida del producto, la evaluación de los impactos críticos se fundamenta en la identificación de los servicios ecosistémicos utilizados y la identificación de la contaminación generada en cada eslabón de la cadena; para ello, se deben identificar los volúmenes u órdenes de magnitud de los flujos de materiales y su posible contaminación.
        p Para el adecuado entendimiento de las entradas y salidas de cada uno de los eslabones de la cadena de la organización, a continuación, se presenta el ejemplo del diagrama básico para realizar esta identificación y análisis (ver figura 5): 
        .row.justify-content-center.mb-4
          .col-lg-12
            p.mb-0 #[b Figura 5]. 
            p #[em Diagrama básico de la cadena de valor]
        .row.justify-content-center(data-aos="fade-right").mb-5
          .col-lg-12
            img(data-aos="fade-right")(src='@/assets/curso/tema2/img24.svg').m-auto
    Separador
    #t_2_3
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Impactos ambientales: herramientas de identificación y evaluación de impactos (evaluación de impactos ambientales EIA, huellas ambientales, análisis del ciclo de vida ACV, huella ecológica)
    .row.bg09.p-4.mb-5
      .col-lg-6
        p.mb-4 Actualmente las organizaciones se han visto obligadas a desarrollar acciones que impliquen el cuidado del medio ambiente y en respuesta a estas exigencias ven en la sostenibilidad ambiental la oportunidad para mejorar su comportamiento y desarrollar estrategias efectivas respecto a su responsabilidad social.
        p.mb-4 Dada esta realidad, la identificación y evaluación de los impactos ambientales son parte fundamental para la determinación de la materialidad socio ambiental. Desde esta perspectiva, es importante entender lo que implica un impacto ambiental, sus tipos y métodos de identificación.
    
    .row.mb-2.align-items-center
      .col-lg-4.bg11.p-3.mb-5
        h4.text-white.text-center Aspecto e impacto ambiental: 
      p.mb-0 El aspecto ambiental es considerado como la causa que genera un efecto negativo o positivo en el entorno, ese efecto es llamado impacto ambiental, en el siguiente recurso educativo podrá visualizar las definiciones más acertadas para estos dos términos:
    .row.mb-5
      .col-12.col-md-3.d-flex.justify-content-center.align-items-center.p-2
        img(data-aos="fade-right")(src='@/assets/curso/tema2/img26.svg', style="width: 90px").m-auto
      .col-12.col-md-3.d-flex.justify-content-center.align-items-center.p-2
        img(data-aos="fade-right")(src='@/assets/curso/tema2/img28.svg', style="width: 90px").m-auto
      .col-12.col-md-3.d-flex.justify-content-center.align-items-center.p-2
        img(data-aos="fade-right")(src='@/assets/curso/tema2/img30.svg', style="width: 90px").m-auto
      .col-12.col-md-3.d-flex.justify-content-center.align-items-center.p-2
        img(data-aos="fade-right")(src='@/assets/curso/tema2/img32.svg', style="width: 90px").m-auto
      .col-12.col-md-3.bg12.d-flex.justify-content-center
        p.text-center Elemento de las actividades, productos o servicios de una organización que pueden interactuar con el medio ambiente.
      .col-12.col-md-3.bg13.d-flex.justify-content-center.align-items-center
        h4.text-center Causa Aspecto
      .col-12.col-md-3.bg14.d-flex.justify-content-center.align-items-center
        h4.text-center Efecto Impacto
      .col-12.col-md-3.bg15.d-flex.justify-content-center.align-items-center
        p.text-center Cualquier cambio en el medio ambiente, sea adverso o beneficioso, como resultado total o parcial de los aspectos ambientales. 
    .row.mb-2.align-items-center
      .col-lg-3.bg11.p-3.mb-5
        h4.text-white.text-center Tipos de impacto: 
      p.mb-5 De acuerdo con lo definido en la metodología general para la elaboración y presentación de estudios ambientales se definen algunos tipos de impacto ambiental, para conocerlos se debe revisar con atención el siguiente recurso educativo: 
    .row.justify-content-center
      .col.col-10.d-flex.justify-content-center
        ImagenInfografica.color-acento-contenido.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img34.png')
          .tarjeta.color-acento-botones.p-3(x="36%" y="63%" numero="1")
            h5.mb-2 Impacto acumulativo: 
            p.text-small Impacto ambiental que resulta de efectos sucesivos, incrementales, y/o combinados de proyectos, obras o actividades cuando se suma a otros impactos existentes, planeados y/o futuros razonablemente anticipados. Para efectos prácticos, la identificación, análisis y manejo de los impactos acumulativos se deben orientar a aquellos que sean reconocidos como significativos, que se manifiestan en diversas escalas espacio - temporales.
          .tarjeta.color-acento-botones.p-3(x="65%" y="12%" numero="2")
            h5.mb-2 Impacto continuo o periódico: 
            p.text-small Impacto ambiental que depende del período en que se manifieste.
          .tarjeta.color-acento-botones.p-3(x="17%" y="38%" numero="3")
            h5.mb-2 Impacto residual:
            p.text-small Impacto cuyos efectos persisten en el ambiente, luego de aplicadas las medidas de prevención, mitigación y corrección, razón por la cual se deben aplicar medidas de compensación.
          .tarjeta.color-acento-botones.p-3(x="75%" y="63%" numero="4")
            h5.mb-2 Impacto reversible o irreversible: 
            p.text-small impacto ambiental que depende de la posibilidad de regresar a las condiciones originales.
          .tarjeta.color-acento-botones.p-3(x="43%" y="14%" numero="5")
            h5.mb-2 Impacto sinérgico: 
            p.text-small Impacto que tiene origen en las interacciones complejas entre otros impactos, ya sean generados por un mismo proyecto o por varios. Un impacto sinérgico puede evidenciarse cuando el efecto combinado de dos impactos es mayor que su suma o cuando éstos ocasionan la aparición de un tercer impacto.
          .tarjeta.color-acento-botones.p-3(x="49%" y="83%" numero="6")
            h5.mb-2 Impacto temporal o permanente: 
            p.text-small El impacto es por un período determinado o es definitivo.
    .row.mb-2.align-items-center
      .col-lg-3.bg11.p-3.mb-5
        h4.text-white.text-center Métodos de identificación: 
      p.mb-4 El primer paso que se debe dar es identificar los aspectos ambientales asociados a la organización, para posteriormente evaluarlos y determinar cuáles son prioritarios, es decir, los que potencialmente pueden generar un mayor daño ambiental, y, en consecuencia, tomar acciones específicas para combatirlos.
      P.mb-5 Cabe resaltar que no existen diferentes métodos para identificar y evaluar impactos ambientales, en la siguiente figura 6 se encuentran los pasos básicos para realizar dicha acción:
    .row.justify-content-end 
      .col-lg-10
        p.mb-0 #[b Figura 6]. 
        p #[em Métodos de identificación]
    .row.justify-content-center(data-aos="fade-right").mb-5
      .col-lg-10
        figure
          img(data-aos="fade-right")(src='@/assets/curso/tema2/img35.svg').m-auto
    p.mb-3 Para realizar la identificación y evaluación de impactos ambientales se pueden aplicar los siguientes métodos:
    .bg16
      .row.justify-content-center.mb-2.p-3
        .col-12.col-md-10
          .row
            .col-10.col-md-4.d-flex.align-items-center
              img(data-aos="fade-right")(src='@/assets/curso/tema2/img36.png')
            .col-10.col-md-8.p-3
              p.mb-0 #[b Evaluación de impactos ambientales (EIA):]
              .dual-txt-deco3
                p.py-3.mb-2(style="position: relative; z-index: 1;") Es el procedimiento que incluye estudios, informes técnicos y consultas que permiten estimar las consecuencias que un determinado proyecto, instalación o actividad causa sobre el medio ambiente. Se trata de un análisis a partir del cual se puede aprobar o rechazar un proyecto, en el marco de los efectos ambientales.
                P.mb-2 #[b La E.I.A.] constituye una de las herramientas más útiles para la protección ambiental, ya que incorpora variables sociales, ambientales y económicas. También se entiende como un proceso de análisis que anticipa los futuros efectos ambientales negativos y positivos para determinadas acciones, y permite seleccionar alternativas que disminuyan los impactos.
                p Por ello, es necesario impulsar el control y la adopción de medidas preventivas, correctivas o compensatorias en aquellas actuaciones susceptibles de producir efectos negativos sobre el medio, afectando con ello a la calidad de vida de los ciudadanos.
          P.mb-2 #[b Huellas ambientales:]
          .row.align-items-center
            .col-lg-6
              .dual-txt-deco3
                p.py-3.mb-2(style="position: relative; z-index: 1;") estas huellas consolidan un análisis de potenciales impactos ambientales que se generan de forma directa o indirecta a lo largo del ciclo de vida de un producto, servicio u organización. 
                p.mb-3 Esta medición ha concretado la metodología de Análisis de Ciclo de Vida (ACV), especificando los impactos que deben incluirse en este análisis; la huella ambiental define de manera concreta la ejecución del ACV y determina alcances y categorías de impacto para que los resultados puedan ser comparables entre sí.
            .col-lg-5
              img(data-aos="fade-right")(src='@/assets/curso/tema2/img37.png')
        
            p Dentro de la huella ambiental se consideran un máximo de 14 tipos diferentes de impactos ambientales, los cuales puedes observar en la siguiente figura 7. 
      .row.justify-content-end 
        .col-lg-10
          p.mb-0 #[b Figura 6]. 
          p #[em Métodos de identificación]
      .row.justify-content-center(data-aos="fade-right").mb-5
        .col-lg-10
          figure
            img(data-aos="fade-right")(src='@/assets/curso/tema2/img35.svg').m-auto


      
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
