import router from '@/router/index';
import { defineStore } from "pinia";
import { useToast } from "vue-toastification";
import api from "@/api/index";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [],
    user: JSON.parse(localStorage.getItem("userData")) || null,
    isRegistered: !!localStorage.getItem("access"),
    loading: false,
    error: null,
  }),

  actions: {
    async fetchUsers() {
      this.loading = true;
      this.error = null;
      const toast = useToast();
      try {
        const response = await api.get("/users/");
        this.users = response.data.results;
      } catch (error) {
        console.error("Error: ", error);
        this.error = error.response?.message;
        toast.error(this.error);
      } finally {
        this.loading = false;
      }
    },
    async registerUser(user) {
      this.loading = true;
      this.error = null;
      const toast = useToast();
      try {
        const formData = new FormData();
        formData.append("email", user.email);
        formData.append("full_name", user.fullName);
        formData.append("password", user.password);
        formData.append("otp", user.otp);
        const response = await api.post("/users/", formData);
        console.log("user register -> ", response);
        this.user = response.data;
        this.isRegistered = true;
        localStorage.setItem("userData", JSON.stringify(response.data));
      } catch (error) {
        console.error("Error: ", error);
        this.error = error.response?.message;
        toast.error(this.error);
      } finally {
        this.loading = false;
      }
    },
    async loginUser(user) {
      this.loading = true;
      this.error = null;
      const toast = useToast();
      try {
        const formData = new FormData();
        formData.append("email", user.email);
        formData.append("password", user.password);
        const response = await api.post("/token/", formData);
        console.log("user login -> ", response);
        if (response.status === 200) {
          const { access, refresh, user } = response.data;

          this.isRegistered = true;
          this.user = response.data.user;

          localStorage.setItem("access", access);
          localStorage.setItem("refresh", refresh);
          localStorage.setItem("userData", JSON.stringify(user));

          if (user.is_teacher) {
            router.push({ name: "TeacherChat" });
          } else if (user.is_superuser) {
            router.push({ name: "AdminHome" });
          } else {
            router.push({ name: "Home" });
          }
        }
      } catch (error) {
        console.error("Error: ", error);
        this.error = error.response?.message;
        toast.error(this.error);
      } finally {
        this.loading = false;
      }
    },
  },
  async deleteUser() {
    this.loading = true;
    this.error = null;
    const toast = useToast();
    try {
      const response = await api.delete("/users/");
      this.user = null;
      this.isRegistered = false;
      localStorage.removeItem("userData");
    } catch (error) {
      console.error("Error: ", error);
      this.error = error.response?.message;
      toast.error(this.error);
    } finally {
      this.loading = false;
    }
  },

  getters: {
    userCount: (state) => state.users.length,
  },
});
