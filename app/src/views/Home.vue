<template>
<div class="fixedheader">
  <Headerfront />
</div>
  <SanityBlocks :blocks="blocks" :serializers="serializers" />
  <div class="frontpage">
    <section class="frontpage__landing">
      <section class="frontpage__landing-image">
        <img
          src="public/images/logo-portfolio-inverted.svg"
          alt=""
          class="frontpage-logo"
        />
      </section>
      <svg
        width="46"
        height="50"
        viewBox="0 0 46 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="frontpage__landing-arrow arrow-animation"
      >
        <path
          d="M26 3C26 1.34315 24.6569 0 23 0C21.3431 0 20 1.34315 20 3L26 3ZM20.8787 49.1213C22.0503 50.2929 23.9497 50.2929 25.1213 49.1213L44.2132 30.0294C45.3848 28.8579 45.3848 26.9584 44.2132 25.7868C43.0416 24.6152 41.1421 24.6152 39.9706 25.7868L23 42.7574L6.02944 25.7868C4.85786 24.6152 2.95837 24.6152 1.7868 25.7868C0.615224 26.9584 0.615224 28.8579 1.7868 30.0294L20.8787 49.1213ZM20 3L20 47H26L26 3L20 3Z"
          fill="white"
        />
      </svg>
    </section>

    <section id="frontpage__project-section" class="frontpage__projects" v-for="project in projects">
      <div class="project__image"><img :src="project.frontpageImage" /></div>
      <div class="project__button-container">
        <router-link :to="project.slug.current">
          <button class="project__button">
            {{ project.projectName }}
          </button>
        </router-link>
      </div>
    </section>
    <svg width="46" height="50" viewBox="0 0 46 50" fill="none" xmlns="http://www.w3.org/2000/svg" class="arrow-animation frontpage__midpage-arrow">
      <path d="M26 3C26 1.34315 24.6569 0 23 0C21.3431 0 20 1.34315 20 3L26 3ZM20.8787 49.1213C22.0503 50.2929 23.9497 50.2929 25.1213 49.1213L44.2132 30.0294C45.3848 28.8579 45.3848 26.9584 44.2132 25.7868C43.0416 24.6152 41.1421 24.6152 39.9706 25.7868L23 42.7574L6.02944 25.7868C4.85786 24.6152 2.95837 24.6152 1.7868 25.7868C0.615224 26.9584 0.615224 28.8579 1.7868 30.0294L20.8787 49.1213ZM20 3L20 47H26L26 3L20 3Z" fill="#FF5C52"/>
    </svg>


    <div v-if="loading">.......</div>
    <div v-else>
      <section id="frontpage__about-section" class="about" v-for="about in about">
        <h1 class="about__heading">{{ about.heading }}</h1>
        <main class="about__content">
          <section class="about__content-left">
              <div class="portrait-container">
              <img class="content__left-portrait" :src="about.portrait" />
            </div>
            <div class="software-container">
              <ul class="content__left-software" v-for="tech in about.software">
                <li>
                  {{ tech }}
                </li>
              </ul>
            </div>
          </section>

          <section class="about__content-right">
            <div class="about__content-info" v-for="info in about.info">
              <span v-for="text in info.children">
                {{ text.text }}
              </span>
            </div>
            <div class="about__content-contact">
              {{ about.contactInfo }}
            </div>
            <div class="about__content-values">
              <div v-for="value in about.values">
                <span v-for="text in value.children">
                  {{ text.text }}
                </span>
                
              </div>
            </div>
          </section>
        </main>

        <section class="about__socials">
          <a :href="link.url"
            class="about__socials-button"
            v-for="link in about.socials"
          >
            <img :src="link.icon"/>
          </a>
        </section>
      </section>
    </div>
  </div>
  <Footer/>
</template>

<script>
import Headerfront from "../components/Headerfront.vue";
import Footer from "../components/Footer.vue";
import sanityMixin from "../mixins/sanityMixin.js";
import queryProjects from "../groq/frontpageProjects.groq?raw";
import queryAbout from "../groq/frontpageAbout.groq?raw";
import sanity from "../sanity.js";
import { SanityBlocks } from "sanity-blocks-vue-component";

export default {

  mixins: [sanityMixin],

  async created() {
    await this.sanityFetchProjects(queryProjects);    //Fetching frontpage data from sanity only projects
    await this.sanityFetchAbout(queryAbout);          //Fetching about data from sanity importing it to frontpage
  },

  components: {
    Headerfront,
    Footer,
    SanityBlocks,   //tested sanityBlocks on one component, sticked to type:text in schemas on rest of textcomponent
  },

  data() {
    return {
      appName: import.meta.env.VITE_APP_NAME,
      projects: [],
      about: [],
    };
  },

  methods: {
    async sanityFetchProjects(query, params) {                //fetching projects from sanity
      this.projects = await sanity.fetch(query, params);
      this.loading = false;
    },
    async sanityFetchAbout(query, params) {                   //fetching about from sanity
      this.about = await sanity.fetch(query, params);
      this.loading = false;
    },
  },
};
</script>

<style>
.fixedheader{
  position: sticky;
  top: 0;
  z-index: 1;
}

/*  Landingpage */
.frontpage__landing {
  background: #ff5c52;
  color: white;
  height: 90vh;
  width: 100vw;
  font-family: var(--first-font-family);
  text-align: center;
  margin-bottom: 30px;
}

.frontpage__landing-arrow {
  margin-top: 30px;
}

.frontpage__midpage-arrow {
  width: 100vw;
  margin-top: 40px;
}

.arrow-animation {
  transform: translateY(-20px);
  animation-name: bounce;
  animation-iteration-count: infinite;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
}


@keyframes bounce {
  from {
    transform: translateY(0px);
  }
  40% {
    transform: translateY(-20px);
  }
  to {
    transform: translateY(0px);
  }
}

.frontpage-logo {
  height: 50vh;
  margin: 80 0 80 0;
}

/*  frontpage project section  */
.frontpage__projects {
  display: flex;
  padding: 10px;
  height: 480px;
  margin: 0 50 0 50;
}

.frontpage__projects:nth-child(2n + 3) {
  flex-flow: row-reverse;
}

.project__image img {
  height: 430px;
  width: 730px;
}

.project__button {
  border-radius: 40px;
  box-shadow: 2px 5px 8px rgba(0, 0, 0, 0.2);
  height: 50px;
  width: 300px;
  margin-left: -100px;
  margin-top: 130px;
  background: var(--foreground);
  font-weight: var(--font-regular);
  color: white;
}

.project__button:hover {
  background: #ff5b52a0;
  transition: 1s;
  box-shadow: 0px 0px white;
}

.frontpage__projects:nth-child(2n + 3) .project__button {
  margin-right: -100px;
}  

/* ABOUT */
.about {
  width: 100vw;
  margin: 100 0 0 0;
}

.about__heading {
  text-align: center;
  margin-bottom: 40px;
}

.about__content {
  display: grid;
  grid-template-columns: 2fr 3fr;
  margin: 0 150 0 150;
  white-space: pre-line;          
}

/* Content right side of about section */
.about__content-right {
  margin: 0 70 0 70;
}

.about__content-info {
  font-family: var(--second-font-family);
}

.about__content-contact {
  margin: 50;
  text-align: center;
  white-space: pre-line;
}

/* Content left side of about section */
.content__left-portrait {
  width: 300px;
  margin-bottom: 20px;
}

.content__left-software {
  padding-left: 90px;
  margin-top: 5px;
}

.about__socials {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 50px 0 0 0;
}

.about__content-values div {
  display: block;
}

/* Content bottom of about section */

.about__socials-button {
  height: 50px;
  width: 50px;
  margin: 15px;
}

@media screen and (max-width: 1300px) {
  .project__button {
    position: absolute;
    right:0;
  }

  .frontpage__projects:nth-child(2n + 3) .project__button {
    left: 0;
    margin-left: 10px; 
  }

  .content__left-portrait {
    width: 220px;
    margin-left: 30px;
  }
    
}

/* TABLET */
@media screen and (max-width: 800px) {
  /* LANDING SECTION */
  .frontpage{
    margin: 0;
  }

  .frontpage-logo {
    height: 50vh;
    margin-top: 100;
  }

  .frontpage__landing-arrow{
    margin-top: -2%;
  }

  .frontpage__midpage-arrow {
    margin-bottom: -10%;
}

  /* PROJECT SECTION */
  #frontpage__project-section{
    height: 450px;
  }

  .frontpage__projects {
    display: grid;
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 420px;
  }

  .project__image img {
    width: 100%;
    height: 350px;
    object-fit: cover;
  }

  .project__button-container {
    display: flex;
    justify-content: center;
    margin-top: -75px;
  }

  .frontpage__projects:nth-child(2n + 3) .project__button {
    margin-right: 0px;
  }
  
  .project__button {
    margin: 0;
    position: unset;
    font-size: var(--font-size-information);
  }

/* ABOUT SECTION */
  .about {
    padding: 10%;
    font-size: var(--font-size-information);
  }

  .about__content {
    display: block;
    margin: 0 ;
  }

  .portrait-container {
    display: flex;
    justify-content: flex-end;
  }
  .content__left-portrait {
    width: 170px;
    margin-top: 0;
    margin-right: 20px;
  }
    
  .software-container {
    margin-top: -160px;
  }

  .content__left-software {
    padding-left: 10%;
  }

  .about__content-right {
    margin: 50 20 20 20;
  }

  .about__socials-button {
    height: 50px;
    width: 50px;
  }
  
}


/*  MOBILE  */
@media screen and (max-width: 500px) {
  /* LANDING SECTION */
  .frontpage__landing {
    height: 90vh;
  }

  .frontpage__landing-arrow{
    margin-top: 12vh;
  }

  .frontpage__midpage-arrow {
    margin-bottom: 10vh;
}

  .frontpage-logo {
    height: 30vh;
    margin-top: 40%;
  }

  /* PROJECT SECTION */
  #frontpage__project-section{
    height: 370px;
  }

  .project__image img {
    height: 280px;
  }

  .project__button-container {
    margin-top: -40px;
    height: 100px;
  }


/* ABOUT SECTION */
  .about {
    padding: 0 10 0 10;
    margin: 0;
  }

  .about__heading {
    margin: 0 0 30 0;
  }

  .about__content {
  font-size: var(--font-size-mobile);
  } 

  .content__left-portrait {
    width: 140px;
  } 
}
</style>

