<template>
  <main class="header">
    <a href="/">
      <img
        src="public/images/logo-only-name-invert.svg"
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
  background: var(--foreground);
  position: relative;
  height: 10vh;
  padding: 5 0 0 0;
}

a {
  text-decoration: none;
  color: white;
  font-family: var(--first-font-family);
  font-size: 15px;
}

a:hover {
  color: rgba(255, 255, 255, 0.643);
}

.header__logo {
  height: 25px;
  margin: 10 0 10 0;
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