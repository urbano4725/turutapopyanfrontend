<template>
    <div>
         <nav class="nav">
      <section>
        <h2>BUSCAR</h2>
        <router-link to="/AdondeQuieresIr"><img src="../assets/buscarr.jpg" alt=""></router-link>
      </section>

      <section>
        <h2>VER RUTAS</h2>
        <router-link to="/VerRutas"><img src="../assets/Ver_rutas.jpg" alt=""></router-link>
      </section>
    </nav>
    </div>
</template>
<script>
export default {
  name: 'VerBuscar',
}
</script>
<style scoped>
.padre{
  
  justify-content: center;
  margin-top: 60px;
  width: 100%;
}
.nav{
  display: flex;
  justify-content: space-evenly;
  text-align: center;
}




</style>