
import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue"


const routes = [
  { path: '/', name: "Home", component: Home },
  {
    path: '/:pathMatch(.*)*',
    name: "notFound",
    component: () => import('@/views/NotFound.vue')
  },
  {
    path: '/destination/:id/:slug',
    name: "destination.show",
    component: () => import(`@/views/DestinationShow.vue`),
    props: (route) => ({
      ...route.params,
      id: parseInt(route.params.id)
    }),
    children: [
      {
        path: `:experienceSlug`,
        name: 'Experience.show',
        component: () => import(`@/views/ExperienceShow.vue`),
        props: route => ({
          ...route.params,
          id: parseInt(route.params.id),
          meta: { disableTransition: true }
        })
      }

    ]
  }
]


export const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "activeLink"
})
