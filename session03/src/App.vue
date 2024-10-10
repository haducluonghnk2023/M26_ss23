<template>
  <div>
    <div>
      binding property
      <ul>
        <li>1.v-bind</li>
        <li>2.v-if,v-else,v-else-if</li>
        <li>3.v-show</li>
        <li>4.v-for</li>
        <li>5.v-model</li>
      </ul>
    </div>
    <p>event</p>
    <img v-bind:src="urlImage" alt="loi" />
    <div v-bind:style="{ fontSize: size, color: red }">Text example</div>
    <div v-bind:class="className">The class is set with Vue</div>
    <p>********************************************************</p>
    <p>V-IF</p>
    <p v-if="isVif">hiển thị nếu điều kiện của v-if đúng</p>
    <p>******************************************</p>
    <p>V-SHOW</p>
    <p v-show="isVshow">hiển thị nếu v-show thỏa mãn</p>
    <ul>
      <li v-if="age > 30">tuổi trung niên</li>
      <li v-else-if="age > 18">tuổi thanh niên</li>
      <li v-else-if="age > 6">tuổi trưởng thành</li>
      <li v-else>trẻ nhỏ</li>
    </ul>
    <p>****************************</p>
    <p>V-FOR : Hiển thị dữ liệu về mảng</p>
    <ul>
      <li v-for="(student, index) in students" :key="student.id">
        {{ index + 1 }}{{ student.name }}
      </li>
    </ul>
    <p>**********************</p>
    <p>V-MODEL : Cập nhật giá trị input theo biến</p>
    <div>
      <input :value="inputText" type="text" @input="handleChange" />
      <p>giá trị bạn nhập:{{ inputText }}</p>
    </div>
    <p>*********************</p>
    <p>EVENT</p>
    <button @click="handleClick('hello')">click</button>

    <p>****************</p>
    <h1>Bài 1</h1>
    <Excercice01 />
    <h1>Bài 2</h1>
    <Excercice02 />
    <h1>Bài 3</h1>
    <Excercice03 />
    <h1>Bài 4</h1>
    <Excercice04 />
    <h1>Bài 5</h1>
    <Excercice05 />
    <h1>Bài 6</h1>
    <Excercice06 />
    <h1>Bài 7</h1>
    <Excercice07 />
    <h1>Bài 8</h1>
    <Excercice08 />
    <h1>Bài 9</h1>
    <Excercice09 />
    <h1>Bài 10</h1>
    <Excercice10 />
    <h1>Bài 11</h1>
    <Excercice11 />
    <h1>Bài 12</h1>
    <Excercice12 />
  </div>
</template>

<script setup>
import Excercice01 from "./components/Exercise01.vue";
import Excercice02 from "./components/Exercise02.vue";
import Excercice03 from "./components/Exercise03.vue";
import Excercice04 from "./components/Exercise04.vue";
import Excercice05 from "./components/Exercise05.vue";
import Excercice06 from "./components/Exercise06.vue";
import Excercice07 from "./components/Exercise07.vue";
import Excercice08 from "./components/Exercise08.vue";
import Excercice09 from "./components/Exercise09.vue";
import Excercice10 from "./components/Exercise10.vue";
import Excercice11 from "./components/Exercise11.vue";
import Excercice12 from "./components/Exercise12.vue";
import { ref } from "vue";
const urlImage =
  "data:image/jpeg;base64,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";
const size = "50px";
const red = "red";
const className = "heading";
const isVif = true;
const isVshow = false;
const age = 20;
const students = [
  {
    id: 1,
    name: "hồng vân",
  },
  {
    id: 2,
    name: "linh",
  },
  {
    id: 3,
    name: "phương",
  },
];
const inputText = ref("");
// khai báo hàm onchange
const handleChange = (event) => {
  console.log("gia tri nhap ", inputText);
  inputText.value = event.target.value;
};
//gọi hàm khi click
const handleClick = (mess) => {
  console.log("gia tri nhan ve", mess);
};

/*
phân biệt v-if và v-show
- đối với v-if :+nếu điều kiện đúng thì render ra DOM
                +nếu điều kiện sai thì DOM sẽ bị xóa đi 
- đối với v-show thì điều kiện đúng hay sai thì element vẫn được render ra DOM , chỉ khác nếu điều kiện sai thì display:none
- ngoài ra đối với v-if thì có thể dùng thêm v-else,v-else-if
 */
</script>

<style>
.heading {
  color: blue;
}
</style>
