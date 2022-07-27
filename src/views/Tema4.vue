<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: #161730") 4
      h1 Estrategias y herramientas para la sostenibilidad
    p.mb-5 Los conocimientos y capacidad de gestión son elementos clave para desarrollar una estrategia de sostenibilidad, además existen diferentes herramientas para llevar a cabo esta gestión, para conocerlas se debe revisar con detenimiento el recurso educativo aquí propuesto:
    TabsA.color-secundario
      .tarjeta.color-secundario.p-4(titulo="Alianzas estratégicas").shadow-sm
        .row.align-items-center.p-4
          .col-12
            p.mb-4 #[b Alianzas estratégicas]
            .row
              .col-auto
                figure
                  img(src='@/assets/curso/tema4/img1.svg').m-auto
              .col
                p.mb-0 Consiste en la integración de  todos los actores: comunidad, gobierno central, gobierno local, empresas del sector, cooperación internacional, organizaciones gubernamentales, organizaciones no gubernamentales y del tercer sector, entre otras. No siempre se relacionan con un aporte económico, muchas veces estas alianzas pueden ir mucho más allá, abordar temas de valor para las dos partes que les permitan avanzar hacia el logro de sus propios objetivos.
      .tarjeta.color-secundario.p-4(titulo="Gestión de riesgos").shadow-sm
        .row.align-items-center.p-4
          .col-12
            p.mb-4 #[b Gestión de riesgos]
            .row
              .col-auto
                figure
                  img(src='@/assets/curso/tema4/img2.svg').m-auto
              .col
                p.mb-0 Las compañías que desarrollan proyectos sostenibles, especialistas en el tema, pueden aportar recursos basados en el conocimiento, esto permite mitigar los impactos negativos para ellos y otras organizaciones y sus diferentes grupos de interés; los riesgos deben cubrir aspectos económicos, ambientales y sociales.
      .tarjeta.color-secundario.p-4(titulo="Desarrollo de capacidades").shadow-sm
        .row.align-items-center.p-4
          .col-12
            p.mb-4 #[b Desarrollo de capacidades]
            .row
              .col-auto
                figure
                  img(src='@/assets/curso/tema4/img3.svg').m-auto
              .col
                p.mb-0 Las organizaciones deben contribuir a desarrollar procesos de aprendizaje en la gestión sostenible de sus proyectos y de sus propios objetivos; la meta será mitigar las prácticas obsoletas o inadecuadas y migrar a unas que contemplen aspectos más allá de la productividad, el rendimiento económico o la generación exclusiva de valor para los accionistas, deben desarrollar aspectos ligados a temas como la transparencia, los derechos humanos, el manejo correcto de los residuos, el control del impacto ambiental, brindar prácticas laborales justas, entre otras.
      .tarjeta.color-secundario.p-4(titulo="Reportes de sostenibilidad").shadow-sm
        .row.align-items-center.p-4
          .col-12
            p.mb-4 #[b Reportes de sostenibilidad]
            .row
              .col-auto
                figure
                  img(src='@/assets/curso/tema4/img4.svg').m-auto
              .col
                p.mb-0 Es una herramienta que le permite a las empresas comunicar públicamente sus resultados sociales, ambientales y económicos, no solo es un ejercicio de transparencia, el reporte es empleado como un mecanismo de gestión y mejora continua, dado que anualmente se deben reportar avances versus la gestión reportada en el periodo anterior. Este informe genera confianza en los clientes, el auspicio de nuevas compañías y socios potenciales que ofrezcan recursos para continuar con los planes por un futuro sostenible.
      .tarjeta.color-secundario.p-4(titulo="Conclusión").shadow-sm
        .row.align-items-center.p-4
          .col-12
            p.mb-4 #[b Conclusión]
            .row
              .col-auto
                figure
                  img(src='@/assets/curso/tema4/img5.svg').m-auto
              .col
                p.mb-0 Todas estas herramientas permiten establecer las bases para las estrategias que combatan la pérdida de la biodiversidad, la contaminación y otras problemáticas actuales. Las empresas de hoy tienen una mayor sensibilidad frente a estas temáticas, no solo por considerarlas estratégicas, sino porque hoy el sector financiero reconoce y motiva el cambio y eso está directamente relacionado con la sostenibilidad económica del negocio.
    Separador
    #t_4_1
    .titulo-segundo.color-acento-contenido
      h2 4.1 Economía circular y producción sostenible
    .row.bg53
      .col-12.px-5
        .row.mb-4
          .col-lg-6.mb-4.mb-lg-0
            .cajon.color-secundario.p-4
              p La economía circular es una alternativa que busca repensar el modelo de producción, consumo y crecimiento, siempre dando prevalencia al desarrollo de beneficios para toda la sociedad, esto implica repensar el modelo económico basado en el consumo de recursos finitos o limitados y aprovecharlos de manera tan eficiente como sea posible, incluso hasta el punto de considerar la eliminación de los residuos, lo que lleva a verlo de forma disruptiva desde el ecodiseño.
          .col-lg-6
            figure
              img(src='@/assets/curso/tema4/img1.png').m-auto
        p.mb-5 El concepto respalda la transición a fuentes renovables de energía, el modelo circular crea capital económico, natural y social y se basa en tres principios fundamentales:
        .row.justify-content-center.mb-5
          .col-lg-auto.bg04
            .m-3 
              h4.mb-0.text-center Principios fundamentales del modelo circular
        .row.justify-content-center.mb-5
          .col-lg-4.mb-4
            .crd_hover_txt1
              .crd_hover_txt--img.mb-0         
                img(src="@/assets/curso/tema4/img2.png")
              .crd_hover_txt--font
                .row.bg-color12
                  .col
                    .p-2
                      p.text-white #[b Principio 1]
                      p.mb-0.text-white Eliminar residuos y contaminación desde el diseño (ecodiseño).
          .col-lg-4.mb-4
            .crd_hover_txt1
              .crd_hover_txt--img.mb-0         
                img(src="@/assets/curso/tema4/img3.png")
              .crd_hover_txt--font
                .row.bg-color12
                  .col
                    .p-2
                      p.text-white #[b Principio 2]
                      p.mb-0.text-white Mantener productos y materiales en la cadena de valor, dando vueltas ya sea como insumo, producto o incluso donde el subproducto de un proceso sea el insumo de uno nuevo.
          .col-lg-4.mb-4
            .crd_hover_txt1
              .crd_hover_txt--img.mb-0         
                img(src="@/assets/curso/tema4/img4.png")
              .crd_hover_txt--font
                .row.bg-color12
                  .col
                    .p-2
                      p.text-white #[b Principio 3]
                      p.mb-0.text-white Regenerar sistemas industriales para convertirlos en modelos similares a la naturaleza, donde no hay desperdicios o residuos.
    .row.bg54
      .col-12.px-5
        .row
          .col-lg-4.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema4/img5.png').m-auto
          .col-lg-8
            .row.mb-0.mb-lg-4
              .col-lg-5.mb-5.mb-lg-0
                figure
                  img(src='@/assets/curso/tema4/img6.png').m-auto
              .col-lg-7
                .dual-txt-deco8
                  p(style="position: relative; z-index: 1;") El objetivo de la economía circular es transformar el modelo productivo actual a un modelo que se asemeje a los ciclos de la naturaleza, el cual se centra en la reducción de los recursos naturales y la generación residuos, emisiones y sustancias peligrosas, teniendo como pilares esenciales el principio de precaución, el cuidado del medio ambiente, la administración eficiente de los recursos y la inclusión social que finalmente promuevan el desarrollo sostenible de las regiones garantizando la satisfacción de las necesidades de la población actual sin comprometer el bienestar de las generaciones futuras.
            p La economía circular se orienta principalmente a:
            .cajon.color-secundario.py-4.px-5
              .row.align-items-center
                .col-auto
                  figure
                    img(src='@/assets/curso/tema4/img6.svg').m-auto
                .col
                  ul.lista-ul
                    li 
                      i.fas.fa-check(style="color: #9FBE37")
                      | Reducir los riesgos para la salud.
                    li 
                      i.fas.fa-check(style="color: #9FBE37")
                      | Reducir los impactos al ambiente.
                    li 
                      i.fas.fa-check(style="color: #9FBE37")
                      | Disminuir el uso de los recursos.
                    li 
                      i.fas.fa-check(style="color: #9FBE37")
                      | Aumentar la competitividad de la actividad empresarial.
        Separador
    #t_4_2
    .titulo-segundo.color-acento-contenido
      h2 4.2 Economía circular y producción sostenible
    p.mb-4 Las ecoetiquetas y las declaraciones ambientales son utilizadas a nivel mundial con el objetivo que un producto o servicio pueda identificarse y distinguirse como un producto o servicio que ha considerado dentro de su proceso de ideación, fabricación, comercialización, uso y disposición final (reciclaje, reúso o eliminación) criterios ambientales validados y certificados por un tercero.
    .row.align-items-center.mb-5
      .col-lg-3.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema4/img7.svg').m-auto
      .col-lg-9
        p.mb-0 Actualmente, varias cadenas de supermercados y el sector alimentos han evidenciado la importancia de producir y comercializar productos que contemplen criterios ambientales por dos razones centrales:
    .row.mb-5
      .col-lg-6.mb-4.mb-lg-0
        .cajon.color-secundario.p-4
          p.mb-0 Mostrar los beneficios y la calidad de los productos que consideran prácticas ambientales sostenibles a comparación de productos que no las toman en cuenta.
      .col-lg-6
        .cajon.color-acento-botones.p-4.h-100
          p.mb-0 Comunicar las buenas prácticas ambientales implementadas por los productores de alimentos a lo largo de la cadena de producción.
    p.mb-5 Las ecoetiquetas y las declaraciones ambientales se encuentran normalizadas a través de la organización de estandarización y certificación ISO, la cual ha generado las siguientes normas de carácter internacional:
    .row.justify-content-center
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/img8.svg' alt='AvatarTop')
          .tarjeta.altura1
            .p-4
              h3 ISO 14020
              p Etiquetas ecológicas y declaraciones ambientales.
              ul.lista-ul
                li 
                  i.fas.fa-check(style="color: #9FBE37")
                  | Principios generales.
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/img8.svg' alt='AvatarTop')
          .tarjeta.altura1
            .p-4
              h3 ISO 14021
              p Etiquetas y declaraciones ambientales.
              ul.lista-ul
                li 
                  i.fas.fa-check(style="color: #9FBE37")
                  | Auto declaraciones.
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/img8.svg' alt='AvatarTop')
          .tarjeta.altura1
            .p-4
              h3 ISO 14024
              p Etiquetas y declaraciones ambientales.
              ul.lista-ul
                li 
                  i.fas.fa-check(style="color: #9FBE37")
                  | Etiquetado ambiental tipo I.
                li 
                  i.fas.fa-check(style="color: #9FBE37")
                  | Principios y procedimientos.
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema4/img8.svg' alt='AvatarTop')
          .tarjeta.altura1
            .p-4
              h3 ISO 14025
              p Etiquetas y declaraciones ambientales.
              ul.lista-ul
                li 
                  i.fas.fa-check(style="color: #9FBE37")
                  | Etiquetado ambiental tipo III.
                li 
                  i.fas.fa-check(style="color: #9FBE37")
                  | Directrices y procedimientos.
    p.mb-5 Según la norma ISO 14020, las etiquetas ambientales:
    .row.bg53
      .col-12.px-5
        .row.justify-content-center
          .col-lg-3.p-4.bg48.d-flex.align-items-center
            figure
              img(src='@/assets/curso/tema4/img9.svg', style="width: 150px").m-auto
          .col-lg-7.p-4.bg49
            ul.lista-ul
              li 
                i.fas.fa-check(style="color: #9FBE37")
                | Son de carácter voluntario.
              li 
                i.fas.fa-check(style="color: #9FBE37")
                | Pueden ser un texto, una imagen o un símbolo.
              li 
                i.fas.fa-check(style="color: #9FBE37")
                | Son Exactas, verificables y no engañosas.
              li 
                i.fas.fa-check(style="color: #9FBE37")
                | Deben tener en cuenta todos los aspectos pertinentes del ciclo de vida del producto.
              li 
                i.fas.fa-check(style="color: #9FBE37")
                | Están basadas en métodos científicos rigurosos y verificables.
              li 
                i.fas.fa-check(style="color: #9FBE37")
                | Deben proveer información sobre los aspectos ambientales a que se refieren.
    Separador
    #t_4_3
    .titulo-segundo.color-acento-contenido
      h2 4.3 Modelos de negocio sostenible (Empresas B, negocios verdes)
    p Las empresas categorizadas bajo el modelo de Empresa B asumen un compromiso de mejora continua y ponen en el centro de su modelo de negocio, el propósito y compromiso empresarial socio ambiental. 
    p.mb-5 Estas empresas miden y analizan y revisan las cinco áreas más relevantes de su empresa: gobierno, trabajadores, clientes, comunidad y medio ambiente, esto con el propósito de identificar las oportunidades y los posibles puntos de mejora que les permitan ser una agente de cambio en la economía, protegiendo la misión y potenciando el triple impacto.
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-auto.bg11.p-3.m-3
        h4.text-white.text-center.mb-0 Cinco áreas más relevantes para una empresa B
    p.mb-5 Los requisitos para someterse a un proceso de evaluación y certificación como empresa B los puede encontrar en el siguiente recurso educativo:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        ImagenInfografica.color-primario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema4/img10.svg')
          .tarjeta.color-color-primario.p-3(x="15%" y="33%" numero="1").fondo4
            p Llevar más de 12 meses de operaciones.
          .tarjeta.color-color-primario.p-3(x="46%" y="40%" numero="2").fondo4
            p Operar en un mercado competitivo.
          .tarjeta.color-color-primario.p-3(x="62%" y="46%" numero="3").fondo4
            p Requerimiento legal de empresa B.
          .tarjeta.color-color-primario.p-3(x="75%" y="75%" numero="4").fondo4
            p Entidad con fines de lucro.
          .tarjeta.color-color-primario.p-3(x="97%" y="25%" numero="5").fondo4
            p Negocio completo y distinto.

    Separador
    #t_4_4
    .titulo-segundo.color-acento-contenido
      h2 4.4 Responsabilidad social empresarial
    p.mb-4 La Responsabilidad Social Empresarial (RSE) es considerada como una nueva forma de ver los negocios y su gestión, ya que promueve que las organizaciones se comprometan a ejecutar sus procesos operacionales conforme a criterios sociales, ambientales y ecológicos con el fin de velar por la continuidad del negocio en el largo plazo y satisfacer las necesidades de las partes interesadas procurando el bienestar de propio y las generaciones futuras.
    .row.justify-content-center.mb-4
      .col-lg-5
        .dual-txt-deco9
          p(style="position: relative; z-index: 1;").p-4 Esta nueva forma de negocio busca que las organizaciones de cualquier tipo, industria, tamaño o nacionalidad integre en su gestión al medio ambiente, la comunidad, el respeto por las personas y los valores éticos, con el objetivo de generar impactos positivos en la sociedad y el entorno en el que desarrolla sus actividades que se traduzcan en una ventaja competitiva y de generación de valor.
      .col-lg-5
        figure
          img(src='@/assets/curso/tema4/img7.png').m-auto
    p.mb-5 La organización al mostrar ser responsable socialmente generará automáticamente más productividad, debido a que una mejora en las condiciones para los trabajadores optimizará también su eficacia (ver figura 11).
    .row.bg50
      .col-12.p-5
        .row.justify-content-center.align-items-end
          .col-lg-7.mb-4.mb-lg-0
            p(style="color: #9FBE37").mb-0 #[b Figura 11]. 
            p.mb-4 #[em Objetivos de la RSE.]
            figure
              img(src='@/assets/curso/tema4/img12.svg').m-auto
          .col-lg-3.bg51.mb-2
            .p-4
              p.mb-0 La Responsabilidad Social Empresarial se fundamenta principalmente sobre los valores corporativos de la organización y se debe evidenciar el compromiso a través de las políticas, actividades, planes y programas establecidos a lo largo de la cadena de valor, de no ser así, al momento de afrontar una crisis, eventualidad o cambio de dirección en la organización la responsabilidad social podría pasar a un segundo plano al no tener la conexión directa con los mandatos y la cultura de esta.
    Separador
    #t_4_5
    .titulo-segundo.color-acento-contenido
      h2 4.5 Indicadores ambientales
    .row.bg52
      .col-12.px-5
        .row.mt-4
          .col-lg-5.mb-4.mb-lg-0
            p Un indicador ambiental es una medida que puede ser de origen físico, químico, biológico, social o económico, que permite evaluar toda aquella información ambiental disponible, con el fin de reflejar las condiciones en las que se encuentra el medio ambiente o un factor ambiental particular, en un tiempo y en un lugar determinados.
            .row.justify-content-center.align-items-center.mb-4
              .col-lg-auto.bg11.p-3.m-3
                h4.text-white.text-center.mb-0 Indicadores ambientales
            p.ms-4 Los indicadores ambientales constituyen una herramienta para informar sobre el estado del medio ambiente, evaluar el desempeño de políticas, programas y proyectos ambientales. La importancia de los indicadores ambientales contribuye a que los principales actores y tomadores de decisiones, implementen medidas y acciones oportunas en la gestión ambiental en el ámbito nacional, regional y local.
          .col-lg-7
            figure
              img(src='@/assets/curso/tema4/img9.png').m-auto

</template>

<script>
export default {
  name: 'Tema3',
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
