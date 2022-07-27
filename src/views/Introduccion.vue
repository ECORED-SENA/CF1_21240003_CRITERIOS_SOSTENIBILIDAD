<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span(style="color: #161730") i
      h1 Introducción
    p(data-aos="fade-right") Bienvenido a este componente formativo denominado “El futuro de la materialidad y estrategias que generan valor”, el cual tiene como fin dar a conocer los criterios de sostenibilidad y los procedimientos técnicos establecidos en el marco normativo dentro del contexto productivo.
    p.mb-5(data-aos="fade-right").mb-5 Para comenzar el recorrido por el mismo, visitar el recurso didáctico que se muestra a continuación:
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/TiUOJq_zmfc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
