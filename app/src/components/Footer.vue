<template>
  <main class="footer">
    <section class="footer__container">
      <section class="footer__info">
        <div>Let`s Chat!</div>
        <br />
        <br />
        <div>marte.abrahams1@hotmail.com</div>
        <br />
        <div>+47 480 62 326</div>
      </section>
      <section class="footer__social-links">
        <a href="#">
          <img src="public/images/facebook-icon-red.png" alt="" />
        </a>
        <a href="#">
          <img src="public/images/ig-icon-red.png" alt="" />
        </a>
        <a href="#">
          <img src="public/images/linkedin-icon-red.png" alt="" />
        </a>
      </section>
    </section>
  </main>
</template>

<script>
export default {
  setup() {},
};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  font-size: var(--font-size-footer);
  margin: 100px 0 50px 0;
}

.footer__container {
  display: flex;
  justify-content: space-between;
  width: 80vw;
}

.footer__information {
  font-family: var(--second-font-family);
  font-weight: 400;
}

.footer__social-links {
  width: 10vw;
  display: flex;
  justify-content: space-between;
}

.footer__social-links img {
  height: 30px;
  width: 30px;
}
</style>