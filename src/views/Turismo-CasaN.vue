<template>
    <div>
        <Menu/>
        <div>
          <header>
            <h1>Casa Negret.j</h1>
            <img src="http://placeimg.com/640/640/animals" alt="foto">
          </header>
            <section class="parrafo">
              <p>
                La casa MUSEO NEGRET y MIAMP tiene como sede la antigua casona colonial, ubicada en la Calle 5 No. 10-23, en el sector Histórico de la ciudad de Popayán, en la que el Maestro Edgar Negret Dueñas vivió su infancia y juventud. La constituyen dos colecciones, la primera por obras de distintos periodos,  adicionada con algunos objetos históricos; la segunda la del denominado Museo Iberoamericano de Arte Moderno de Popayán MIAMP, constituida por múltiples piezas importantes del arte colombiano e Iberoamericano comprendida entre 1940 y 1990.
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