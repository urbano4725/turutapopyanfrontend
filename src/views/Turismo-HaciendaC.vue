<template>
    <div>
        <Menu/>
        <div>
          <header>
            <h1>Hacienda Calibío</h1>
            <img src="http://placeimg.com/640/640/animals" alt="foto">
          </header>
            <section class="parrafo">
              <p>
                una de las haciendas más bellas de Sudamérica. Esta histórica hacienda se halla en las inmediaciones de Popayán y refleja la suntuosidad de la estructura colonial y el poder socio económico que disfrutaba la clase hidalga feudo burguesa que, en las postrimerías de la dominación española,
                 comenzaba a ganar influencia y autonomía. El vasto territorio que formaba su jurisdicción, inicialmente de propiedad del Adelantado don Sebastían de Belalcázar, había venido a la familia Mosquera a través de don Cristóbal XI, a partir de 1625. Terminada en 1780 la construcción del puente sobre el Río Cauca (cuya falta impedía la comunicación normal de esta región con Popayán), el vástago de la línea Mosquera de don José Patricio,
                  don José Marcelino (hermano del Dr. Joaquín (el regente) y de don José María, en un alarde de energía y riqueza inició las obras de la casa, las cuales fueron terminadas en 1801. Son 10.000 metros cuadrados de área construídos en dos plantas, la alta muy suntuosa para residencia de los señores, la baja espaciosa y de acabado rústico para uso de los esclavos,
                 la servidumbre y depósitos o «trojas» para cereales y otros productos venidos de las demás haciendas de lo caliente, entre los cuales se contaban los de exportación, como la quina. En el costado Norte se levanta una capilla,
                 con su espadaña señalando la llanura que sirve de marco al más espectacular paisaje formado por los contrafuertes de la cordillera Central y el volcán Puracé en donde a medio día del 15 de Enero de 1814 se libró la batalla de Calibío,
                  entre los generales Nariño y Sámano. En 1805, a la muerte de don Marcelino Mosquera, el inmueble pasó a manos de su hijo varón, el Dr. José Rafael Mosquera y Hurtado, padre de doña Sofía, casada en 1839 con el poeta soldado Julio Arboleda. Se ha afirmado que en ella Arboleda vendió en 1851 sus esclavos al Perú, episodio que se rodea de anécdotas desapacibles. La verdad es que por este tiempo solo tenía en Calibío los esclavos personales y los de servicios esenciales de la hacienda.
                   La venta de 53 esclavos de sus propiedades de Japio y la Bolsa la había efectuado a raíz de la Revolución de los Supremos, tomados de un grupo que, unido a las fuerzas del general Obando en 1840, había incendiado la casa, incluyendo los archivos y la biblioteca con los originales de su poema Gonzalo de Hoyón. 
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