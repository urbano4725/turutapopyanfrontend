<template>
    <div >
        <div class="content-all">
            <div class="content-carrusel">
                <figure> <img src="../assets/movilidad10.jpg" > </figure>
                <figure> <img src="../assets/movilidad11.jpg" > </figure>
                <figure> <img src="../assets/movilidad12.jpg" > </figure>
                <figure> <img src="../assets/movilidad13.jpg" > </figure>
                <figure> <img src="../assets/movilidad14.jpg" > </figure>
                <figure> <img src="../assets/movilidad15.jpg" > </figure>
                <figure> <img src="../assets/movilidad16.jpg" > </figure>
                <figure><img src="../assets/movilidad17.jpg" > </figure>
                <figure> <img src="../assets/movilidad18.jpg" > </figure>
                <figure> <img src="../assets/movilidad19.jpg" > </figure>
                
            </div>
        </div>
    </div>
</template>
<script>
/* import { defineComponent } from '@vue/composition-api' */

export default ({
    name: 'Carrusel3D',
})
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box; /*no se amplie mas del padding */
    
}
@media (min-width: 1300px) and (max-width: 2500px){ 
.content-all{
    width: 265px;
    margin:0 auto;
    perspective: 900px;
    position: relative;
    margin-top: 10%;
    
}
.content-carrusel{
    
    width: 100%;
    position: absolute;
    animation: rotar 95s infinite linear; 
    transform-style: preserve-3d;
    
}
.content-carrusel:hover{
    animation-play-state: paused;  /*cuando se pase el mouse se pause*/
    cursor: pointer;  /*coloque una manito*/
}

.content-carrusel figure{
    
    width: 130%;
    height: 120px;
    /* height: 200px; */
    /* height: 10.5rem; */
    /* height: 10.5rem; */
    overflow:visible;
    position: absolute;
    box-shadow: 0px 0px 20px 0px black; /* sombra al carrusel de 20px */
    transition: all 300ms;
}
.content-carrusel figure:hover{
    box-shadow: 0px 0px 0px 0px black; /* se quita la sombra al pasar el mousecarrusel de 20px */
    transition: all 300ms;
}

.content-carrusel img{
    display: flex;
    width: 100%;
    transition: all 300ms;
}

.content-carrusel img:hover{
    transform: scale(1.2);
    transition: all 300ms;
}


.content-carrusel figure:nth-child(1){transform: rotateY(0deg)    translateZ(480px);}
.content-carrusel figure:nth-child(2){transform: rotateY(40deg)   translateZ(480px);}
.content-carrusel figure:nth-child(3){transform: rotateY(80deg)   translateZ(480px);}
.content-carrusel figure:nth-child(4){transform: rotateY(120deg)  translateZ(480px);}
.content-carrusel figure:nth-child(5){transform: rotateY(160deg)  translateZ(480px);}
.content-carrusel figure:nth-child(6){transform: rotateY(200deg)  translateZ(480px);}
.content-carrusel figure:nth-child(7){transform: rotateY(240deg)  translateZ(480px);}
.content-carrusel figure:nth-child(8){transform: rotateY(280deg)  translateZ(480px);}
.content-carrusel figure:nth-child(9){transform: rotateY(320deg)  translateZ(480px);}
.content-carrusel figure:nth-child(10){transform: rotateY(360deg)  translateZ(480px);}


@keyframes rotar {  /* permite controlar los pasos intermedios en una secuencia de animación */
    from {
        transform: rotateY(0deg);
    }to{
        transform: rotateY(360deg);
    }
}
 }
/* meddia queries para media pantalla  */
@media (min-width: 1100px) and (max-width: 1299px){ 
.content-all{
    width: 210px;
    margin:0 auto;
    perspective: 900px;
    position: relative;
    margin-top: 10%;
    
}
.content-carrusel{
    
    width: 100%;
    position: absolute;
    animation: rotar 95s infinite linear; 
    transform-style: preserve-3d;
    
}
.content-carrusel:hover{
    animation-play-state: paused;  /*cuando se pase el mouse se pause*/
    cursor: pointer;  /*coloque una manito*/
}

.content-carrusel figure{
    
    width: 140%;
    height: 120px;
    /* height: 200px; */
    /* height: 10.5rem; */
    /* height: 10.5rem; */
    overflow:visible;
    position: absolute;
    box-shadow: 0px 0px 20px 0px black; /* sombra al carrusel de 20px */
    transition: all 300ms;
}
.content-carrusel figure:hover{
    box-shadow: 0px 0px 0px 0px black; /* se quita la sombra al pasar el mousecarrusel de 20px */
    transition: all 300ms;
}

.content-carrusel img{
    display: flex;
    width: 100%;
    transition: all 300ms;
}

.content-carrusel img:hover{
    transform: scale(1.1);
    transition: all 300ms;
}


.content-carrusel figure:nth-child(1){transform: rotateY(0deg)    translateZ(410px);}
.content-carrusel figure:nth-child(2){transform: rotateY(40deg)   translateZ(410px);}
.content-carrusel figure:nth-child(3){transform: rotateY(80deg)   translateZ(410px);}
.content-carrusel figure:nth-child(4){transform: rotateY(120deg)  translateZ(410px);}
.content-carrusel figure:nth-child(5){transform: rotateY(160deg)  translateZ(410px);}
.content-carrusel figure:nth-child(6){transform: rotateY(200deg)  translateZ(410px);}
.content-carrusel figure:nth-child(7){transform: rotateY(240deg)  translateZ(410px);}
.content-carrusel figure:nth-child(8){transform: rotateY(280deg)  translateZ(410px);}
.content-carrusel figure:nth-child(9){transform: rotateY(320deg)  translateZ(410px);}
.content-carrusel figure:nth-child(10){transform: rotateY(360deg)  translateZ(410px);}


@keyframes rotar {  /* permite controlar los pasos intermedios en una secuencia de animación */
    from {
        transform: rotateY(0deg);
    }to{
        transform: rotateY(360deg);
    }
}
 }

/* meddia queries para pequeña pantalla  */
@media (min-width: 950px) and (max-width: 1099px){ 
.content-all{
    width: 185px;
    margin:0 auto;
    perspective: 900px;
    position: relative;
    margin-top: 10%;
    
}
.content-carrusel{
    
    width: 100%;
    position: absolute;
    animation: rotar 95s infinite linear; 
    transform-style: preserve-3d;
    
}
.content-carrusel:hover{
    animation-play-state: paused;  /*cuando se pase el mouse se pause*/
    cursor: pointer;  /*coloque una manito*/
}

.content-carrusel figure{
    
    width: 140%;
    height: 120px;
    /* height: 200px; */
    /* height: 10.5rem; */
    /* height: 10.5rem; */
    overflow:visible;
    position: absolute;
    box-shadow: 0px 0px 20px 0px black; /* sombra al carrusel de 20px */
    transition: all 300ms;
}
.content-carrusel figure:hover{
    box-shadow: 0px 0px 0px 0px black; /* se quita la sombra al pasar el mousecarrusel de 20px */
    transition: all 300ms;
}

.content-carrusel img{
    display: flex;
    width: 100%;
    transition: all 300ms;
}

.content-carrusel img:hover{
    transform: scale(1.1);
    transition: all 300ms;
}


.content-carrusel figure:nth-child(1){transform: rotateY(0deg)    translateZ(360px);}
.content-carrusel figure:nth-child(2){transform: rotateY(40deg)   translateZ(360px);}
.content-carrusel figure:nth-child(3){transform: rotateY(80deg)   translateZ(360px);}
.content-carrusel figure:nth-child(4){transform: rotateY(120deg)  translateZ(360px);}
.content-carrusel figure:nth-child(5){transform: rotateY(160deg)  translateZ(360px);}
.content-carrusel figure:nth-child(6){transform: rotateY(200deg)  translateZ(360px);}
.content-carrusel figure:nth-child(7){transform: rotateY(240deg)  translateZ(360px);}
.content-carrusel figure:nth-child(8){transform: rotateY(280deg)  translateZ(360px);}
.content-carrusel figure:nth-child(9){transform: rotateY(320deg)  translateZ(360px);}
.content-carrusel figure:nth-child(10){transform: rotateY(360deg)  translateZ(360px);}


@keyframes rotar {  /* permite controlar los pasos intermedios en una secuencia de animación */
    from {
        transform: rotateY(0deg);
    }to{
        transform: rotateY(360deg);
    }
 }
 }

 /* meddia queries para mas pequeña pantalla  */
@media (min-width: 750px) and (max-width: 949px){ 
.content-all{
    width: 150px;
    margin:0 auto;
    perspective: 900px;
    position: relative;
    margin-top: 10%;
    
}
.content-carrusel{
    
    width: 100%;
    position: absolute;
    animation: rotar 95s infinite linear; 
    transform-style: preserve-3d;
    
}
.content-carrusel:hover{
    animation-play-state: paused;  /*cuando se pase el mouse se pause*/
    cursor: pointer;  /*coloque una manito*/
}

.content-carrusel figure{
    
    width: 140%;
    height: 100px;
    /* height: 200px; */
    /* height: 10.5rem; */
    /* height: 10.5rem; */
    overflow:visible;
    position: absolute;
    box-shadow: 0px 0px 20px 0px black; /* sombra al carrusel de 20px */
    transition: all 300ms;
}
.content-carrusel figure:hover{
    box-shadow: 0px 0px 0px 0px black; /* se quita la sombra al pasar el mousecarrusel de 20px */
    transition: all 300ms;
}

.content-carrusel img{
    display: flex;
    width: 100%;
    transition: all 300ms;
}

.content-carrusel img:hover{
    transform: scale(1.1);
    transition: all 300ms;
}


.content-carrusel figure:nth-child(1){transform: rotateY(0deg)    translateZ(290px);}
.content-carrusel figure:nth-child(2){transform: rotateY(40deg)   translateZ(290px);}
.content-carrusel figure:nth-child(3){transform: rotateY(80deg)   translateZ(290px);}
.content-carrusel figure:nth-child(4){transform: rotateY(120deg)  translateZ(290px);}
.content-carrusel figure:nth-child(5){transform: rotateY(160deg)  translateZ(290px);}
.content-carrusel figure:nth-child(6){transform: rotateY(200deg)  translateZ(290px);}
.content-carrusel figure:nth-child(7){transform: rotateY(240deg)  translateZ(290px);}
.content-carrusel figure:nth-child(8){transform: rotateY(280deg)  translateZ(290px);}
.content-carrusel figure:nth-child(9){transform: rotateY(320deg)  translateZ(290px);}
.content-carrusel figure:nth-child(10){transform: rotateY(360deg)  translateZ(290px);}


@keyframes rotar {  /* permite controlar los pasos intermedios en una secuencia de animación */
    from {
        transform: rotateY(0deg);
    }to{
        transform: rotateY(360deg);
    }
 }
 }

 /* meddia queries para mas pequeña pantalla  */
@media  (max-width: 749px){ 
.content-all{
    width: 100px;
    margin:0 auto;
    perspective: 900px;
    position: relative;
    margin-top: 20%;
}
.content-carrusel{
    
    width: 90%;
    position: absolute;
    animation: rotar 95s infinite linear; 
    transform-style: preserve-3d;
    
}
.content-carrusel:hover{
    animation-play-state: paused;  /*cuando se pase el mouse se pause*/
    cursor: pointer;  /*coloque una manito*/
}

.content-carrusel figure{
    
    width: 140%;
    height: 60px;
    /* height: 200px; */
    /* height: 10.5rem; */
    /* height: 10.5rem; */
    overflow:visible;
    position: absolute;
    box-shadow: 0px 0px 20px 0px black; /* sombra al carrusel de 20px */
    transition: all 300ms;
}
.content-carrusel figure:hover{
    box-shadow: 0px 0px 0px 0px black; /* se quita la sombra al pasar el mousecarrusel de 20px */
    transition: all 300ms;
}

.content-carrusel img{
    display: flex;
    width: 100%;
    transition: all 300ms;
}

.content-carrusel img:hover{
    transform: scale(1.1);
    transition: all 300ms;
}


.content-carrusel figure:nth-child(1){transform: rotateY(0deg)    translateZ(180px);}
.content-carrusel figure:nth-child(2){transform: rotateY(40deg)   translateZ(180px);}
.content-carrusel figure:nth-child(3){transform: rotateY(80deg)   translateZ(180px);}
.content-carrusel figure:nth-child(4){transform: rotateY(120deg)  translateZ(180px);}
.content-carrusel figure:nth-child(5){transform: rotateY(160deg)  translateZ(180px);}
.content-carrusel figure:nth-child(6){transform: rotateY(200deg)  translateZ(180px);}
.content-carrusel figure:nth-child(7){transform: rotateY(240deg)  translateZ(180px);}
.content-carrusel figure:nth-child(8){transform: rotateY(280deg)  translateZ(180px);}
.content-carrusel figure:nth-child(9){transform: rotateY(320deg)  translateZ(180px);}
.content-carrusel figure:nth-child(10){transform: rotateY(360deg)  translateZ(180px);}


@keyframes rotar {  /* permite controlar los pasos intermedios en una secuencia de animación */
    from {
        transform: rotateY(0deg);
    }to{
        transform: rotateY(360deg);
    }
 }
 }

</style>

