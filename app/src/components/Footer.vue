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
        <a href="https://github.com/marteabra">
          <img  src="public/images/github-icon-red.png" alt="github icon button" />
        </a>
        <a href="https://www.linkedin.com/in/marte-abrahamsen-22a501175/">
          <img src="public/images/linkedin-icon-red.png" alt="linkedin icon button" />
        </a>
        <a href="#">
          <img src="public/images/ig-icon-red.png" alt="" />
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

.footer__info {
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

@media screen and (max-width: 800px) {
  .footer {
  margin: 100 0 30 0;
}

.footer__info {
  font-size: 0.7rem;
}

.footer__social-links {
  display: grid;
}

.footer__social-links img {
  height: 25px;
  width: 25px;
}
}
</style>