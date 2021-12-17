<template>
  <div>
    <Menu/>
    <body>
      <section>
      <h2>Origen y Destino</h2><br>
     <div class="container1">
    <b-input-group size="sm" class="mb-2">
      <b-input-group-prepend is-text>
        <b-icon icon="search"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="search" placeholder="Escribe tu punto de partida"></b-form-input>
    </b-input-group>

    <b-input-group size="sm" class="mb-2">
      <b-input-group-prepend is-text>
        <b-icon icon="search"></b-icon>
      </b-input-group-prepend>
      <b-form-input type="search" placeholder="Escribe tu punto de llegada"></b-form-input>
    </b-input-group>
    <input class="buton" type="submit" value="Buscar">
  </div>
  </section>
   
  
    <iframe class="mapa" src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d31888.997968363292!2d-76.60949871761542!3d2.46557376101162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d2.4900555!2d-76.5777257!4m5!1s0x8e30030554ee777d%3A0xd3194ddf180ab808!2sCentro%2C%20Popay%C3%A1n%2C%20Cauca!3m2!1d2.4405232999999997!2d-76.6080554!5e0!3m2!1ses!2sco!4v1637899028521!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
  
    </body>
    <br>

    <Footer/>
  </div>
  

</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'NuestraCultura',
  components: {
    Menu,Footer
  }
}
</script>
<style scoped>
body {
    margin-top: 130px;
    font-family: monospace;
}
h2 {
    margin: 0 0 20px;
    font-size: 27px;
    color: #000000;
    font-weight: bold;
    line-height: 32px;
    text-align: center;
}


.container1 {
    width: 40%;
    max-width: 1200px;
    margin: auto;  
}
.mapa{
  width: 100%;
}
.buton{
  width: 100%;
  background: #0a6672;
  border: none;
  padding: 12px;
  color: white;
  margin: 16px 0;
  font-size: 16px;
}
</style>