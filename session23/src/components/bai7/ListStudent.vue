<template>
  <div>
    <div class="container-xl">
      <div class="table-responsive">
        <div class="table-wrapper">
          <div class="table-title">
            <div class="row">
              <div class="col-sm-6">
                <h2>Quản lý <b>sinh viên</b></h2>
              </div>
              <div class="col-sm-6">
                <a
                  href="#addEmployeeModal"
                  class="btn btn-success"
                  data-toggle="modal"
                  @click.prevent="openAddStudentModal"
                >
                  <i class="material-icons"></i>
                  <span>Thêm mới sinh viên</span>
                </a>
              </div>
            </div>
          </div>
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th>
                  <span class="custom-checkbox">
                    <input type="checkbox" id="selectAll" />
                    <label for="selectAll" />
                  </span>
                </th>
                <th>Tên sinh viên</th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Số điện thoại</th>
                <th>Lựa chọn</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, index) in users" :key="index">
                <td>
                  <span class="custom-checkbox">
                    <input
                      type="checkbox"
                      :id="'checkbox' + index"
                      name="options[]"
                    />
                    <label :for="'checkbox' + index" />
                  </span>
                </td>
                <td>{{ user.student_name }}</td>
                <td>{{ user.student_email }}</td>
                <td>{{ user.student_address }}</td>
                <td>{{ user.student_phone }}</td>
                <td>
                  <a href="#editEmployeeModal" class="edit" data-toggle="modal">
                    <i class="material-icons" data-toggle="tooltip" title="Edit"
                      ></i
                    >
                  </a>
                  <a
                    href="#"
                    class="delete"
                    @click.prevent="deleteStudent(user.id)"
                  >
                    <i
                      class="material-icons"
                      data-toggle="tooltip"
                      title="Delete"
                      ></i
                    >
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="clearfix">
            <div class="hint-text">Hiển thị <b>5</b>/<b>10</b> bản ghi</div>
            <ul class="pagination">
              <li class="page-item disabled">
                <a href="#">Trước</a>
              </li>
              <li class="page-item" v-for="page in totalPages" :key="page">
                <a href="#" class="page-link">{{ page }}</a>
              </li>
              <li class="page-item">
                <a href="#" class="page-link">Sau</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- modal thêm -->
    <div
      v-if="showAddStudentModal"
      class="modal fade show"
      tabindex="-1"
      role="dialog"
      style="display: block"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <form @submit.prevent="addStudent">
            <div class="modal-header">
              <h4 class="modal-title">Thêm mới sinh viên</h4>
              <button
                type="button"
                class="close"
                @click="closeAddStudentModal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label>Tên sinh viên</label>
                <input type="text" class="form-control" v-model="name" />
              </div>
              <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" v-model="email" />
              </div>
              <div class="form-group">
                <label>Địa chỉ</label>
                <textarea class="form-control" v-model="address"></textarea>
              </div>
              <div class="form-group">
                <label>Số điện thoại</label>
                <input type="text" class="form-control" v-model="phone" />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                @click="closeAddStudentModal"
              >
                Hủy
              </button>
              <button type="submit" class="btn btn-success">Thêm</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <!-- Modal sửa -->
    <!-- <div
      v-if="showEditStudentModal"
      class="modal fade show"
      tabindex="-1"
      role="dialog"
      style="display: block"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <form @submit.prevent="editStudent">
            <div class="modal-header">
              <h4 class="modal-title">Sửa sinh viên</h4>
              <button
                type="button"
                class="close"
                @click="closeEditStudentModal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label>Tên sinh viên</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="currentStudent.student_name"
                />
              </div>
              <div class="form-group">
                <label>Email</label>
                <input
                  type="email"
                  class="form-control"
                  v-model="currentStudent.student_email"
                />
              </div>
              <div class="form-group">
                <label>Địa chỉ</label>
                <textarea
                  class="form-control"
                  v-model="currentStudent.student_address"
                ></textarea>
              </div>
              <div class="form-group">
                <label>Số điện thoại</label>
                <input
                  type="text"
                  class="form-control"
                  v-model="currentStudent.student_phone"
                />
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                @click="closeEditStudentModal"
              >
                Hủy
              </button>
              <button type="submit" class="btn btn-success">Cập nhật</button>
            </div>
          </form>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
const users = ref([]);
const name = ref("");
const email = ref("");
const address = ref("");
const phone = ref("");

const showAddStudentModal = ref(false);
const showEditStudentModal = ref(false);

const openAddStudentModal = () => {
  showAddStudentModal.value = true;
};

const closeAddStudentModal = () => {
  showAddStudentModal.value = false;
};
const getAllUsers = async () => {
  try {
    const response = await axios.get("http://localhost:3000/students");
    users.value = response.data;
  } catch (error) {
    console.error("loi:", error);
  }
};

const addStudent = async () => {
  const newStudent = {
    student_name: name.value,
    student_email: email.value,
    student_address: address.value,
    student_phone: phone.value,
  };

  try {
    await axios.post("http://localhost:3000/students", newStudent);
    await getAllUsers();
    closeAddStudentModal();
  } catch (error) {
    console.error("loi:", error);
  }
};
const currentStudent = ref({});

const openEditStudentModal = (student) => {
  currentStudent.value = { ...student };
  showEditStudentModal.value = true;
};

const closeEditStudentModal = () => {
  showEditStudentModal.value = false;
};

// xoa
const deleteStudent = async (id) => {
  if (confirm("Bạn có chắc chắn muốn xóa sinh viên này không?")) {
    try {
      await axios.delete(`http://localhost:3000/students/${id}`);
      await getAllUsers();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  }
};
onMounted(() => {
  getAllUsers();
});
</script>

<style scoped>
body {
  color: #566787;
  background: #f5f5f5;
  font-family: "Varela Round", sans-serif;
  font-size: 13px;
}
.table-responsive {
  margin: 30px 0;
}
.table-wrapper {
  background: #fff;
  padding: 20px 25px;
  border-radius: 3px;
  min-width: 1000px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
.table-title {
  padding-bottom: 15px;
  background: #435d7d;
  color: #fff;
  padding: 16px 30px;
  min-width: 100%;
  margin: -20px -25px 10px;
  border-radius: 3px 3px 0 0;
}
.table-title h2 {
  margin: 5px 0 0;
  font-size: 24px;
}
.table-title .btn-group {
  float: right;
}
.table-title .btn {
  color: #fff;
  float: right;
  font-size: 13px;
  border: none;
  min-width: 50px;
  border-radius: 2px;
  border: none;
  outline: none !important;
  margin-left: 10px;
}
.table-title .btn i {
  float: left;
  font-size: 21px;
  margin-right: 5px;
}
.table-title .btn span {
  float: left;
  margin-top: 2px;
}
table.table tr th,
table.table tr td {
  border-color: #e9e9e9;
  padding: 12px 15px;
  vertical-align: middle;
}
table.table tr th:first-child {
  width: 60px;
}
table.table tr th:last-child {
  width: 100px;
}
table.table-striped tbody tr:nth-of-type(odd) {
  background-color: #fcfcfc;
}
table.table-striped.table-hover tbody tr:hover {
  background: #f5f5f5;
}
table.table th i {
  font-size: 13px;
  margin: 0 5px;
  cursor: pointer;
}
table.table td:last-child i {
  opacity: 0.9;
  font-size: 22px;
  margin: 0 5px;
}
table.table td a {
  font-weight: bold;
  color: #566787;
  display: inline-block;
  text-decoration: none;
  outline: none !important;
}
table.table td a:hover {
  color: #2196f3;
}
table.table td a.edit {
  color: #ffc107;
}
table.table td a.delete {
  color: #f44336;
}
table.table td i {
  font-size: 19px;
}
table.table .avatar {
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 10px;
}
.pagination {
  float: right;
  margin: 0 0 5px;
}
.pagination li a {
  border: none;
  font-size: 13px;
  min-width: 30px;
  min-height: 30px;
  color: #999;
  margin: 0 2px;
  line-height: 30px;
  border-radius: 2px !important;
  text-align: center;
  padding: 0 6px;
}
.pagination li a:hover {
  color: #666;
}
.pagination li.active a,
.pagination li.active a.page-link {
  background: #03a9f4;
}
.pagination li.active a:hover {
  background: #0397d6;
}
.pagination li.disabled i {
  color: #ccc;
}
.pagination li i {
  font-size: 16px;
  padding-top: 6px;
}
.hint-text {
  float: left;
  margin-top: 10px;
  font-size: 13px;
}
/* Custom checkbox */
.custom-checkbox {
  position: relative;
}
.custom-checkbox input[type="checkbox"] {
  opacity: 0;
  position: absolute;
  margin: 5px 0 0 3px;
  z-index: 9;
}
.custom-checkbox label:before {
  width: 18px;
  height: 18px;
}
.custom-checkbox label:before {
  content: "";
  margin-right: 10px;
  display: inline-block;
  vertical-align: text-top;
  background: white;
  border: 1px solid #bbb;
  border-radius: 2px;
  box-sizing: border-box;
  z-index: 2;
}
.custom-checkbox input[type="checkbox"]:checked + label:after {
  content: "";
  position: absolute;
  left: 6px;
  top: 3px;
  width: 6px;
  height: 11px;
  border: solid #000;
  border-width: 0 3px 3px 0;
  transform: inherit;
  z-index: 3;
  transform: rotateZ(45deg);
}
.custom-checkbox input[type="checkbox"]:checked + label:before {
  border-color: #03a9f4;
  background: #03a9f4;
}
.custom-checkbox input[type="checkbox"]:checked + label:after {
  border-color: #fff;
}
.custom-checkbox input[type="checkbox"]:disabled + label:before {
  color: #b8b8b8;
  cursor: auto;
  box-shadow: none;
  background: #ddd;
}
</style>
