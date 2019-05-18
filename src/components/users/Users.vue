<template>
  <div class="userList-container">
    <h1>Test</h1>
    <Search/>
    <vueCustomScrollbar class="scroll-area" :settings="settings">
      <ul v-if="!loading">
        <User v-for="(user, index) in searchedUser" :key="index" :user="user"/>
      </ul>
    </vueCustomScrollbar>
    <div v-if="loading" class="loader">
      <Loader v-if="loading"/>
    </div>
  </div>
</template>

<script>
import Search from "./Search";
import User from "./User";
import Loader from "../../assets/Loader";

// Custom scrollbar
import VueCustomScrollbar from "vue-custom-scrollbar";

export default {
  data() {
    return {
      loaded: false,
      settings: {
        maxScrollbarLength: 60,
        swipeEasing: true
      }
    };
  },
  components: {
    User,
    Loader,
    Search,
    VueCustomScrollbar
  },
  computed: {
    searchedUser() {
      return this.$store.getters.getSearchedUsers;
    },
    loading() {
      return this.$store.getters.loading;
    }
  },
  created() {
    this.$store.dispatch("postUser");
  },
  mounted() {}
};
</script>

<style scoped>
.userList-container {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  overflow: hidden;
}

ul {
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  position: relative;
  margin: 20px auto;
  max-height: 600px;
}
.loader {
  height: 100%;
  display: flex;
  justify-content: center;
}
</style>