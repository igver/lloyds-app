<template>
  <div>
    <user-section>
      <div>
        <h1>
          User: {{ user.title }}<span v-if="!isLoading && !error">.</span>
          {{ user.firstName }}
          {{ user.lastName }}
        </h1>
        <base-loader v-if="isLoading"></base-loader>
        <p v-if="(!isLoading && error) || JSON.stringify(user) === '{}'">
          {{ error }}
        </p>
        <user-box v-if="!isLoading && !error" page="detail">
          <div class="all-info">
            <div :class="UserBoxClass" class="image">
              <img :src="user.picture" />
            </div>
            <div class="right-side">
              <div class="divider-box first">
                <h3>Date of birth</h3>
                <p>{{ new Date(user.dateOfBirth).toLocaleDateString() }}</p>
              </div>
              <div class="divider-box">
                <h3>Address</h3>
                <p>
                  {{ user.location.street }}, {{ user.location.city }} ({{
                    user.location.state
                  }}), {{ user.location.country }}
                </p>

                <!-- <p>{{ user.location.timezone }}</p> -->
              </div>
            </div>
          </div>
          <div class="profile-info">
            <p v-if="user.registerDate === user.registerDate">
              Profile created:
              {{ new Date(user.registerDate).toLocaleDateString() }}
            </p>
            <p v-else>
              Last updated:
              {{ new Date(user.updatedDate).toLocaleDateString() }}
            </p>
          </div>
          <div class="contact-box">
            <base-button-users>
              <a
                :href="
                  'tel:' + user.phone.split(' ').join('').split('-').join('')
                "
                ><img
                  src="@/assets/img/phone-solid.svg"
                  alt="Phone icon"
                  width="13"
                  height="13"
                />Phone</a
              >
            </base-button-users>
            <base-button-users>
              <a :href="'mailto:' + user.email"
                ><img
                  src="@/assets/img/envelope-solid.svg"
                  alt="Phone icon"
                  width="13"
                  height="13"
                />Email</a
              >
            </base-button-users>
          </div>
        </user-box>
      </div>
    </user-section>
  </div>
</template>

<script>
import UserSection from "@/components/UserSection.vue";
import UserBox from "@/components/UserBox.vue";
import BaseButtonUsers from "@/components/UI/BaseButtonUsers.vue";
import BaseLoader from "@/components/UI/BaseLoader.vue";

export default {
  layout: "users",
  components: {
    UserSection,
    UserBox,
    BaseButtonUsers,
    BaseLoader,
  },
  data() {
    return {
      userId: this.$route.params.id,
      user: {},
      isLoading: false,
      error: null,
    };
  },
  computed: {
    UserBoxClass() {
      if (this.user.gender === "female") {
        return "f";
      } else {
        return "m";
      }
    },
  },
  // async fetch() {
  //   this.isLoading = true;
  //   await fetch("https://dummyapi.io/data/v1/user/" + this.userId, {
  //     headers: {
  //       "app-id": "63406fc00d509c3aecff1578",
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       this.isLoading = false;
  //       console.log(data);
  //       this.user = data;
  //     });
  // },
  methods: {
    getData() {
      this.isLoading = true;
      this.error = null;
      fetch("https://dummyapi.io/data/v1/user/" + this.userId, {
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
          //console.log(data);

          if (JSON.stringify(data) === "{}") {
            throw new Error("This user doesn't exist");
          } else {
            this.user = data;
          }
        })
        .catch((error) => {
          //console.log(error);
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
p {
  margin-top: 0;
  margin-bottom: 5px;
}

p:last-child {
  margin-bottom: 0px;
}

h3 {
  margin-top: 0;
  margin-bottom: 10px;
}

.f {
  box-shadow: 0 0 7px 0 #ffbcbc;
}
.m {
  box-shadow: 0 0 7px 0 #6cacff;
}

.user-box {
  flex-direction: column;
}

.all-info {
  margin-bottom: 50px;
}

.right-side {
  width: 100%;
}

.user-box .image {
  width: 100%;
  height: auto;
  max-width: 130px;
  max-height: 130px;
  margin-bottom: 25px;
  border-radius: 50%;
  overflow: hidden;
}

.user-box .image img {
  width: 100%;
  height: 100% !important;
  object-fit: cover;
}

.user-box .divider-box {
  border-top: 1px solid rgb(211, 211, 211);
  padding: 10px 0;
}

.user-box .profile-info {
  border-top: 1px solid rgb(211, 211, 211);
  border-bottom: 1px solid rgb(211, 211, 211);
  padding: 10px 0;
  font-weight: 600;
}

.user-box .contact-box {
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  padding-top: 20px;
}

@media (min-width: 600px) {
  .all-info {
    display: flex;
    flex-direction: row;
  }

  .user-box .image {
    margin-right: 30px;
    margin-bottom: 0;
  }

  .user-box .divider-box {
    border: unset;
    padding: 10 0px;
    min-width: 110px;
  }

  .user-box .divider-box.first {
    border-bottom: 1px solid rgb(211, 211, 211);
  }

  .user-box .contact-box {
    border: unset;
  }
}
</style>
