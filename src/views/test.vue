<template>
  <div class="p-6 bg-gray-900 rounded-lg">
    <table class="w-full text-left text-gray-200">
      <thead>
        <tr class="text-sm font-semibold uppercase border-b border-gray-700">
          <th class="px-4 py-3">ID</th>
          <th class="px-4 py-3">Имя, Фамилия</th>
          <th class="px-4 py-3">Э-почта</th>
          <th class="px-4 py-3">Дата добав.</th>
          <th class="px-4 py-3">Тип пользователя</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user in users"
          :key="user.id"
          class="border-b border-gray-800 hover:bg-gray-800"
        >
          <td class="px-4 py-3 text-sm font-medium">#{{ user.id }}</td>
          <td class="px-4 py-3 text-sm">{{ user.name }}</td>
          <td class="px-4 py-3 text-sm">{{ user.email }}</td>
          <td class="px-4 py-3 text-sm">{{ user.addedDate }}</td>
          <td class="px-4 py-3 text-sm">
            <span
              :class="[
                'px-3 py-1 rounded-full text-xs font-semibold',
                user.userType === 'Пользователь' ? 'bg-yellow-600' : 'bg-blue-600'
              ]"
            >
              {{ user.userType }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id: 123, name: 'Мария Смирнова', email: 'randommail@gmail.com', addedDate: '30.12.2022 23:00', userType: 'Пользователь' },
        { id: 124, name: 'Мария Смирнова', email: 'randommail@gmail.com', addedDate: '30.12.2022 23:00', userType: 'Наставник' },
        { id: 125, name: 'Мария Смирнова', email: 'randommail@gmail.com', addedDate: '30.12.2022 23:00', userType: 'Пользователь' },
        { id: 126, name: 'Мария Смирнова', email: 'randommail@gmail.com', addedDate: '30.12.2022 23:00', userType: 'Наставник' },
        { id: 127, name: 'Мария Смирнова', email: 'randommail@gmail.com', addedDate: '30.12.2022 23:00', userType: 'Наставник' },
        { id: 128, name: 'Мария Смирнова', email: 'randommail@gmail.com', addedDate: '30.12.2022 23:00', userType: 'Пользователь' },
        { id: 129, name: 'Мария Смирнова', email: 'randommail@gmail.com', addedDate: '30.12.2022 23:00', userType: 'Наставник' },
        { id: 130, name: 'Мария Смирнова', email: 'randommail@gmail.com', addedDate: '30.12.2022 23:00', userType: 'Наставник' },
        { id: 131, name: 'Мария Смирнова', email: 'randommail@gmail.com', addedDate: '30.12.2022 23:00', userType: 'Пользователь' },
        { id: 132, name: 'Мария Смирнова', email: 'randommail@gmail.com', addedDate: '30.12.2022 23:00', userType: 'Наставник' },
        { id: 133, name: 'Мария Смирнова', email: 'randommail@gmail.com', addedDate: '30.12.2022 23:00', userType: 'Пользователь' }
      ]
    };
  }
};
</script>

<style scoped>
/* Customize scrollbar for the table */
table::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

table::-webkit-scrollbar-thumb {
  background-color: #4b5563;
  border-radius: 4px;
}

table::-webkit-scrollbar-track {
  background-color: #1f2937;
}
</style>
