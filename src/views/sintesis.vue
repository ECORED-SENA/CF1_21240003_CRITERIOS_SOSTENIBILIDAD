<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p El desarrollo de este componente de aprendizaje busca fortalecer en los aprendices del curso complementario sobre “Estrategias para la incorporación de criterios de sostenibilidad”, sus habilidades y conocimientos respectos a los conceptos, estrategias, metodologías y normatividad necesaria para el desarrollo de un proyecto sostenible dentro de cualquier tipo de organización. 
    p.mb-3 Se establece de manera clara la ruta que se debe tener en cuenta para desarrollar acciones que respondan a los requerimientos en cuanto a la responsabilidad social y la protección del medio ambiente, los cuales resultan indispensables en el mejoramiento de la calidad de vida del ser humano. 
     p.mb-3 Una breve revisión de los temas vistos, se encuentran en el siguiente esquema:
     
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
