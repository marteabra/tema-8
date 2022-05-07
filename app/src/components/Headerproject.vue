<template>
  <main class="header">
    <a href="/">
      <img
        src="public/images/logo-portfolio.svg"
        alt="logo-inverted"
        class="header__logo"
      />
    </a>
    <li class="header__list">
      <a href="">
        <ul>
          PROJECTS
        </ul>
      </a>
      <a href="">
        <ul>
          ABOUT
        </ul>
      </a>
    </li>
  </main>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
.header {
  display: flex;
  background: var(--background);
  position: relative;
  height: 10vh;
  padding: 5 0 0 0;
}

a {
  text-decoration: none;
  color: var(--foreground);
  font-family: var(--first-font-family);
  font-size: 15px;
}

a:hover {
  color: #ff5b52aa;
}

.header__logo {
  height: 60px;
}

.header__list {
  display: flex;
  list-style: none;
  position: absolute;
  right: 0;
  align-self: center;
}

.header__list ul {
  margin-right: 40px;
}
</style>