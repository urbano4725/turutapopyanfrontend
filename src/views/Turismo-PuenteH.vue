<template>
    <div>
        <Menu/>
        <div>
          <header>
            <h1>Puente del Humilladero</h1>
            <img src="http://placeimg.com/640/640/animals" alt="foto">
          </header>
            <section class="parrafo">
              <p>
                En la ciudad de Popayán es posible ver diferentes lugares de referencia y uno de los importantes es el famoso Puente del Humilladero, que es uno de los que tiene mayor historia. Se encuentra muy cerca de la iglesia de San Francisco en esta ciudad colombiana.
                Se trata de un puente con historia que tiene 12 arcos y que permite cruzar el río Molino que se encuentra en la zona. El origen del nombre se debe a que la zona se encontraba con una inclinación importante, lo que hacía obligatorio bajar la cabeza, naciendo el nombre del puente.
                El encargado de realizar esta obra arquitectónica fue el arquitecto fray Serafín Berbetti de la Orden Franciscana, con la ayuda del ingeniero E. Sawaski, con el diseño que se puede ver en la actualidad.
                Se inauguró en julio de 1873 y a partir de entonces se ha convertido en uno de los puentes más populares de la zona, un lugar al que suelen acudir los visitantes. Es un puente famoso también por los paisajes que ofrece en los alrededores y se ha convertido en un punto turístico de relevancia,
                una zona en la que muchos visitantes se suelen fotografiar y dar un paseo por los alrededores.
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