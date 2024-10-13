<template>
  <div>
    <h1>bai 7</h1>
    <div :class="darkModeClass">
      <label>
        <input type="checkbox" v-model="isDarkMode" @change="toggleDarkMode" />
        {{ isDarkMode ? "Tối" : "Sáng" }}
      </label>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const isDarkMode = computed({
  get: () => store.getters.getDarkModeStatus,
  set: (value) => store.commit("toggleDarkMode", value),
});

const darkModeClass = computed(() =>
  isDarkMode.value ? "dark-mode" : "light-mode"
);

const toggleDarkMode = () => {
  store.commit("toggleDarkMode");
};
</script>

<style scoped>
.light-mode {
  background-color: white;
  color: black;
}

.dark-mode {
  background-color: black;
  color: white;
}

input {
  margin-right: 10px;
}
</style>
