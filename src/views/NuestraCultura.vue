<template>
  <div>
    <Menu/>
    <header>
      <h1>Nuestra cultura</h1><hr>
      <img src="http://placeimg.com/640/640/animals" alt="">
    

    <section class="sect"><br>
      <p>
        Popayán es una de las ciudades más antiguas de América, es la capital del departamento del Cauca en Colombia. Fue fundada el 13 de enero de 1537 por Sebastián de Belalcázar, conservando su nombre indígena que se mantiene hasta el día de hoy
      </p>
    </section>

    <section class="sect"><br>
      <h2>Arquictetura</h2>
      <img src="http://placeimg.com/640/640/animals" alt="">
      <p>
        La ciudad conserva una arquitectura histórica y colonial, lo que le ha dado el seudónimo de la ciudad blanca. Esta cuenta con una plaza principal donde se encuentran la mayoría de los edificios coloniales y republicanos de la ciudad, se conoce como el Parque Caldas. Además, allí existen sitios turísticos como la Torre del Reloj y el Puente del Humilladero, desde donde se aprecia una de las mejores vistas de la ciudad. Así como, el Morro de Tulcán, un monumento precolombino y arqueológico y el Rincón Payanés, una réplica en miniatura de la ciudad.
      </p>
      
    </section>

    <section class="sect"><br>
      <h2>Religioso</h2>
      <img src="http://placeimg.com/640/640/animals" alt="">
      <p>
        Los payaneses tienen costumbres religiosas arraigadas, de hecho, gran parte de sus actividades turísticas giran en torno al turismo religioso. Su celebración de Semana Santa ha sido reconocida por la Unesco como parte de los Patrimonios Inmateriales de la Humanidad; las procesiones que se realizan en esta semana se celebran desde la época colonial, lo que las hace una de las tradiciones más antiguas del país. Durante estos días se presentan cinco procesiones dedicadas a la Virgen María, Jesucristo, la Santa Cruz, el Santo Entierro y la Resurrección. Los ciudadanos y los turistas se reúnen para seguir una caminata de casi dos kilómetros con cirios y hábitos, disfrutando del espectáculo que se planea durante todo el año. Además, la ciudad posee múltiples catedrales que atraen a los viajeros como la Iglesia de San Francisco, la Ermita de Popayán, el Santuario de Belén y el Templo de la Encarnación de las Monjas.
      </p>
      
    </section>

    <section class="sect"><br>
      <h2>La gastronomía payanesa</h2>
       <img src="http://placeimg.com/640/640/animals" alt="">
      <p>
        Ligada a su historia, la gastronomía de Popayán tiene una amplia tradición, producto de la fusión de la cultura española, indígena y afrodescendiente. Su crecimiento y evolución se presenta cada año en septiembre en el Congreso Gastronómico de Popayán, donde más de treinta mil personas disfrutan de sus platos típicos.
        Es de tal importancia esta trayectoria, que la ciudad fue reconocida como ciudad creativa de la Gastronomía por la UNESCO. Te recomendamos probar los platos -empanadas, tamales- adobados con el tradicional “pipián”, un guiso local preparado a base de papa, maní, tomate, cebolla y ajo. También, la “carantanta” (pasaboca frita de maíz) y diversas sopas. 
        Allí es posible también vivir la experiencia del maíz donde se aprende cómo se fabrica la deliciosa carantanta, las tortillas y envueltos entre otros.  
        Viajar a Popayán es un recorrido al pasado colonial del sur occidente colombiano, donde la arquitectura, sus emblemáticas celebraciones y tradiciones te deslumbrarán.  
      </p>
    </section>

    <section class="sect"><br>
      <p>
        El Parlamento Andino se une a esta celebración resaltando los diferentes aspectos que hacen atractiva la ciudad de Popayán, desde su arquitectura, costumbres y celebraciones religiosas, hasta su amplia oferta gastronómica. De igual forma, pone en consideración el Marco Normativo de Turismo Comunitario, el Marco Normativo para Impulsar el Turismo Gastronómico Intracomunitario y Extracomunitario, y el Marco Normativo para la Protección y Salvaguardia del Patrimonio Cultural. Los anteriores tienen como objetivo promover las actividades turísticas, especialmente el turismo comunitario y gastronómico en la región Andina, e impulsar la apropiación social del patrimonio cultural para evitar su deterioro.
      </p>
    </section>
    </header>
     <Footer/>
  </div>

</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
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
  margin-top: 80px;
  text-align: center;

}
</style>