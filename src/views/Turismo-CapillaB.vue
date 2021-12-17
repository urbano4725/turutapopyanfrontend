<template>
    <div>
        <Menu/>
        <div>
          <header>
            <h1>Capilla de Belen</h1>
            <img src="http://placeimg.com/640/640/animals" alt="foto">
          </header>
            <section class="parrafo">
              <p>
                Púlpito de la Iglesia de San Francisco en Popayán. Talla en madera, del siglo XVIII. Está compuesto por un cajón de traza octogonal, en cuyas hornacinas se ubicaban imágenes de santos de la comunidad franciscana, algunas de las cuales fueron robadas durante el terremoto de 1983.
                La iglesia de San Francisco fue construida en el siglo XVI, no obstante, fue destruida por el terremoto de 1736. Entre 1765 y 1785 se construyó la segunda iglesia,
                diseñada por el arquitecto español fray Antonio García. Esta edificación se vio gravemente afectada por el terremoto de 1983, así que años después se inició el proceso de restauración. Este templo fue declarado Bien de interés cultural, mediante Decreto 2248 del 11 de diciembre de 1996.
              </p>
              <img src="" alt="capilla de belen">
            </section>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'
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