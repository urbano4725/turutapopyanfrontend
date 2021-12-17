import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/RutasFavoritas',
    name: 'RutasFavoritas',
    component: () => import('../views/RutasFavoritas.vue')
  },
  {
    path: '/IniciarSesion',
    name: 'IniciarSesion',
    component: () => import('../views/IniciarSesion.vue')
  },
  {
    path: '/Nosotros',
    name: 'Nosotros',
    component: () => import('../views/Nosotros.vue')
  },
  {
    path: '/NuestraCultura',
    name: 'NuestraCultura',
    component: () => import('../views/NuestraCultura.vue')
  },
  {
    path: '/Registrarme',
    name: 'Registrarme',
    component: () => import('../views/Registrarme.vue')
  },
  {
    path: '/Turismo',
    name: 'Turismo',
    component: () => import('../views/Turismo.vue')
  },
  {
    path: '/VerRutas',
    name: 'VerRutas',
    component: () => import('../views/VerRutas.vue')
  },
  {
    path: '/AdondeQuieresIr',
    name: 'AdondeQuieresIr',
    component: () => import('../views/AdondeQuieresIr.vue')
  },
  {
    path: '/Administrador',
    name: 'Administrador',
    component: () => import('../views/Administrador.vue')
  },
  {
    path: '/Torre',
    name: 'Torre',
    component: () => import('../views/Turismo-Reloj.vue')
  },
  {
    path: '/IglesiaF',
    name: 'IglesiaF',
    component: () => import('../views/Turismo-IglesiaF.vue')
  },
  {
    path: '/PuenteH',
    name: 'PuenteH',
    component: () => import('../views/Turismo-PuenteH.vue')
  },
  {
    path: '/CapillaB',
    name: 'CapillaB',
    component: () => import('../views/Turismo-CapillaB.vue')
  },
  {
    path: '/TeatroG',
    name: 'TeatroG',
    component: () => import('../views/Turismo-TeatroG.vue')
  },
  {
    path: '/PanteonP',
    name: 'PanteonP',
    component: () => import('../views/Turismo-PanteonP.vue')
  },
  {
    path: '/MorroT',
    name: 'MorroT',
    component: () => import('../views/Turismo-MorroT.vue')
  },
  {
    path: '/HaciendaC',
    name: 'HaciendaC',
    component: () => import('../views/Turismo-HaciendaC.vue')
  },
  {
    path: '/RinconP',
    name: 'RinconP',
    component: () => import('../views/Turismo-RinconP.vue')
  },
  {
    path: '/CasaV',
    name: 'TCasaV',
    component: () => import('../views/Turismo-CasaV.vue')
  },
  {
    path: '/CasaM',
    name: 'CasaM',
    component: () => import('../views/Turismo-CasaM.vue')
  },
  {
    path: '/IglesiaE',
    name: 'IglesiaE',
    component: () => import('../views/Turismo-IglesiaE.vue')
  },
  {
    path: '/HotelM',
    name: 'HotelM',
    component: () => import('../views/Turismo-HotelM.vue')
  },
  {
    path: '/CasaN',
    name: 'CasaN',
    component: () => import('../views/Turismo-CasaN.vue')
  },
  {
    path: '/MuseoR',
    name: 'MuseoR',
    component: () => import('../views/Turismo-MuseoR.vue')
  },
  {
    path: '/MuseoV',
    name: 'MuseoV',
    component: () => import('../views/Turismo-MuseoV.vue')
  },
  {
    path: '/MuseoN',
    name: 'MuseoN',
    component: () => import('../views/Turismo-MuseoN.vue')
  },
  {
    path: '/Face',
    name: 'FaceVue',
    component: () => import('../views/Face.vue')
  }
  
]

const router = new VueRouter({
  routes
})

export default router