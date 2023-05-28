<template>
  <div>
    <h1>Home</h1>
    <div>
      <router-link to="/users">Users</router-link> 
    </div>
    <div>
      <router-link to="/lists">Lists</router-link>
    </div>
    <div>
      <router-link to="/notes">Notes</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>
