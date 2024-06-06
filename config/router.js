//import Math from "../components/math-trainer/math.js";
import Math from "/components/math-trainer/math.js";
import ImprovementAreas from "../components/improvement-areas/improvement-areas.js";
const About = { template: '<div class="about">About</div>' };

const routes = [
  { path: "/", component: Math },
  { path: "/improvement", component: ImprovementAreas },
  { path: "/about", component: About },
];
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

export default router;
