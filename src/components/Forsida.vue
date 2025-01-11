<template>
  <div class="page-container">
    <div class="contains">
      <div class="um-mig">
        <img id="sandra-mynd" src="@/assets/mynd.jpg" />
        <section>
          <h2 @click="scrollToSection('sec-3')">Um mig</h2>
          <p class="box-about-me">
            Ég er 28 ára stúlka frá Akranesi og stunda nám í tölvunarfræði við
            Háskóla Íslands. Mér finnst sérstaklega gaman að forrita, leysa
            vandamál, hanna og þróa. Þessi vefur minn er ætlaður til að sýna
            hæfni mína í forritun og þá vefforritun sérstaklega. Ég bjó einnig
            til vefþjónustu (API) með Java Spring sem sækir öll gögn er varðar
            námsferilinn minn. Hún keyrir á Render og þessi vefur er með gerður
            með Vue framenda. Ýtið <a href="">hér</a> fyrir Angular framework og
            <a href="">hér</a> fyrir Thymeleaf template framenda.
          </p>
        </section>
      </div>
      <section class="um-mig" id="sec-3">
        <p class="box-about-me">
          Ég er 28 ára stúlka frá Akranesi og stunda nám í tölvunarfræði við
          Háskóla Íslands. Mér finnst sérstaklega gaman að forrita, leysa
          vandamál, hanna og þróa. Þessi vefur minn er ætlaður til að sýna hæfni
          mína í forritun og þá vefforritun sérstaklega. Ég bjó einnig til
          vefþjónustu (API) með Java Spring sem sækir öll gögn er varðar
          námsferilinn minn. Hún keyrir á Render og þessi vefur er með gerður
          með Vue framenda. Ýtið <a href="">hér</a> fyrir Angular framework og
          <a href="">hér</a> fyrir Thymeleaf template framenda.
        </p>
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
};
</script>

<style>
.contains {
  display: flex;
  flex-direction: column;
}

#sandra-mynd {
  max-width: 20%;
  border-radius: 40px;
  box-shadow: 0 0 5px 1px rgba(0, 1, 186, 0.5);
}

.box-about-me {
  max-width: 300px;
}
.um-mig {
  display: flex; /* Use flexbox for layout inside */
  flex-direction: row; /* Stack content vertically */
  align-items: center; /* Center child items horizontally */
  text-align: left;
  justify-content: center;
}

section {
  padding: 50px;
  font-family: myFont;
  font-weight: 300;
}
</style>
