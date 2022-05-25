<template>
  <div class="fixedheader">
    <Headerproject class="header"/>
  </div>
  <div v-if="loading">.......</div>
  <div v-else>
    <main class="project">
      <h1 class="project__heading">{{ result.projectName }}</h1>          <!-- Implementing results from project API to template, fetched from projectPage.groq -->
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

export default {
  components: {
    Headerproject,
    Footer
  },

  mixins: [sanityMixin],

  data() {
    return {};
  },

  async created() {
    const params = {
      projectSlug: this.$route.params.projectSlug,        // Creating slug for each project based on their projectName
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

.project__info{
  display: flex;
  justify-content: center;
}

.project__info span {
  width: 60ch;
}

.project__info {
  display: grid;
  white-space: pre-line;            /* Replacing sanity blockComponent, using white-space instead of more complicated plugins */
}

.project__info span:nth-child(2) {
  text-align: right;
}


/* For smaller computers */
@media screen and (max-width: 1300px) {
  .project__images,
  .project__info {
    margin: 20 50 20 50;
  }

  .project__info span {
    margin: 10;
  }
}

/* For Tablet */
@media screen and (max-width: 800px) {  
  .project__info {
    width: auto;
  }

  .project__images {
    width: 100vw;
    margin: 10 0 0 0;
  }
}

/* For mobile */
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
    font-size: 0.8rem;
  }

  .project__info span {
    margin: 10;
    width: 40ch;
  }

  .project__info span:nth-child(2) {
    text-align: left;
  }
}
</style>