<template>
  <div class="w-full md:w-1/2 flex flex-col items-center h-64 mx-auto">
    <div class="w-full px-4">
      <div class="flex flex-col items-center relative">
        <!-- Input Box -->
        <div class="w-full">
          <div class="my-2 p-1 flex bg-m_black-700 rounded">
            <div class="flex flex-auto flex-wrap">
              <div v-for="(tag, index) in selectedTags" :key="index"
                class="flex justify-center items-center m-1 font-medium py-1 px-2 bg-yellow-200 text-yellow-600 rounded-full">
                <div class="text-xs font-normal leading-none max-w-full flex-initial">
                  {{ tag }}
                </div>
                <div class="flex flex-auto flex-row-reverse">
                  <div @click="removeTag(index)">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 ml-2 cursor-pointer hover:text-m_yellow-100"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </div>
                </div>
              </div>
              <div class="flex-1">
                <input v-model="searchQuery" placeholder=""
                  class="bg-transparent py-2 px-2 appearance-none outline-none h-full w-full text-white" />
              </div>
            </div>
            <div class="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-m_black-400">
              <button @click="toggleDropdown" class="w-6 h-6 text-gray-600 focus:outline-none">
                <svg class="w-[14px]" :class="{ 'rotate-180': isDropdownOpen, 'transition-transform duration-200': true }"
                  viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.0694 5.15687L8.38444 9.76787C8.28221 9.86899 8.14423 9.92572 8.00044 9.92572C7.85664 9.92572 7.71866 9.86899 7.61644 9.76787L2.93144 5.15787C2.82858 5.05679 2.69014 5.00015 2.54594 5.00015C2.40173 5.00015 2.26329 5.05679 2.16044 5.15787C2.10979 5.20724 2.06954 5.26626 2.04205 5.33144C2.01457 5.39661 2.00041 5.46663 2.00041 5.53737C2.00041 5.6081 2.01457 5.67812 2.04205 5.7433C2.06954 5.80847 2.10979 5.86749 2.16044 5.91687L6.84444 10.5269C7.15296 10.8298 7.56806 10.9995 8.00044 10.9995C8.43281 10.9995 8.84791 10.8298 9.15644 10.5269L13.8404 5.91687C13.8912 5.86747 13.9316 5.8084 13.9592 5.74313C13.9868 5.67786 14.001 5.60772 14.001 5.53687C14.001 5.46601 13.9868 5.39588 13.9592 5.33061C13.9316 5.26534 13.8912 5.20626 13.8404 5.15687C13.7376 5.05579 13.5991 4.99915 13.4549 4.99915C13.3107 4.99915 13.1723 5.05579 13.0694 5.15687Z"
                    fill="gray" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <!-- Dropdown Menu -->
        <div v-if="isDropdownOpen"
          class="absolute shadow top-full bg-m_gray-500 text-white z-40 w-full left-0 rounded max-h-select overflow-y-auto">
          <div class="flex flex-col w-full">
            <div v-for="(item, index) in filteredOptions" :key="index"
              class="cursor-pointer w-full hover:bg-m_black-100" @click="selectTag(item)">
              <div
                class="flex w-full items-center p-2 pl-2 relative">
                <div class="w-full items-center flex">
                  <div class="mx-2 leading-6">{{ item }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        "HTML",
        "Ruby",
        "Javascript",
        "Python",
        "JAVA",
        "ASP.Net",
        "C++",
        "SQL"
      ],
      selectedTags: [],
      searchQuery: "",
      isDropdownOpen: false
    };
  },
  computed: {
    filteredOptions() {
      return this.options.filter(
        (option) =>
          option.toLowerCase().includes(this.searchQuery.toLowerCase()) &&
          !this.selectedTags.includes(option)
      );
    }
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectTag(tag) {
      this.selectedTags.push(tag);
      this.searchQuery = "";
    },
    removeTag(index) {
      this.selectedTags.splice(index, 1);
    }
  }
};
</script>

<style>
.max-h-select {
  max-height: 300px;
}
</style>