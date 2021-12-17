<template>
    <div>
        <Menu/>
        <div>
          <header>
            <h1>Casa Valencia</h1>
            <img src="http://placeimg.com/640/640/animals" alt="foto">
          </header>
            <section class="parrafo">
              <p>
                La Casa Museo Guillermo León Valencia, es el resultado del esfuerzo de la Fundación Guillermo León Valencia, el Ministerio de Cultura y el Museo Nacional de Colombia, con el fin de mantener vigente el legado del Ex – Presidente Valencia y de abrir nuevos espacios para la cultura y las artes en la ciudad de Popayán,
                 que beneficien a la comunidad en general y que ofrezca a propios y extraños la posibilidad de conocer de cerca la historia de nuestros dirigentes.
                El Ex Presidente Guillermo León Valencia, nació en Popayán el 27 de Abril de 1909 y murió en Nueva York el 4 de Noviembre de 1971. Hijo del ilustre poeta payanés Guillermo Valencia, fue Presidente de la República de 1962 a 1966. Su legado político se mantiene vigente a través de los ideales del conservatismo nacional.
                El Presidente Misael Pastrana Borrero, decretó en el año de 1972, la destinación de la casa ubicada en la Calle 5 No. 9-82 en Popayán para honrar su memoria.
                Este espacio rinde tributo al expresidente conservador colombiano de origen payanés, hijo del ilustre poeta Guillermo Valencia. En sus cuatro salas de exposición se exhiben elementos pertenecientes a esta importante figura política, como insignias, decoraciones y objetos personales; visitarlo es realizar un recorrido cronológico por los momentos más importantes de su vida
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