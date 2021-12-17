<template>
    <div>
        <Menu/>
        <div>
          <header>
            <h1>Panteón de los Próceres</h1>
            <img src="http://placeimg.com/640/640/animals" alt="foto">
          </header>
            <section class="parrafo">
              <p>
                El Panteón de los Próceres de Popayán es el edificio destinado a "guardar las cenizas de los payaneses que ayudaron a fundar la República: de los que ejercieron la Suprema Magistratura de la Nación; de los que ejecutaron o ejecuten grandes hazañas en servicio de Colombia y alcanzaron o alcancen la suprema eminencia en el país en cualquier campo", según lo determina el Acuerdo Nº 40 del 15 de octubre  de 1940, expedido por el Consejo Directivo de la Universidad del Cauca, propietaria del monumento nacional.
                Fue construido en 1928 para destinarlo como sede de la Asamblea Departamental del Cauca, pero a partir del 27 de diciembre de 1940 se le dio su actual uso.
                La edificación se encuentra ubicada en la carrera 7ª No. 3-55, en pleno centro histórico de Popayán, y es administrada por la División de Cultura y Patrimonio de la Universidad del Cauca.
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