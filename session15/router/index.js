import { createWebHistory, createRouter } from 'vue-router'

// import HomeView from '../src/views/HomeView.vue'
// import AboutView from '../src/views/AboutView.vue'
// import ContactView from '../src/views/ContactView.vue'
// import UserDetail from '../src/views/UserDetail.vue'
// import Product from '../src/views/Product.vue'
// import ProductReview from '../src/views/ProductReview.vue'
import Bai1 from '../src/views/Bai1.vue'
import Bai2 from '../src/views/Bai2.vue'
import Bai3 from '../src/views/Bai3.vue'
import Bai4 from '../src/views/Bai4.vue'
import Notfound from '../src/views/Not-found.vue'
import Home from '../src/views/Home.vue'
import Contact from '../src/views/Contact.vue'
import Detail from '../src/views/Detail.vue'
import Product from '../src/views/Product.vue'
import Account from '../src/views/Account.vue'
import Dashboard from '../src/views/Dashboard.vue'
import Navbar from '../src/views/Navbar.vue'
import ListUser from '../src/views/ListUser.vue'
import UserDetail from '../src/views/UserDetail.vue'
import ListEmployee from '../src/views/ListEmployee.vue'
import EmployeeDetail from '../src/views/EmployeeDetail.vue'
import Profile from '../src/views/Profile.vue'
import Projects from '../src/views/Projects.vue'
import ContactB10 from '../src/views/ContactB10.vue'
import B11Login from '../src/views/B11Login.vue'
import B11Register from '../src/views/B11Register.vue'

const routes = [
//   { path: '/', component: HomeView },
//   { path: '/about',name:"about", component: AboutView },
//   { path: '/contact', component: ContactView },
//   { path: '/user/:id', component: UserDetail },
//   {
//     path:"/product",
//     component:Product,
//     children:[
//         {path:"review",name:"product-review",component:ProductReview}
//     ]
//   }
{path:"/Bai1",component:Bai1},
{path:"/Bai2",component:Bai2},
{path:"/Register",component:Bai3},
{path:"/Login",component:Bai4},

{path:"/",component:Home},
{path:"/contact",component:Contact},
{path:"/home",component:Home},
{path:"/product",component:Product},
{path:"/navbar",component:Navbar,
    children:[
        {path:"product",component:Product},
        {path:"account",component:Account},
        {path:"dashboard",component:Dashboard}
    ]
},
{path:'/listUser',component:ListUser,},
{path:'/userDetail/:id',component:UserDetail}, 
{path:"/:pathMatch(.*)*",component:Notfound},
{
    path: '/employees',
    component: ListEmployee,
},
{
    path: '/employees/:id',
    component: EmployeeDetail,
    children: [
      {
        path: 'profile',
        component: Profile,
      },
      {
        path: 'projects',
        component: Projects,
      },
      {
        path: 'contact',
        component: ContactB10,
      },
    ],
  },
  {
    path:"/b11login",component:B11Login
  },
  {
    path:"/b11register",component:B11Register
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})