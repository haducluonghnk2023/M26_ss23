<template>
  <div>
    <!-- <h1>
      Session07
      <ul>
        <li>props</li>
        <li>slots</li>
        <li>emit</li>
      </ul>
    </h1> -->
    <!-- <Parent /> -->
    <Modal :title="'Thông báo từ hệ thống'" @close="handleModalClose">
      Đây là nội dung của modal. Bạn có thể đóng modal bằng cách nhấn vào nút
      'Close'.
    </Modal>

    <!-- <Header @messageSent="handleMessage"> </Header> -->
    <ParentComponent />
    <ProductParent />
    <CounttParent />
    <TodoApp />
    <Cart>
      <template #header> Thông tin sản phẩm </template>
      <template #body>
        Đây là mô tả ngắn gọn về sản phẩm này. Sản phẩm có các tính năng nổi bật
        và giá cả hợp lý.
      </template>
      <template #footer>
        <button @click="viewDetails">Xem chi tiết</button>
      </template>
    </Cart>
    <MessageParent />
    <ListUser />
  </div>
</template>

<script setup>
// import Parent from "./components/Parent.vue";
import Header from "./components/Header.vue";
import ParentComponent from "./components/Bai1/ParentComponent.vue";
import ProductParent from "./components/bai2/ProductParent.vue";
import CounttParent from "./components/bai3/CountParent.vue";
import TodoApp from "./components/bai4/TodoApp.vue";
import Modal from "./components/bai5/Modal.vue";
import Cart from "./components/bai6/Cart.vue";
import MessageParent from "./components/bai7/MessageParent.vue";
import ListUser from "./components/bai8/ListUser.vue";

const handleModalClose = () => {
  console.log("Modal đã đóng!");
};
const viewDetails = () => {
  alert("Xem chi tiết sản phẩm");
};

// const handleMessage = (data) => {
//   console.log("Giá trị nhận về", data);
// };
</script>

<style scoped></style>
