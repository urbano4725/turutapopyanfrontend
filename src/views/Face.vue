<template>
  <div>
    <Menu/>
     
    <section class="uno">
       <FaceVue/>

    </section>

    <Footer/>>

  </div>

</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'

import FaceVue from '@/components/FaceVue.vue'

import Footer from '@/components/Footer.vue'


export default {
  name: 'Face',
  components: {
    Menu,
    FaceVue,
    Footer
    
  },
}
</script>

<style scoped>
.uno{
  border: 5px solid red;
  border-block-style: link;
}
</style>