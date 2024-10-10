<template>
  <div class="book-management">
    <div class="header">
      <h3>Quản lý mượn trả sách</h3>
      <button @click="openForm" class="btn btn-primary">Thêm thông tin</button>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th>STT</th>
          <th>Tên sách</th>
          <th>Sinh viên mượn</th>
          <th>Ngày mượn</th>
          <th>Ngày trả</th>
          <th>Trạng thái</th>
          <th>Chức năng</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(book, index) in books" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.student }}</td>
          <td>{{ book.borrowDate }}</td>
          <td>{{ book.returnDate }}</td>
          <td>
            <span :class="getStatusClass(book.status)">
              {{ book.status }}
            </span>
          </td>
          <td>
            <button @click="editBook(index)" class="btn btn-warning">
              Sửa
            </button>
            <button @click="deleteBook(index)" class="btn btn-danger">
              Xóa
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <div v-if="showForm" class="form-overlay">
      <div class="form-container">
        <h3>Thêm thông tin mượn sách</h3>
        <form @submit.prevent="addNewBook">
          <div>
            <label>Tên sách:</label>
            <input v-model="newBook.title" type="text" />
          </div>
          <div>
            <label>Sinh viên mượn:</label>
            <input v-model="newBook.student" type="text" />
          </div>
          <div>
            <label>Ngày mượn:</label>
            <input v-model="newBook.borrowDate" type="date" />
          </div>
          <div>
            <label>Ngày trả:</label>
            <input v-model="newBook.returnDate" type="date" />
          </div>

          <div class="form-actions">
            <button type="submit" class="btn btn-primary">Thêm</button>
            <button @click="closeForm" type="button" class="btn btn-secondary">
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const books = ref([]);
const showForm = ref(false);
const newBook = ref({
  title: "",
  student: "",
  borrowDate: "",
  returnDate: "",
  status: "Chưa trả", // Trạng thái mặc định
});

const openForm = () => {
  showForm.value = true;
};

const closeForm = () => {
  showForm.value = false;
  resetForm();
};

const resetForm = () => {
  newBook.value = {
    title: "",
    student: "",
    borrowDate: "",
    returnDate: "",
    status: "Chưa trả", // Reset trạng thái
  };
};

const validateForm = () => {
  const today = new Date().toISOString().split("T")[0];
  if (
    !newBook.value.title ||
    !newBook.value.student ||
    !newBook.value.borrowDate ||
    !newBook.value.returnDate
  ) {
    Toastify({
      text: "Tất cả các trường không được bỏ trống.",
      duration: 3000,
      gravity: "top",
      position: "center",
      backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
    }).showToast();
    return false;
  }
  return true;
};

const addNewBook = () => {
  if (!validateForm()) return;

  const today = new Date().toISOString().split("T")[0];
  if (newBook.value.returnDate >= today) {
    newBook.value.status = "Chưa trả";
  } else {
    newBook.value.status = "Đã trả";
  }

  books.value.push({ ...newBook.value });
  localStorage.setItem("books", JSON.stringify(books.value));

  Toastify({
    text: "Thêm sách mới thành công!",
    duration: 3000,
    gravity: "top",
    position: "center",
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
  }).showToast();

  closeForm();
};

onMounted(() => {
  const savedBooks = localStorage.getItem("books");
  if (savedBooks) {
    books.value = JSON.parse(savedBooks);
  }
});

const deleteBook = (index) => {
  const bookTitle = books.value[index].title;
  const confirmDelete = window.confirm(
    `Bạn có chắc chắn muốn xóa sách ${bookTitle} này không?`
  );

  if (confirmDelete) {
    books.value.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(books.value));

    Toastify({
      text: "Xóa sách thành công!",
      duration: 3000,
      gravity: "top",
      position: "center",
      backgroundColor: "linear-gradient(to right, #ff5f6d, #ffc371)",
    }).showToast();
  } else {
    Toastify({
      text: "Hủy xóa sách.",
      duration: 3000,
      gravity: "top",
      position: "center",
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    }).showToast();
  }
};

const getStatusClass = (status) => {
  return status === "Đã trả" ? "badge bg-success" : "badge bg-danger";
};
</script>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

th,
td {
  border: 1px solid #ddd;
  padding: 12px 15px;
  text-align: center;
  vertical-align: middle;
}

th {
  background-color: #f8f9fa;
  font-weight: 600;
  text-transform: uppercase;
}

td {
  background-color: #fff;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #eaeaea;
}

.btn {
  padding: 8px 15px;
  margin: 5px;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s;
}

.btn:hover {
  transform: scale(1.05);
}

.badge {
  padding: 6px 12px;
  color: white;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 500;
}

.bg-success {
  background-color: #28a745;
}

.bg-danger {
  background-color: #dc3545;
}

.btn-warning {
  background-color: #ffc107;
  color: white;
}

.btn-warning:hover {
  background-color: #e0a800;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
}

.btn-danger:hover {
  background-color: #c82333;
}

.btn-primary {
  background-color: #007bff;
  color: white;
}

.btn-primary:hover {
  background-color: #0069d9;
}

.book-management {
  width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.book-management .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.book-management h3 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
}

.book-management .btn {
  display: inline-block;
  margin-bottom: 20px;
}
.book-management .btn-primary {
  padding: 8px 15px;
  font-size: 14px;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.book-management .btn-primary:hover {
  background-color: #0056b3;
}
.form-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.form-container {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.form-container h3 {
  margin-bottom: 20px;
  text-align: center;
}

.form-container div {
  margin-bottom: 10px;
}

.form-container input,
.form-container select {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
}

.form-actions {
  display: flex;
  justify-content: space-between;
}

.btn-secondary {
  background-color: gray;
  color: white;
}

.btn-primary {
  background-color: blue;
  color: white;
}

.btn-primary:hover {
  background-color: darkblue;
}
</style>
