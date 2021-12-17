<template>
    <div>
        <Menu/>
        <div>
          <header>
            <h1>Museo de Historia Natural</h1>
            <img src="http://placeimg.com/640/640/animals" alt="foto">
          </header>
            <section class="parrafo">
              <p>
                El Museo de Historia Natural de la Universidad del Cauca (MHNUC), fundado en el año de 1.936 por el biólogo Federico Carlos Lehmann Valencia, es un importante centro de investigación, exhibición y proyección a la comunidad universitaria y ciudadanía en general, por cuanto estimula el conocimiento de las Ciencias Naturales tanto a estudiantes de escuelas, colegios y universidades como a investigadores científicos y otros profesionales de Popayán, el Cauca, Colombia y del extranjero.
              A través de sus Colecciones de Exhibición y Referencia, podemos vivenciar y conocer la gran diversidad biológica y cultural que existe en nuestro país y en especial en el departamento del Cauca. Así mismo, el MHNUC, realiza actividades de apoyo e investigación a los programas de Biología, Geología Antropología y Arqueología, por cuanto sus Colecciones de Referencia en las áreas de Geología, Botánica (herbario CAUP), Zoología, Herpetología, Entomología, Ornitología, son de gran interés y soporte para la formación académica de sus estudiantes.
              </p>
              <img src="" alt="ruta">
            </section>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import Footer from '../components/Footer.vue'
export default {
    name: 'Turismo',
  components: {
    Menu,
    Footer
  }
}
</script>

<style scoped>

header{
    text-align: center;
    width: 85%;
    margin: 0 auto;
}
img{
  margin-top: 50px;
  width: 60%;
}
h1{
  margin-top: 200px;
  text-align: center;

}

</style>