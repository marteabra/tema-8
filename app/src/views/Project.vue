<template>
  <div class="fixedheader">
    <Headerproject class="header"/>
  </div>
  <div v-if="loading">.......</div>
  <div v-else>
    <main class="project">
      <h1 class="project__heading">{{ result.projectName }}</h1>
      <img :src="result.headingImage" class="project__heading-image" />
      <section class="project__info">
        <span class="project__info-brief">{{ result.brief }}</span>
        <span class="project__info-client">{{ result.client }}</span>
        <span class="project__info-idea">{{ result.idea }}</span>
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
import { SanityBlocks } from "sanity-blocks-vue-component";

export default {
  components: {
    Headerproject,
    Footer,
    SanityBlocks
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
.header {
  position: fixed;
  top: 0;
}

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

.project__info span {
  margin: 20 100 20 100;
}

.project__info {
  display: grid;
  white-space: pre-line;
}

.project__info span:nth-child(2) {
  text-align: right;
}

@media screen and (max-width: 800px) {
  .project__info {
    margin: 0;
  }

  .project__images {
    width: 100vw;
    margin: 10 0 0 0;
  }
}

@media screen and (max-width: 500px) {
  
.project__heading {
  width: 55vw;
  font-size: 1.5rem;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
}

.project__heading-image {
  height: 30vh;
}

.project__images{
  margin: 10 0 0 0;
}

 .project__info {
   margin: 20px;
   font-size: 0.8rem;
 }

.project__info span {
  margin: 10;
}
.project__info span:nth-child(2) {
  text-align: left;
}
}
</style>