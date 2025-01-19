import { createRouter, createWebHistory } from "vue-router";
import axios from "axios";

axios.interceptors.request.use((config) => {
  const authUser = localStorage.getItem("access");
  if (authUser) {
    config.headers["Authorization"] = `Bearer ${authUser}`;
  }
  return config;
});

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
      path: "/course/detail/:id",
      name: "CourseDetail",
      component: () => import("@/views/CourseDetail.vue"),
    },
    {
      path: "/video/detail/:id",
      name: "VideoPlayer",
      component: () => import("@/views/VideoPlayer.vue"),
    },
    // {
    //   path: "/payment",
    //   name: "Payment",
    //   component: () => import("@/views/Payment.vue"),
    // },
    {
      path: "/notification",
      name: "Notification",
      component: () => import("@/views/Notification.vue"),
    },
    {
      path: "/privacy",
      name: "Privacy",
      component: () => import("@/views/Privacy.vue"),
    },
    {
      path: "/terms",
      name: "Terms",
      component: () => import("@/views/Terms.vue"),
    },
    {
      path: "/test",
      name: "Test",
      component: () => import("@/views/test.vue"),
    },
    // ADMIN
    {
      path: "/dashboard/admin/home",
      name: "AdminHome",
      component: () => import("@/views/admin/AdminHome.vue"),
    },
    {
      path: "/dashboard/admin/users",
      name: "AdminUsers",
      component: () => import("@/views/admin/AdminUsers.vue"),
    },
    {
      path: "/dashboard/admin/categories",
      name: "AdminCategories",
      component: () => import("@/views/admin/AdminCategories.vue"),
    },
    {
      path: "/dashboard/admin/mentors",
      name: "AdminMentors",
      component: () => import("@/views/admin/AdminMentors.vue"),
    },
    {
      path: "/dashboard/admin/courses",
      name: "AdminCourses",
      component: () => import("@/views/admin/AdminCourses.vue"),
    },
    {
      path: "/dashboard/admin/add/category",
      name: "AddCategory",
      component: () => import("@/views/admin/AddCategory.vue"),
    },
    {
      path: "/dashboard/admin/add/mentor",
      name: "AddMentor",
      component: () => import("@/views/admin/AddMentor.vue"),
    },
    {
      path: "/dashboard/admin/add/course",
      name: "AddCourse",
      component: () => import("@/views/admin/AddCourse.vue"),
    },
    // Teacher
    {
      path: "/dashboard/teacher/chat",
      name: "TeacherChat",
      component: () => import("@/views/teachers/Chat.vue"),
    },
  ],
  scrollBehavior() {
    document.getElementById("app").scrollIntoView({ behavior: "smooth" });
  },
});

export default router;
