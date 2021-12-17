<template>
    <div>
        <Menu/>
        <div>
          <header>
            <h1>Rincón Payanés</h1>
            <img src="http://placeimg.com/640/640/animals" alt="foto">
          </header>
            <section class="parrafo">
              <p>
                Conocido también como el Rincón Payanés, está ubicado contiguo al Morro de Belalcázar en el sector de La Pamba, donde funcionó la piscina municipal en el siglo pasado. En su entorno se construyeron réplicas del Puente del Humilladero, La Ermita, La Torre del Reloj, las pilas y faroles que simbolizan la arquitectura de la Ciudad Blanca.
                 Al interior de la réplica de la Capilla La Ermita, está la tumba donde según la leyenda, reposan los restos del Quijote. La réplica de la Torre del Reloj tiene una altura de 5.40 metros. Diseñaron 12 locales usados para comercializar artesanías, libros, pinturas, pequeñas esculturas talladas en maderas y lo mejor de gastronomía payanesa.
                 Los 390 metros cuadrados de la pequeñas callejuelas fueron adoquinados y en el centro se construyó una pila en piedra de cantera.
                 que cuenta con copias pequeñas de los monumentos más representativos de la capital del Cauca, entre los que figuran el Puente del Humilladero, la Torre del Reloj, la Capilla de La Ermita y el Puente Chiquito. Allí se prueban platos típicos de la región y se pueden comprar artesanías y libros.
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