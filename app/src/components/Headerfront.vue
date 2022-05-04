<template>
  <main class="header">
    <a href="/">
      <div class="header__logo" href="">LOGO</div>
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
  padding: 40px 0 40px 0;
}

a {
  text-decoration: none;
  color: white;
  font-family: var(--first-font-family);
}

.header__logo {
  margin-left: 40px;
}

.header__list {
  display: flex;
  list-style: none;
  position: absolute;
  right: 0;
}

.header__list ul {
  margin-right: 40px;
}
</style>