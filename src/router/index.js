import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("@/views/Register.vue"),
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("@/views/Login.vue"),
    },
    {
      path: "/category",
      name: "Category",
      component: () => import("@/views/Category.vue"),
    },
    {
      path: "/profile",
      name: "Profile",
      component: () => import("@/views/UserProfile.vue"),
    },
    {
      path: "/course/detail",
      name: "CourseDetail",
      component: () => import("@/views/CourseDetail.vue"),
    },
    {
      path: "/payment",
      name: "Payment",
      component: () => import("@/views/Payment.vue"),
    },
    {
      path: "/notification",
      name: "Notification",
      component: () => import("@/views/Notification.vue"),
    },
    {
      path: "/test",
      name: "Test",
      component: () => import("@/views/test.vue"),
    },
    // ADMIN
    {
      path: "/admin/home",
      name: "AdminHome",
      component: () => import("@/views/admin/AdminHome.vue"),
    },
    {
      path: "/admin/users",
      name: "AdminUsers",
      component: () => import("@/views/admin/AdminUsers.vue"),
    },
    {
      path: "/admin/categories",
      name: "AdminCategories",
      component: () => import("@/views/admin/AdminCategories.vue"),
    },
    {
      path: "/admin/mentors",
      name: "AdminMentors",
      component: () => import("@/views/admin/AdminMentors.vue"),
    },
    {
      path: "/admin/courses",
      name: "AdminCourses",
      component: () => import("@/views/admin/AdminCourses.vue"),
    },
    {
      path: "/admin/add/category",
      name: "AddCategory",
      component: () => import("@/views/admin/AddCategory.vue"),
    },
    {
      path: "/admin/add/mentor",
      name: "AddMentor",
      component: () => import("@/views/admin/AddMentor.vue"),
    },
    {
      path: "/admin/add/course",
      name: "AddCourse",
      component: () => import("@/views/admin/AddCourse.vue"),
    },
  ],
});

export default router;