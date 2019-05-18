<template>
  <li>
    <div class="userImage-wrapper">
      <img :src="user.picture.medium">
    </div>
    <div class="userContent-wrapper">
      <p>
        {{user.name.title}} {{user.name.first}}
        <strong>{{user.name.last}}</strong>
      </p>
      <p>{{user.location.city | capitalizeFirstCha}}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: ["user"],
  filters: {
    capitalizeFirstCha(value) {
      if (value) {
        value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1);
      }
    }
  }
};
</script>

<style scoped>
li {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}

.userImage-wrapper {
  margin: 10px;
}

.userContent-wrapper {
  text-align: left;
}
</style>


