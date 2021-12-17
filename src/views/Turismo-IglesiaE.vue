<template>
    <div>
        <Menu/>
        <div>
          <header>
            <h1>Iglesia de la Ermita</h1>
            <img src="http://placeimg.com/640/640/animals" alt="foto">
          </header>
            <section class="parrafo">
              <p>
                La Ermita de Jesús Nazareno, Santa Barbara y Santa Catalina de Alejandría o simplemente la Ermita de Jesús Nazareno es una iglesia católica tipo ermita ubicada en el centro histórico de Popayán. Considerada como el templo católico más antiguo que se encuentre en pie en esta ciudad. Desde el siglo XVI este templo fue destinado para impartir la doctrina católica a los indígenas, razón por la cual ha sido entre las iglesias coloniales, la más pobre.
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