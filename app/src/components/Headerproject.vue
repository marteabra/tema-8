<template>
  <main class="header">
    <a href="/">
      <img
        src="/public/images/logo-small-invert.svg"
        alt="logo-inverted"
        class="header__logo"
      />
    </a>
    <li class="header__list">
      <a href="#frontpage__project-section">
        <ul>
          PROJECTS
        </ul>
      </a>
      <a href="#frontpage__about-section">
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
  align-items: center;
}

a {
  text-decoration: none;
  color: var(--foreground);
  font-family: var(--first-font-family);
  font-size: 15px;
}

a:hover {
  color: rgba(255, 255, 255, 0.643);
}
.header__logo {
  height: 25px;
  margin: 0 0 0 10;
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

@media screen and (max-width: 800px) {
  .header{
    height: 8vh;
    padding: 0;
    justify-content: center;
    margin: 0;
    align-items: center;
  }

  .header a {
    font-size: 0.7rem;
  }
  .header__logo {
    height: 20px;
    align-self: center;
    margin: 0;
  }
  
  .header__list ul {
    display: none;
}
}
</style>