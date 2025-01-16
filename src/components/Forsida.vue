<template>
  <div class="um-mig">
    <div class="box-about-me">
      <section>
        <p id="welcome">Hæ, velkomin á síðuna mína!</p>
        <p>
          Ég heiti Sandra Liv og er (í júní orðin) tölvunarfræðingur (á einn
          áfanga eftir). Ég er 28 ára, spila tölvuleiki, þykist spila á píanó og
          finnst gaman að forrita e-ð skemmtilegt. Ég er líka með B.A. gráðu í
          félagsráðgjöf.
        </p>
        <p>
          Ég setti upp þessa síðu aðallega til að leika mér og til að læra
          forrita með Vue (og fikta með TypeScript). Þessi vefur minn er ætlaður
          til að sýna hæfni mína í forritun og þá vefforritun sérstaklega. Ég
          bjó einnig til vefþjónustu með Java Spring sem sækir öll gögn er
          varðar námsferillinn minn, en ég tými ekki að borga hýsingu fyrir hana
          þannig ég gerði bara static json gögn á meðan. Þessi vefur er hýstur á
          Render (free instance), gerður með Vue3 framenda, skrifaður að hluta
          með Typescript. Innan skamms verður hægt að ýta
          <a href="">hér</a> fyrir sömu vefsíðu nema með Angular framenda og
          <a href="">hér</a> fyrir React.
        </p>
      </section>
    </div>

    <div class="myndabox">
      <Transition name="bounce">
        <img v-show="showImage" id="sandra-mynd" src="@/assets/mynd.jpg" />
      </Transition>
      <button class="buttonText" role="button" @click="toggleImage">
        {{ buttonText }}
      </button>
    </div>
  </div>
  <div class="um-mig">
    <div class="box-about-me">
      <section>
        <p>Forritunarmál sem ég kann</p>
        <p>Java, Python, C, SQL, JavaScript, Typescript, R</p>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForsidaComponent",
  mounted() {
    this.scrollToSection();
  },
  methods: {
    toggleImage() {
      this.showImage = !this.showImage;
      this.buttonText = this.showImage ? "Fela mynd" : "Sýna mynd";
    },
  },
  data() {
    return {
      showImage: true,
      buttonText: "Fela mynd",
    };
  },
};
</script>

<style scoped>
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

#welcome {
  font-size: 30px;
  padding: 0;
  margin: 0;
}
/* CSS */
.buttonText {
  background-image: linear-gradient(
    92.88deg,
    #0f2f4e 6.16%,
    /* Second color */ #47566a 45%,
    /* First color */ #7f7e85 70%
  );

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
  max-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
#sandra-mynd {
  max-width: 100%;
  border-radius: 40px;
  box-shadow: 0 0 5px 1px rgba(0, 1, 186, 0.5);
}

.box-about-me {
  max-width: 700px;
  border: 1px solid gray;
  box-shadow: 0px 0px 4px 1.8px rgb(146, 172, 212);
  width: fit-content;
  padding: 20px;
  border-radius: 4px;
}

.um-mig {
  display: flex; /* Use flexbox for layout inside */
  flex-direction: row; /* Stack content vertically */
  text-align: left;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

.page-container {
  background-color: black;
}

section {
  font-family: myFont;
  font-weight: 300;
}

p {
  font-family: myFont;
  font-weight: 300;
}
</style>
