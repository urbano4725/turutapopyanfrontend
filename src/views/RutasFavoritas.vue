<template>
  <div>
    <Menu/>
    <body>
    <div class="container">

        <h2>MIS RUTAS FAVORITAS</h2>
        <table class="table">
            <thead>
                <tr>
                    <th>Empresa</th>
                    <th>Numero ruta</th>
                    <th>Tiempo recorrido</th>
                    <th>Distancia</th>
                    <th>Inicio</th>
                    <th>Fin</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td data-label="Empresa">Transtambo</td>
                    <td data-label="Numero ruta">14F</td>
                    <td data-label="Tiempo recorrido">40 min</td>
                    <td data-label="Distancia">24 km</td>
                    <td data-label="Inicio">Paradero 2 la paz</td>
                    <td data-label="Fin">paradero 54 el ortigal</td>
                </tr>
                <tr>
                    <td data-label="Empresa">Sotracauca</td>
                    <td data-label="Numero ruta">2A</td>
                    <td data-label="Tiempo recorrido">30 min</td>
                    <td data-label="Distancia">18.7 km</td>
                    <td data-label="Inicio">Paradero 7 el uvo</td>
                    <td data-label="Fin">Paradero 21 centro</td>
                </tr>
                <tr>
                    <td data-label="Empresa">Translibertad</td>
                    <td data-label="Numero ruta">3F</td>
                    <td data-label="Tiempo recorrido">23 min</td>
                    <td data-label="Distancia">15.8 km</td>
                    <td data-label="Inicio">Paradero 9 bellavista</td>
                    <td data-label="Fin">Paradero 35 comuneros</td>
                </tr>
            </tbody>
        </table>
    </div>
</body>

<Footer/>

    
  </div>


</template>

<script>
// @ is an alias to /src
import Menu from '@/components/Menu.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'RutasFavoritas',
  components: {
    Menu,
    Footer
  }
}
</script>
<style scoped>
body {
    margin-top: 200px;
    font-family: monospace;
}
h2{
  text-align: center;
}

.container {
    width: 100%;
    max-width: 1000px;
    margin: auto;
}

.table {
    width: 100%;
    border: 1px solid #ccc;
    border-collapse: collapse;
    margin: 0;
    padding: 0;
    table-layout: fixed;
}



.table tr {
    background-color: #f8f8f8;
    border: 1px solid #ddd;
}

.table th, .table td {
    font-size: 16px;
    padding: 8px;
    text-align: center;
}

.table thead th{ 
    text-transform: uppercase;
    background: linear-gradient(to top, white, 5%, #0a6672);
}

.table tbody tr:hover {
    background-color: #147880;
}

.table tbody td:hover {
    background-color: rgba(0, 0, 0, 0.3);
}

@media screen and (max-width: 600px) {
    .table {
        border: 0px;
    }
    .table caption {
        font-size: 22px;
    }
    .table thead {
        display: none;
    }
    .table tr {
        margin-bottom: 8px;
        border-bottom: 4px solid #ddd;
        display: block;
    }
    .table th, .table td {
        font-size: 12px;
    }
    .table td {
        display: block;
        border-bottom: 1px solid #ddd;
        text-align: right;
    }
    .table  td:last-child {
        border-bottom: 0px;
    }
    .table td::before {
        content: attr(data-label);
        font-weight: bold;
        text-transform: uppercase;
        float: left;
    }
}

</style>