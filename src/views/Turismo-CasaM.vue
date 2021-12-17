<template>
    <div>
        <Menu/>
        <div>
          <header>
            <h1>Casa Mosquera</h1>
            <img src="http://placeimg.com/640/640/animals" alt="foto">
          </header>
            <section class="parrafo">
              <p>
                La Casa Museo Mosquera, o Casa Mosquera, se haya ubicada en la esquina de la calle 3ª con carrera 5ª. Allí funciona el museo Mosquera, la Vicerrectorìa de Cultura y Bienestar y la División de Patrimonio Cultural de la Universidad del Cauca. También se encuentra la Sala Carlos Albán, que cuenta con recursos audiovisuales para la presentación de conferencias y otros eventos académicos, y la biblioteca donada por Tomás Cipriano de Mosquera Wallis.
                Esta casa de una planta, que originalmente se extendía hasta la edificación contigua y por el norte hasta el hotel El Herrero, fue construida en 1788 por don José María Mosquera y Figueroa. Posteriormente la casa fue dividida en lo que hoy se conoce como el Archivo Histórico y la Casa Mosquera, esta última ocupada por General Tomás Cipriano.
                En 1951 la Universidad adquirió la casona junto con el archivo, la biblioteca y los objetos históricos y artísticos del Gran General, a sus herederos. Por ello se dedicaron dos grandes estancias a la exposición de objetos emblemáticos, tales como la espada que el General recibió del Congreso de la Nueva Granada.
                Entre 1935 y 1983 funcionó en estas instalaciones el Museo Arqueológico, el cual se trasladó posteriormente al edificio donde hoy funciona el Museo de Historia Natural (antiguas residencias universitarias Tuto González).
                Esta edificación fue sometida a una serie de modificaciones anteriores al terremoto de 1983, motivo por el cual no sufrió daños tan grandes como los de otras casas vecinas.
                La Casa Mosquera consta de dos patios: en el principal, donde se ubican las salas de exposición del Museo, tiene en el centro una fuente en piedra de cantera. Éste se comunica con el patio trasero a través de un zaguán ubicado en la misma dirección de la entrada principal. Este pasadizo estaba originalmente sobre el corredor derecho.
                Debido a la fuerte pendiente sobre la que se haya construida, el traspatio consta de una escalera que desemboca en un patio semi-sótano. En la parte superior derecha se encuentra la sala Carlos Albán y la biblioteca ya mencionada. Al pasar desde el primer patio se haya un tinajero cerrado por un armazón de madera. Este tinajero desemboca en un chorro, ubicado en la parte baja del traspatio.
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