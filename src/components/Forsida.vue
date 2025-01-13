<template>
  <div class="um-mig">
    <div class="myndabox">
      <Transition name="bounce">
        <img v-show="showImage" id="sandra-mynd" src="@/assets/mynd.jpg" />
      </Transition>
      <button class="buttonText" role="button" @click="toggleImage">
        {{ buttonText }}
      </button>
    </div>
    <section>
      <h2 @click="scrollToSection('sec-3')">Um mig</h2>
      <p class="box-about-me">
        Ég heiti Sandra Liv Sigurðardóttir og er 28 ára tölvunarfræðinemi. Í
        frítímanum mínum finnst mér gaman að spila á rafmagnspíanóið mitt, spila
        tölvuleiki, prjóna og forrita e-ð skemmtilegt eins og þessa vefsíðu. Ég
        er einum áfanga frá því að ljúka tölvunarfræði námi mínu en þar að auki
        er ég með B.A. í félagsráðgjöf. Mér finnst sérstaklega gaman að forrita,
        leysa vandamál, hanna og þróa.
      </p>
      <p class="box-about-me">
        Þessi vefur minn er ætlaður til að sýna hæfni mína í forritun og þá
        vefforritun sérstaklega. Ég bjó einnig til vefþjónustu (API) með Java
        Spring sem sækir öll gögn er varðar námsferilinn minn. Hún keyrir á
        Render og þessi vefur er með gerður með Vue framenda, skrifaður með
        Typescript. Ýtið <a href="">hér</a> fyrir Angular framework og
        <a href="">hér</a> fyrir Thymeleaf template framenda.
      </p>
    </section>
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

<style>
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
  max-width: 300px;
}
.um-mig {
  display: flex; /* Use flexbox for layout inside */
  flex-direction: row; /* Stack content vertically */
  text-align: left;
  justify-content: center;
  align-items: center;
}

section {
  padding: 50px;
  font-family: myFont;
  font-weight: 300;
}
</style>
