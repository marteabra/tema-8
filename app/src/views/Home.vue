<template>
  <Headerfront />

  <div class="frontpage">
    <section class="frontpage__landing">
      <section class="frontpage__landing-text">
        <div class="frontpage__landing-text--left">HELLO AND WELCOME TO MY</div>
        <div class="frontpage__landing-text--middle">PORTFOLIO</div>
        <div class="frontpage__landing-text--right">
          GRAPHIC DESIGN & FRONTEND
        </div>
      </section>

      <section class="frontpage__landing--arrow">
        <div>
          <svg
            width="46"
            height="79"
            viewBox="0 0 46 79"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.8787 78.1213C22.0503 79.2929 23.9497 79.2929 25.1213 78.1213L44.2132 59.0294C45.3848 57.8579 45.3848 55.9584 44.2132 54.7868C43.0416 53.6152 41.1421 53.6152 39.9706 54.7868L23 71.7574L6.02944 54.7868C4.85786 53.6152 2.95837 53.6152 1.7868 54.7868C0.615224 55.9584 0.615224 57.8579 1.7868 59.0294L20.8787 78.1213ZM20 0L20 76H26L26 0L20 0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>
    </section>
    <section class="frontpage__projects" v-for="project in result">
      <div class="project__image"><img :src="project.frontpageImage" /></div>
      <button class="project__button">{{ project.projectName }}</button>
    </section>
  </div>
  <Footer />
</template>

<script>
import Headerfront from "../components/Headerfront.vue";
import Footer from "../components/Footer.vue";
import sanityMixin from "../mixins/sanityMixin.js";
import query from "../groq/frontpage.groq?raw";

export default {
  mixins: [sanityMixin],

  async created() {
    await this.sanityFetch(query);
  },

  components: {
    Headerfront,
    Footer,
  },

  data() {
    return {
      appName: import.meta.env.VITE_APP_NAME,
    };
  },
};
</script>

<style>
.frontpage__landing {
  background: #ff5c52;
  color: white;
  height: 90vh;
  font-family: var(--first-font-family);
  text-align: center;
}

.frontpage__landing-text {
  height: 70vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 0 100 0 100;
}

.frontpage__landing-text div {
  margin: 10 0 10 0;
}

.frontpage__landing-text--left {
  align-self: flex-start;
}
.frontpage__landing-text--middle {
  align-self: center;
  font-size: 130px;
}
.frontpage__landing-text--right {
  align-self: flex-end;
}

.frontpage__projects {
  padding: 10px;
  display: flex;
  height: 480px;
}

.frontpage__projects:nth-child(2n + 3) {
  flex-flow: row-reverse;
}

.project__image {
  height: 430px;
  width: 730px;
}

.project__button {
  background: var(--foreground);
  border-radius: 40px;
  align-self: center;
  height: 50px;
  width: 300px;
  margin-left: -40px;
  font-family: var(--second-font-family);
  color: white;
}
</style>

