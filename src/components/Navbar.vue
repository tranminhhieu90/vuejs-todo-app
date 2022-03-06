<template>
  <nav>
    <h1>MY VUE ROUTER</h1>
    <ul class="nav-link">
      <li>
        <router-link to="/">Todo</router-link>
      </li>
      <li><router-link to="/products">Products</router-link></li>
      <li><router-link to="/about">About</router-link>></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
nav {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
}
nav ul.nav-link {
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0;
}
nav ul.nav-link a {
  color: white;
  text-decoration: none;
}
nav ul.nav-link a:hover {
  color: rgb(83, 203, 25);
}
</style>
