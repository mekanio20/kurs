import api from "@/api/index";
import router from "@/router/index";
import { useToast } from "vue-toastification";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    users: [],
    user: JSON.parse(localStorage.getItem("userData")) || null,
    isRegistered: !!localStorage.getItem("access"),
    loading: false,
    error: null,
  }),

  actions: {
    // Verifi otp
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

        const token = await api.post("/token/", {
          email: user.email,
          password: user.password,
        });

        localStorage.setItem("access", token.data.access);
        localStorage.setItem("refresh", token.data.refresh);
        localStorage.setItem(
          "userData",
          JSON.stringify({
            id: token.data.user.id,
            avatar: token.data.user.avatar,
            full_name: token.data.user.full_name,
            email: token.data.user.email,
            bio: token.data.user.bio,
            date_joined: token.data.user.date_joined,
          })
        );

        this.user = response.data;
        this.isRegistered = true;

        sessionStorage.removeItem("fullName");
        sessionStorage.removeItem("password");
        sessionStorage.removeItem("email");

        router.push({ name: "Home" });
      } catch (error) {
        console.error("Error: ", error);
        this.error = error.response?.message;
        toast.error(this.error);
      } finally {
        this.loading = false;
      }
    },
    // Send otp
    async registerEmail(user) {
      this.loading = true;
      this.error = null;
      const toast = useToast();
      try {
        if (user.password.length < 8) {
          toast.error("Пароль должен содержать не менее 8 символов");
          return;
        }

        sessionStorage.setItem("fullName", user.fullName);
        sessionStorage.setItem("password", user.password);
        sessionStorage.setItem("email", user.email);

        const otp = await api.post("/otp/", {
          email: user.email,
          purpose: "registration",
        });

        if (otp.status === 201) {
          router.push({ name: "OTP" });
        } else {
          toast.error(otp.data.message);
        }
      } catch (error) {
        console.error(error);
        this.error = error.message || "Что-то пошло не так";
        if (error.status === 400) {
          toast.error("Пользователь с таким email уже существует");
        } else {
          toast.error(errorMessage);
        }
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
        if (response.status === 200) {
          const { access, refresh, user } = response.data;

          this.isRegistered = true;
          this.user = user;

          localStorage.setItem("access", access);
          localStorage.setItem("refresh", refresh);
          localStorage.setItem(
            "userData",
            JSON.stringify({
              id: user.id,
              avatar: user.avatar,
              full_name: user.full_name,
              email: user.email,
              bio: user.bio,
              date_joined: user.date_joined,
            })
          );

          if (user.is_teacher) {
            router.push({ name: "TeacherChat" });
          } else if (user.is_superuser) {
            router.push({ name: "AdminHome" });
          } else {
            router.push({ name: "Home" });
          }
        }
      } catch (error) {
        if (error.status === 400) {
          this.error = "Неправильный логин или пароль";
        } else {
          this.error = error.message;
        }
        toast.error(this.error);
      } finally {
        this.loading = false;
      }
    },
    // Verifi otp
    async resetUser(user) {
      this.loading = true;
      this.error = null;
      const toast = useToast();
      try {
        const reset = await api.post("/password_reset/", user);
        if (reset.status === 204) {
          const res = await api.post("/token/", {
            email: user.email,
            password: user.password,
          });
          const { access, refresh } = res.data;
          this.user = res.data.user;
          this.isRegistered = true;
          localStorage.setItem("access", access);
          localStorage.setItem("refresh", refresh);
          localStorage.setItem(
            "userData",
            JSON.stringify({
              id: res.data.user.id,
              avatar: res.data.user.avatar,
              full_name: res.data.user.full_name,
              email: res.data.user.email,
              bio: res.data.user.bio,
              date_joined: res.data.user.date_joined,
            })
          );
          router.push({ name: "Home" });
        } else {
          this.error = reset.data.message;
          toast.error(this.error);
        }
      } catch (error) {
        console.error("Error: ", error);
        this.error = error.response?.message;
        toast.error(this.error);
      } finally {
        this.loading = false;
      }
    },
    // Send otp
    async resetPassword(user) {
      this.loading = true;
      this.error = null;
      const toast = useToast();
      try {
        const otp = await api.post("/otp/", {
          email: user.email,
          purpose: "reset_password",
        });
        if (otp.status === 201) {
          router.push({
            name: "OTP",
            query: { email: user.email, password: user.password },
          });
        } else {
          toast.error(otp.data.message);
        }
      } catch (error) {
        console.error("Error: ", error);
        this.error = error.response?.message;
        toast.error(this.error);
      } finally {
        this.loading = false;
      }
    },
    async updateUser(payload) {
      this.loading = true;
      this.error = null;
      const toast = useToast();
      try {
        const formData = new FormData();
        formData.append("full_name", payload.user.full_name);
        formData.append("bio", payload.user.bio);
        formData.append("otp", 1234);
        if (payload.user.avatar) {
          formData.append("avatar", payload.user.avatar);
        }
        if (payload.user.email) {
          formData.append("email", payload.user.email);
        }
        if (payload.user.password) {
          formData.append("password", payload.user.password);
        }
        const response = await api.patch(`/users/${payload.userId}/`, formData);
        localStorage.setItem(
          "userData",
          JSON.stringify({
            id: response.data.id,
            avatar: response.data.avatar,
            full_name: response.data.full_name,
            email: response.data.email,
            bio: response.data.bio,
            date_joined: response.data.date_joined,
          })
        );
        if (response.status === 200) {
          toast.success("Профиль успешно обновлен");
        }
      } catch (error) {
        console.error("Error: ", error);
        this.error = error.response?.message;
        toast.error(this.error);
      } finally {
        this.loading = false;
      }
    },
    async logoutUser() {
      this.user = null;
      this.isRegistered = false;
      localStorage.removeItem("userData");
      localStorage.removeItem("access");
      localStorage.removeItem("refresh");
      router.push({ name: "Login" });
    },
  },
});
