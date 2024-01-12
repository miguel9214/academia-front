<template>
  <div class="col-lg-8 offset-lg-2 mt-3">
    <div class="table-responsive">
      <table class="table">
        <thead class="table-light">
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Foto</th>
            <th>Registro</th>
            <th></th>
          </tr>
        </thead>
        <tbody class="table-group-divider" id="contenido">
          <tr v-if="this.loadData">
            <td colspan="6">
              <h3>Cargando...</h3>
            </td>
          </tr>
          <tr v-else v-for="(student, i) in students" :key="student.id">
            <td v-text="student.id"></td>
            <td v-text="student.name"></td>
            <td v-text="student.last_name"></td>
            <td>
              <img v-if="student.photo" style="width: 150px !important;"  :src="student.photo" class="img-thumbnail">
              <img v-else height="30" src="https://cdn0.iconfinder.com/data/icons/phosphor-regular-vol-4/256/user-circle-256.png">

            </td>
            <td
              v-text="new Date(student.created_at).toLocaleDateString('en-US')"
            ></td>
            <td colspan="3">
              <router-link
                :to="{ path: 'view/' + student.id }"
                class="btn btn-info"
              >
                <i class="fa-solid fa-eye"></i>
              </router-link>
              &nbsp;
              <router-link
                :to="{ path: 'edit/' + student.id }"
                class="btn btn-warning"
              >
                <i class="fa-solid fa-edit"></i>
              </router-link>
              &nbsp;
              <router-link
                :to="{ path: 'view/' + student.id }"
                class="btn btn-danger"
              >
                <i class="fa-solid fa-trash"></i>
              </router-link>
              &nbsp;
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      students: null,
      loadData: false,
    };
  },
  mounted() {
    this.getStudent();
  },
  methods: {
    getStudent() {
      this.loadData = true;
      axios.get("http://academia-back.test/api/v1/students").then((res) => {
        this.students = res.data;
        this.loadData = false;
      });
    },
  },
};
</script>
