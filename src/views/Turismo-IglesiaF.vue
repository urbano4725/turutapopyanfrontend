<template>
    <div>
        <Menu/>
        <div>
            <h1>TORRE DEL RELOJ</h1>
            <img src="http://placeimg.com/640/640/animals" alt="foto">
            <section class="parrafo">
              <p>Uno de los símbolos de nuestra ciudad, se le denomina la "Nariz de Popayán",
                se halla situada en la calle más céntrica de la Ciudad, quedando al frente la plaza de Caldas, principal plaza de Popayán; La torre fue construida entre 1673 y 1682 bajo dirección del Obispo Cristóbal Bernaldo de Quiroz. 
                El terremoto de 1736 no la afectó y al año siguiente, el padre Bueno donó el reloj de un solo puntero que le da el nombre.
                El terremoto de 1983 le causó averías, las cuales fueron hábilmente reparadas sin mover uno solo de los noventa mil ladrillos que forman su estructura.</p>
              <img src="" alt="fototorredelreloj">
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