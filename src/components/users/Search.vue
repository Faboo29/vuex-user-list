<template>
  <form>
    <input
      id="searchUser"
      type="text"
      v-model="searchValue"
      @input="searchUsers"
      placeholder="Search users"
    >
  </form>
</template>

<script>
export default {
  data() {
    return {
      searchValue: ""
    };
  },
  methods: {
    searchUsers() {
      this.$store.commit("ENTER_SEARCH", this.searchValue);
    }
  }
};
</script>

<style scoped>
#searchUser {
  width: 100%;
  padding: 10px 20px;
  font-family: Arial;
  border-radius: 60px;
  border-width: 1px;
  box-sizing: border-box;
  max-width: 600px;
  outline: none;
  margin: 20px auto;
}
</style>

