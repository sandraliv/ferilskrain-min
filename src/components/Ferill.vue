<template>
  <div>
    <section class="about-section">
      <p style="font-size: 30px; padding: 0; margin: 0; font-family: myFont">
        {{ $t("career") }}
      </p>
    </section>
    <div class="um-mig">
      <img id="sandra-mynd" src="@/assets/askja.avif" />
      <section id="sec-1">
        <h3>{{ $t("askja.title") }}</h3>
        <p>{{ $t("askja.duration") }}</p>
        <p class="box-about-me">{{ $t("askja.description") }}</p>
      </section>
    </div>
    <div class="um-mig">
      <img id="sandra-mynd" src="@/assets/nordural.jpg" />
      <section id="sec-2">
        <h3>{{ $t("nordural.title") }}</h3>
        <p>{{ $t("nordural.duration") }}</p>
        <p class="box-about-me">{{ $t("nordural.description") }}</p>
      </section>
    </div>
    <div class="um-mig">
      <img id="sandra-mynd" src="@/assets/olis.png" />
      <section id="sec-3">
        <h3>{{ $t("olis.title") }}</h3>
        <p>{{ $t("olis.duration") }}</p>
        <p class="box-about-me">{{ $t("olis.description") }}</p>
      </section>
    </div>
    <button @click="switchLanguage('is')">Íslenska</button>
    <button @click="switchLanguage('en')">English</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FerillComponent",
  methods: {
    switchLanguage(language: string): void {
      this.$i18n.locale = language;
    },
  },
});
</script>

<style scoped>
#sandra-mynd {
  max-width: 30%;
  border-radius: 20px;
  box-shadow: 0 0 5px 1px rgba(0, 1, 186, 0.5);
}

.about-section {
  background-image: linear-gradient(-90deg, #0f2f4e, #7f7e85);
  color: #fff;
}

.box-about-me {
  max-width: 300px;
}

.scroll-arrow {
  cursor: pointer;
  z-index: 2; /* Make sure the arrow is above other content */
}

.um-mig {
  display: flex; /* Use flexbox for layout inside */
  flex-direction: row; /* Stack content vertically */
  align-items: center; /* Center child items horizontally */
  text-align: left;
  justify-content: center;
  height: 300px;
}

.um-mig:last-child {
  margin-bottom: 40px;
}

.um-mig section {
  padding: 50px;
  font-family: myFont;
  font-weight: 300;
}

.um-mig:nth-child(2) {
  margin-top: 40px;
}
</style>
