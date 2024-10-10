<template>
  <div>
    <h3>Life cycle vue js</h3>
    <!-- {{ sayHello() }} -->
    <p>Component Counter C: {{ countC }}</p>
    <p>Component Counter D: {{ countD }}</p>
    <button @click="handleClick">handleChange</button>
    <button @click="unmountComponent">click unmounted</button>
  </div>
</template>

<script setup>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  ref,
  computed,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

const countC = ref(0);
const countD = ref(0);
const isShow = ref(true);
onMounted(() => {
  console.log("onMounted được gọi");
  // nơi gọi api lấy data dữ liệu gắn vào dom
});
const sayHello = () => {
  console.log("Hello from Vue component");
};
onBeforeMount(() => {
  console.log("onBeforeMount được gọi");
});

const caculatorC = () => {
  return countC.value ** 2;
};
const caculatorD = computed(() => {
  return countC.value ** 2;
});

const handleClick = () => {
  countC.value++;
};
/*
giai đoạn update
onBeforeUpdate
onUpdated
*/

/*
    giai đoạn unmounting: giai đoạn hủy tức là component được loại bỏ, được tháo gỡ khỏi dom
*/
const unmountComponent = () => {
  isShow.value = false;
  console.log("Component đã được loại bỏ");
};
onBeforeUnmount(() => {
  console.log("onBeforeUnmount được gọi");
});
onUnmounted(() => {
  console.log("Component đã được tháo gỡ khỏi dom");
});

onBeforeUpdate(() => {
  console.log("onBeforeUpdate được gọi");
});
onUpdated(() => {
  console.log("onUpdated được gọi");
});
</script>

<style></style>
