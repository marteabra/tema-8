<template>
  <Headerproject />
  <main class="project">
    <h1 class="project__heading">HEADING HERE</h1>
    <img src="" alt="frontimage" class="project__heading-image" />
    <section class="project__info">
      <div class="project__info-brief"></div>
      <div class="project__info-client"></div>
      <div class="project__info-idea"></div>
    </section>
  </main>
</template>

<script>
import Headerproject from "../components/Headerproject.vue";
import sanityMixin from "../mixins/sanityMixin.js";
import query from '../groq/projectpage.groq?raw';

export default {
  components: {
    Headerproject,
  },
  
  mixins: [sanityMixin],

  data() {
    return {
      project: null
    }
  },

  async created() {
    
    const params = {
      projectSlug: this.$route.params.projectSlug
    },

    await this.sanityFetchParams(query, params);
    
  }
};
</script>

<style>
.project__heading {
  text-align: center;
  padding-top: 40px;
  color: var(--font-color-grey);
}

.project__heading-image {
  background: grey;
  height: 70vh;
  width: 100vw;
}
</style>