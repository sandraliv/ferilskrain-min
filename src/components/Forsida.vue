<template>
  <div class="um-mig">
    <div class="box-about-me">
      <section>
        <p id="about-mee">{{ $t("about_me") }}</p>
        <p>- Ég er 28 ára,finnst gaman að forrita og læra nýja hluti.</p>
        <p>
          - Ég er með B.A. gráðu í félagsráðgjöf og útskrifast sem
          tölvunarfræðingur í júní.
        </p>
        <p>
          Þessi vefur er hýstur á Render gerður með Vue.js, skrifaður með
          Typescript.
        </p>
        <p>ATH þetta er vefur í vinnslu</p>
        <p>TAKK fyrir að koma í heimsókn :)</p>
      </section>
    </div>

    <div class="myndabox">
      <Transition name="bounce">
        <img v-show="showImage" id="sandra-mynd" src="@/assets/mynd.jpg" />
      </Transition>
    </div>
  </div>
  <div class="um-mig extra">
    <div class="flex-it">
      <div class="box-about-me 2">
        <section class="haefni">
          <p id="about-mee">Bakendakista</p>
          <img
            v-for="(skill, index) in skills"
            :key="index"
            class="small-logos"
            :src="skill.src"
            :alt="skill.alt"
          />
        </section>
      </div>
      <div class="box-about-me 2">
        <section class="haefni">
          <p id="about-mee">Framendakista</p>
          <img
            v-for="(skill, index) in skills_fe"
            :key="index"
            class="small-logos"
            :src="skill.src"
            :alt="skill.alt"
          />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForsidaComponent",
  mounted() {
    this.scrollToSection();
  },

  data() {
    return {
      skills: [
        { src: require("../assets/python.png"), alt: "Python Logo" },
        { src: require("../assets/hiclipart.com.png"), alt: "Random Logo" },
        {
          src: require("../assets/javascript-39404.png"),
          alt: "JavaScript Logo",
        },
        {
          src: require("../assets/typescript-512.png"),
          alt: "TypeScript Logo",
        },
        {
          src: require("../assets/pngwing.png"),
          alt: "Spring Boot logo",
        },
        {
          src: require("../assets/docker-logo-png-transparent.png"),
          alt: "Spring Boot logo",
        },
        {
          src: require("../assets/6729f20412c00-SQLite.png"),
          alt: "Spring Boot logo",
        },
        {
          src: require("../assets/icons8-kotlin-96.png"),
          alt: "Spring Boot logo",
        },
        {
          src: require("../assets/android.svg"),
          alt: "Spring Boot logo",
        },
        {
          src: require("../assets/fastapi-seeklogo.png"),
          alt: "FastAPI logo",
        },
        {
          src: require("../assets/node-js.svg"),
          alt: "FastAPI logo",
        },
        {
          src: require("../assets/c-original.svg"),
          alt: "C language logo",
        },
      ],
      skills_fe: [
        {
          src: require("../assets/thymeleaf-logo.png"),
          alt: "Thymeleaf Logo",
        },
        {
          src: require("../assets/logo.png"),
          alt: "Vue.js logo",
        },
        { src: require("../assets/CSS-Transparent-Logo.png"), alt: "CSS Logo" },
        { src: require("../assets/html.png"), alt: "HTML Logo" },
        { src: require("../assets/sass.png"), alt: "Sass Logo" },
      ],
      showImage: true,
      buttonText: "Fela mynd",
    };
  },
};
</script>

<style scoped>
#boxz {
  max-width: 940px;
  min-width: 940px;
}

.um-mig-extra.extra {
  display: flex;
  justify-content: center;
  padding: 30px;
}

.box-about-me .small-logos {
  height: 128px;
  width: 128px;
  padding: 4px;
}
.flex-it {
  justify-content: center;
  max-width: 940px;
  display: flex;
  gap: 40px;
}
.um-mig.extra {
  display: flex;
  justify-content: center;
}

#about-mee {
  color: rgb(64, 53, 134);
  font-size: 30px;
  margin: 0;
  font-weight: 500;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

.haefni {
  font-size: 14px;
  max-width: 500px;
}

.haefni p {
  padding-bottom: 20px;
}

#welcome {
  font-size: 80px;
  padding: 0;
  margin: 30px;
  color: rgba(5, 2, 39, 0.26);
  font-weight: 600;
}

/* CSS */
.buttonText {
  background-color: rgba(5, 2, 39, 0.26);

  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  flex-shrink: 0;
  font-family:
    "Inter UI",
    "SF Pro Display",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    "Open Sans",
    "Helvetica Neue",
    sans-serif;
  font-size: 15px;
  font-weight: 500;
  height: 2rem;
  padding: 0 1.6rem;
  text-align: center;
  text-shadow: rgba(0, 0, 0, 0.25) 0 3px 8px;
  transition: all 0.5s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.buttonText:hover {
  box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
  transition-duration: 0.1s;
}

.buttonText {
  width: 200px;
}

.myndabox {
  max-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

#sandra-mynd {
  max-width: 100%;
  border-radius: 10px;
}

.box-about-me {
  max-width: 652px;
  width: 50%;
  padding: 20px;
  border-radius: 10px;
  background-color: #d6d8da;
}

.um-mig {
  display: flex; /* Use flexbox for layout inside */
  flex-direction: row; /* Stack content vertically */
  text-align: left;
  justify-content: center;
  align-items: center;
  gap: 40px;
  font-family: newFont;
  margin-top: 30px;
}

section {
  padding: 10px;
  color: rgba(39, 33, 128, 0.836);
}

.flex-it {
  margin-bottom: 40px;
}

p {
  font-family: newFont;
  font-weight: 500;
}
</style>
