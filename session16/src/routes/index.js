// Định nghĩa danh sách các route
// import HomePage from "../views/HomePage.vue";
// import AboutPage from "../views/AboutPage.vue";
// import ContactPage from "../views/ContactPage.vue";
// import FeedBack from "../views/FeedBack.vue";
// import UserPage from "../views/UserPage.vue";
// import ProfilePage from "../views/ProfilePage.vue";
import NotFound from "../components/bai4/NotFound.vue"
import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => 
      import(/* webpackchunkName :"home" */ "../views/HomePage.vue"),
    alias: ["/home", "/home-page"],
  },
  {
    path: "/search",
    name: "search",
    component: () => 
      import(/* webpackchunkName :"search" */ "../components/bai3/Search.vue")
    
  },
  {
    path: '/:pathMatch(.*)*', 
    name: 'NotFound',
    component: NotFound
  },
  {
    path: "/home",
    redirect: "/"
  },
  {
    path: "/b1",
    name: "home",
    component: () => 
      import(/* webpackchunkName :"home" */ "../components/bai1/Home.vue")
    
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackchunkName :"about" */ "../views/AboutPage.vue"),
  },
  {
    path: "/b1about",
    name: "about",
    component: () =>
      import(/* webpackchunkName :"about" */ "../components/bai1/Contact.vue"),
    alias: ["/contact", "/get-in-touch"],
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackchunkName :"contact" */ "../views/ContactPage.vue"),
    redirect: "/feedback",
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(/* webpackchunkName :"login" */ "../components/bai5/Login.vue"),
    
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import(/* webpackchunkName :"dashboard" */ "../components/bai5/Dashboard.vue"),
  },
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: "/feedback",
    name: "feedback",
    component: () =>
      import(/* webpackchunkName :"feedback" */ "../views/FeedBack.vue"),
  },
  {
    path: "/user/:id",
    name: "UserPage",
    component: () =>
      import(/* webpackchunkName :"userPage" */ "../views/UserPage.vue"),
    redirect: (to) => `profile/${to.params.id}`,
  },
  {
    path: "/profile/:id",
    name: "profilePage",
    component: () =>
      import(/* webpackchunkName :"profile" */ "../views/ProfilePage.vue"),
  },
  {
    path: "/list-product",
    name: "listProduct",
    component: () =>
      import(/* webpackchunkName :"listProduct" */ "../views/ListProduct.vue"),
  },
  {
    path: '/posts',
    name: 'ListPost',
    component: () =>
      import(/* webpackchunkName :"listPost" */ "../components/bai7/ListPost.vue")
  },
  {
    path: '/posts/:id',
    name: 'PostDetail',
    component: () =>
      import(/* webpackchunkName :"PostDetail" */ "../components/bai7/PostDetail.vue"),
    props: true
  },
  {
    path: '/posts/not-found',
    name: 'PostNotFound',
    component: () =>
      import(/* webpackchunkName :"PostNotFound" */ "../components/bai7/PostNotFound.vue"),
  },
  // {
  //   path: "/admin",
  //   name: "admin",
  //   beforeEnter: (to, from, next) => {
  //       const isAuthentication = true;
  //       if(isAuthentication){
  //           next();
  //       }else{
  //           next("/home");
  //       }
  //   },
  //   component: () =>
  //     import(/* webpackchunkName :"dashboard" */ "../views/Dashboard.vue"),
  //   children:[
  //       {
  //           path: "manager-user",
  //           name: "managerUser",
  //           component: () =>
  //             import(/* webpackChunkName :"managerUser" */ "../views/ManagerUser.vue"),
  //       },
  //       {
  //           path: "manager-product",
  //           name: "managerProduct",
  //           component: () =>
  //             import(/* webpackChunkName :"managerProduct" */ "../views/ManagerProduct.vue"),
  //       },
  //   ]
  // },
  {
    path: '/admin',
    component: () =>
      import(/* webpackChunkName :"admin" */ "../components/bai6/Admin.vue"),
    children: [
      {
        path: 'manager-user',
        component: () =>
          import(/* webpackChunkName :"'manager-user" */ "../components/bai6/Users.vue"),
      },
      {
        path: 'manager-product',
        component: () =>
          import(/* webpackChunkName :"manager-product" */ "../components/bai6/Products.vue"),
      },
      {
        path: 'settings',
        component: () =>
          import(/* webpackChunkName :"settings" */ "../components/bai6/Settings.vue"),
      }
    ]
  },
  {
    path: "/list-product",
    name: "listProduct",
    component: () =>
      import(/* webpackChunkName :"ListProduct" */ "../components/bai8/ListProduct.vue"),
  },
  {
    path: "/product-detail/:id",
    name: "ProductDetail",
    component: () =>
      import(/* webpackChunkName :"productDetail" */ "../components/bai8/ProductDetail.vue"),
  },
  {
    path: "/b9",
    name: "Settings",
    component: () =>
      import(/* webpackChunkName :"b9" */ "../components/bai9/Settings.vue"),
  }
];

//tạo cơ chế định tuyến
export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.name === 'PostDetail' && from.name === 'ListPost') {
      // Cuộn đến giữa của PostDetail.vue
      return { top: window.innerHeight / 2 }
    } else if (from.name === 'PostDetail' && to.name === 'ListPost') {
      // Cuộn về vị trí mà người dùng đã rời khỏi
      return savedPosition || { top: 0 }
    } else if (to.name === 'PostNotFound') {
      // Cuộn về đầu trang PostNotFound.vue
      return { top: 0 }
    }
    return { top: 0 } // Mặc định cuộn về đầu trang
  }
});

// tạo cơ chế bảo vệ route
router.beforeEach((to,from,next)=>{
    // mô phỏng người dùng đã/chưa đăng nhập
    const isLogin = true;
    if(to.path === "/dashboard" && !isLogin ){
        // điều hướng về trang chủ nếu chưa đăng nhập
        next("/home");
    } else{
        // cho phép truy cập vào dashboard nếu đã đăng nhập
        next();
    }
    
})
router.beforeEach((to,from,next)=>{
    // mô phỏng người dùng đã/chưa đăng nhập
    const isLoggedIn  = false;
    if(to.path === "/dashboard" && !isLoggedIn  ){
        // điều hướng về trang chủ nếu chưa đăng nhập
        next("/");
    } else{
        // cho phép truy cập vào dashboard nếu đã đăng nhập
        next();
    }
    
})
