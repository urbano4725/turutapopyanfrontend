<template>
    <div>
        <Menu/>
        <div>
          <header>
            <h1>Teatro Guillermo Leon Valencia</h1>
            <img src="http://placeimg.com/640/640/animals" alt="foto">
            <section><br>
              <p>
                En el año de 1915 se dio comienzo nuevamente a la obra de construcción con planos dibujados y la dirección del Ingeniero José Maria Obando Rebolledo, intervinieron en la construcción de la estructura de cubierta y refuerce de arcos superiores, el Concejal Julio Manuel Ayerbe Segura, con el apoyo de los Alcades Don Julio Garrido y Don Ramón Rada.
                Don Luis Paz, Tesorero Municipal entre 1918 y 1926 manifestó: “Me consta personal y directamente que el Municipio de Popayán construyó a sus expensas el edificio denominado Teatro Municipal”. Al dejar la dirección de la obra el Ingeniero Obando, se designó al Ingeniero Isaac Sarria Rojas quien aseguró refuerzos estructurales.
                El Teatro se inauguró el 22 de Diciembre de 1927 con la presentación de El Trovador de Verdi de la compañía operática de Adolfo y teniendo como tenor a Hipólito Lázaro, ¡El Gran Lázaro!.
                Para entonces y hasta hoy el recinto de Teatro y la Boca del Escenario fueron enlucidos con latón repujado traído de Bélgica, gracias a un empréstito acordado por el Presidente de la Junta de Empresas Municipales, Don José Maria Varona Otero, así mismo el decorado de fachadas presentaba un aspecto novedoso para el Popayán de la época. El llamado Estilo Republicano.
              </p>
              <img src="" alt="ruta">
            </section>
            </header>
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