<template>
    <div>
        <Menu/>
        <div>
          <header>
            <h1>Museo Arquidiocesano de Arte religioso</h1>
            <img src="http://placeimg.com/640/640/animals" alt="foto">
          </header>
            <section class="parrafo">
              <p>
              El Museo Arquidiocesano de Arte Religioso fue creado y reglamentado por los decretos arzobispales 386 del 10 de octubre de 1972 y 026 del 12 de julio de 1977, con el fin de proteger, conservar, catalogar restaurar, exhibir las numerosas obras de propiedad de la Arquidiócesis de Popayán, de las parroquias, iglesias, conventos y en lo posible de particulares.
              Fijó su sede en una antigua casa del siglo XVIII de estilo neoclásico, construida con planos del religioso y arquitecto payanés Marcelino Pérez de Arroyo en el año de 1783, fue propiedad de la familia Arboleda. Se inauguró el 21 de septiembre de 1979.
              La exhibición del legado abarca diferentes épocas de los siglos XVI al XX, con una muestra representativa de óleos tallas, orfebrería, mobiliarios, ornamentos etc. las piezas simbolizan personajes de iconografía cristiana algunas traídas de Europa y de la Provincia de Quito con un sincretismo cultural que es considerado por los estudiosos del tema, como uno de los más bellos e importantes en su género en el país, por su alta calidad artística y contenido.
              Merece destacarse los más grandes y hermosos tesoros artísticos en orfebrería sacra, pertenecientes a la Arquidiócesis. Se trata de la colección de catorce custodias cuyo esplendor se aprecia no sólo en el preciosismo de su elaboración sino en la riqueza de los materiales
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