<template>
    <div>
        <Menu/>
        <div>
          <header>
            <h1>Morro de Tulcán</h1>
            <img src="http://placeimg.com/640/640/animals" alt="foto">
          </header>
            <section class="parrafo">
              <p>
                 El Morro del Tulcán o Pirámide de Tucán es el principal sitio arqueológico de Popayán. Este consiste en una pequeña loma no natural en forma de pirámide truncada, en la cual se encontraron elementos de la época precolombina, aproximadamente entre los años 500 – 1600 a. C,
                 período que se conoce como "de las Sociedades Cacicales Tardías". Pubenence, este monumento fue datado aproximadamente entre el año 800 d.C y el Siglo XIII d.C.
                 El morro de Tulcán es el monumento más significativo de los indios pubenenses, los primeros pobladores de Popayán. Muchas historias circulan sobre esta colina que guarda secretos del pasado precolombino
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