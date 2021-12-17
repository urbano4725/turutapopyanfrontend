<template>
    <div>
        <Menu/>
        <div>
          <header>
            <h1>El Hotel Monasterio</h1>
            <img src="http://placeimg.com/640/640/animals" alt="foto">
          </header>
            <section class="parrafo">
              <p>
                Nuestro Hotel en Popayan ofrece una estratégica ubicación en medio del Centro Histórico y a sólo 5 minutos del aeropuerto. Es catalogado como el único Hotel que combina el encanto de la época colonial con sus 47 habitaciones y 6 salones para eventos con Wi-Fi y capacidad hasta de 1000 personas con los más modernos servicios hoteleros.
                Sus encantadores espacios como las galerías españolas, la piscina al aire libre y la fuente ubicada en el patio central son parte del patrimonio arquitectónico que caracteriza la Ciudad blanca de Colombia, lo cual garantiza disfrutar del encanto de la época y del mejor servicio de un hotel en Popayan
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