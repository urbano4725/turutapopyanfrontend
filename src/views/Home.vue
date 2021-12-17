<template>
  <div>
    <Menu/>
    <Carrusel3D/>
    <!-- <VerBuscar/> -->
    <Footer/>
   

  </div>

</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
import Carrusel3D from '@/components/Carrusel3D.vue'
import Footer from '@/components/Footer.vue'
// import VerBuscar from '@/components/VerBuscar.vue'


export default {
  name: 'Home',
  components: {
    Menu,
    Carrusel3D,
    Footer
    // VerBuscar

  }
}
</script>
