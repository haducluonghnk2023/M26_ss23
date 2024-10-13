<template>
  <div>
    <h1>bai 8</h1>
    <h2>{{ $t("changeLanguage.title") }}</h2>
    <button @click="changeLanguage('en')">English</button>
    <button @click="changeLanguage('vi')">Tiếng Việt</button>
    <p>{{ $t("changeLanguage.message") }}</p>
  </div>
</template>

<script setup>
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

function changeLanguage(lang) {
  locale.value = lang;
}
</script>

<style scoped>
button {
  margin: 5px;
}
</style>
