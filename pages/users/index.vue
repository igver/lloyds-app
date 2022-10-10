<template>
  <div>
    <user-section>
      <h1>Users</h1>
      <base-loader v-if="isLoading"></base-loader>
      <p v-if="!isLoading && (!usersData || usersData.length === 0) && !error">
        No data to preview!
      </p>
      <p v-if="!isLoading && error">
        {{ error }}
      </p>
      <ul v-if="!isLoading">
        <users-preview
          v-for="user in usersData"
          :key="user.id"
          :id="user.id"
          :title="user.title"
          :firstName="user.firstName"
          :lastName="user.lastName"
          :picture="user.picture"
        ></users-preview>
      </ul>
    </user-section>
  </div>
</template>

<script>
import UserSection from "@/components/UserSection.vue";
import UsersPreview from "@/components/UsersPreview.vue";
import BaseLoader from "@/components/UI/BaseLoader.vue";

export default {
  layout: "users",
  components: {
    UserSection,
    UsersPreview,
    BaseLoader,
  },
  data() {
    return {
      usersData: [],
      isLoading: false,
      error: null,
    };
  },
  methods: {
    getData() {
      this.isLoading = true;
      this.error = null;
      fetch("https://dummyapi.io/data/v1/user", {
        method: "GET",
        headers: {
          "app-id": "634064f2d106556de7c18a3a",
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          // console.log(res);
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Failed to fetch data, try again later.");
          }
        })
        .then((data) => {
          this.isLoading = false;
          //console.log(data.data);
          this.usersData = data.data;
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
          this.error = error.message;
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: center;
  column-gap: 30px;
  row-gap: 30px;
}

ul li {
  /* box-shadow: 0 2px 32px 0 rgb(0 0 0 / 14%); */
  /* background-color: #f3f3f3; */
  /* background-color: #fff; */
  flex: 0 0 100%;
}

@media (min-width: 500px) {
  ul li {
    flex: 0 0 calc(50% - 15px);
  }
}

@media (min-width: 767px) {
  ul li {
    flex: 0 0 calc(33.33% - 20px);
  }
}
</style>
