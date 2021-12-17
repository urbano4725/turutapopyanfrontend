<template>
    <div>
        <Menu/>
        <div>
          <header>
            <h1>Museo guillermo Leon Valencia</h1>
            <img src="http://placeimg.com/640/640/animals" alt="foto">
          </header>
            <section class="parrafo">
              <p>
                La casa fue construida en el siglo XVIII, por el Arquitecto Payanés Marcelino Pérez de Arroyo, evocando el estilo Neoclásico, para el Regidor de Cabildo, Basilio de Angulo. En 1906, fue adquirida por el señor Ignacio Muñoz Córdoba, quien la cedió a su hija Josefina, esposa del poeta Guillermo Valencia. En 1943, a raíz de la muerte del Maestro Valencia, fue adquirida por la Nación, para honrar su memoria, por medio de la Ley 80 de 1943.           Esta casa, permite al público un tránsito por el legado del notable poeta, escritor y político. Se ubica en un predio esquinero que fue ampliado hasta las inmediaciones del Puente del Humilladero con el fin de realizar una plaza exterior, lugar donde actualmente reposan los restos del maestro Valencia. Sus habitaciones corresponden al despacho del poeta, en él se encuentran sus diplomas, condecoraciones, recuerdos de sus amigos y sus libros; al cuarto de caza, con armas de colección y a la alcoba de matrimonio.
                También se pueden visitar la antesala, el salón de sus antepasados, la sala con fotografías de su esposa, hijos y nietos, la sala de honor de Guillermo Valencia, la sala de decretos y resoluciones, el salón comedor y el oratorio. En la primera planta cuenta con un salón de actos, con capacidad para 100 personas.
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