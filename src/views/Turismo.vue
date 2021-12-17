<template>
  <div>
      <Menu/>
    <div>
      <h1>Lugares Tuisticos</h1>
      <section>
      <ul><li><img src="http://placeimg.com/640/640/animals" alt="" ><br><router-link to="/Torre">Torre del Reloj</router-link></li></ul>
      <ul><li><img src="http://placeimg.com/640/640/arch" alt=""><br> <router-link to="/IglesiaF">La iglesia de San Francisco</router-link></li></ul>
      <ul><li><img src="http://placeimg.com/640/640/animals" alt=""><br> <router-link to="/PuenteH">Puente del Humilladero.</router-link> </li></ul>
      <ul><li><img src="http://placeimg.com/640/640/arch" alt=""><br> <router-link to="/CapillaB">Capilla de Belén</router-link> </li></ul>
      <ul><li><img src="http://placeimg.com/640/640/people" alt=""><br> <router-link to="/TeatroG">Teatro Guillermo Leon valencia</router-link></li></ul>
      <ul><li><img src="http://placeimg.com/640/640/animals" alt=""> <br> <router-link to="/PanteonP">Panteón de los Próceres</router-link></li></ul>
      <ul><li><img src="http://placeimg.com/640/640/animals" alt="" > <br> <router-link to="/MorroT">Morro de Tulcán.</router-link></li></ul>
      <ul><li><img src="http://placeimg.com/640/640/arch" alt=""> <br> <router-link to="/HaciendaC">Hacienda Calibío.</router-link></li></ul>
      <ul><li><img src="http://placeimg.com/640/640/arch" alt=""> <br> <router-link to="/RinconP">Rincón Payanés.</router-link> </li></ul>
      <ul><li><img src="http://placeimg.com/640/640/animals" alt=""> <br> <router-link to="/CasaV">Casa Valencia</router-link></li></ul>
      <ul><li><img src="http://placeimg.com/640/640/arch" alt=""> <br> <router-link to="/CasaM">Casa Mosquera</router-link></li></ul>
      <ul><li><img src="http://placeimg.com/640/640/people" alt=""> <br> <router-link to="/IglesiaE">Iglesia de la Ermita</router-link></li></ul>
      <ul><li><img src="http://placeimg.com/640/640/animals" alt=""> <br> <router-link to="/HotelM">El Hotel Monasterio.</router-link></li></ul>
       <ul><li><img src="http://placeimg.com/640/640/animals" alt=""> <br> <router-link to="/CasaN">Casa Negret.j</router-link></li></ul>
        <ul><li><img src="http://placeimg.com/640/640/animals" alt=""> <br> <router-link to="/MuseoR">Museo Arquidiocesano de Arte religioso.</router-link> </li></ul>
         <ul><li><img src="http://placeimg.com/640/640/animals" alt=""> <br> <router-link to="/MuseoV">Museo guillermo Leon Valencia.</router-link></li></ul>
          <ul><li><img src="http://placeimg.com/640/640/animals" alt=""> <br> <router-link to="/MuseoN">Museo de Historia Natural.</router-link></li></ul>

      </section>
    </div>
    <Footer/>
  </div>

</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Registrarme',
  components: {
    Menu,
    Footer
  }
}
</script>

<style scoped>

*{
  margin:0;
  padding:0;
  
}
h1{
  text-align: center;
  margin-top: 120px;
}
section{
display: flex;
flex-wrap: wrap;
justify-content: center;
}

ul {
  margin-top: 50px;
}
li{
  text-decoration: none;
  margin: 4px;
  padding: 4px;
  text-align: center;
  list-style: none;
}
img{
  width: 100%;
}
</style>