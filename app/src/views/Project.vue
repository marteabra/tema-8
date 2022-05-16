<template>
  <Headerproject />
  <div v-if="loading">.......</div>
  <div v-else>
    <main class="project">
      <h1 class="project__heading">{{ result.projectName }}</h1>
      <img :src="result.headingImage" class="project__heading-image" />
      <section class="project__info">
        <div class="project__info-brief">{{ result.brief }}</div>
        <div class="project__info-client">{{ result.client }}</div>
        <div class="project__info-idea">{{ result.idea }}</div>
      </section>
      <section class="project__images" v-for="image in result.images">
        <img :src="image" alt="productImage" />
      </section>
    </main>
  </div>
  <Footer />
</template>

<script>
import Headerproject from "../components/Headerproject.vue";
import sanityMixin from "../mixins/sanityMixin.js";
import query from "../groq/projectpage.groq?raw";
import Footer from "../components/Footer.vue";

export default {
  components: {
    Headerproject,
    Footer,
  },

  mixins: [sanityMixin],

  data() {
    return {};
  },

  async created() {
    const params = {
      projectSlug: this.$route.params.projectSlug,
    };

    await this.sanityFetch(query, params);
  },
};
</script>

<style>
.project__heading {
  text-align: center;
  margin-top: 60px;
  color: var(--font-color-grey);
  width: 100vw;
  margin-bottom: 20px;
}

.project__heading-image {
  height: 70vh;
  width: 100vw;
  object-fit: cover;
}

.project__images,
.project__info {
  margin: 20 150 20 150;
}

.project__info div {
  margin: 40px 0 40 0;
}
</style>