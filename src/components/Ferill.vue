<template>
  <div class="page-container">
    <div class="contains">
      <div class="um-mig">
        <img id="sandra-mynd" src="@/assets/askja.avif" />
        <section id="sec-1">
          <h3>Bílaumboðið Askja</h3>
          <p>2014-2018</p>
          <p class="box-about-me">
            Ég starfa nú sem sérfræðingur í upplýsingatækni hjá Bílaumboðinu
            Öskju. Ég bjó til python innlestrarforrit sem les inn reikninga og
            umbreytir þeim. Ég er einnig í forsvari fyrir innleiðingu á appi frá
            birgja. Svo sinni ég daglegum, hefðbundnum IT verkefnum.
          </p>
        </section>
        <!-- Arrow -->
        <div class="scroll-arrow" @click="scrollToSection('sec-2')">↓</div>
      </div>
      <div class="um-mig">
        <img id="sandra-mynd" src="@/assets/nordural.jpg" />
        <section id="sec-2">
          <h3>Norðurál</h3>
          <p>2014-2018</p>
          <p class="box-about-me">
            Vann í 6 ár í kerskála Norðuráls. Fannst það virkilega skemmtilegt
            starf. Vann þar alla mína háskólagöngu og þar vaknaði tæknilegi
            áhugi minn. Keyrði í gegnum Hvalfjarðargöng a.m.k. 1900 sinnum á 6
            árum.
          </p>
        </section>
        <!-- Arrow -->
        <div class="scroll-arrow" @click="scrollToSection('sec-3')">↓</div>
      </div>
      <div class="um-mig">
        <img id="sandra-mynd" src="@/assets/olis.png" />
        <section id="sec-3">
          <h3>Olíuverslun Íslands</h3>
          <p>2014-2018</p>
          <p class="box-about-me">
            Ég starfaði í Olís Borgarnesi í fjögur ár. Ekkert um það að segja
            meira, en fannst gaman að vinna þar.
          </p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FerillComponent",
  mounted() {
    this.scrollToSection();
  },
};
</script>

<style>
.contains {
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
}

#sandra-mynd {
  max-width: 20%;
  border-radius: 40px;
  box-shadow: 0 0 5px 1px rgba(0, 1, 186, 0.5);
}

.box-about-me {
  max-width: 300px;
}

.um-mig:first-child {
  margin-top: -100px; /* Adjust this value as needed */
  padding-top: 0; /* Ensure there's no extra padding */
}

.um-mig {
  scroll-snap-align: start;
  display: flex; /* Use flexbox for layout inside */
  flex-direction: row; /* Stack content vertically */
  align-items: center; /* Center child items horizontally */
  text-align: left;
  justify-content: center;
  height: 100vh;
}

.um-mig section {
  padding: 50px;
  font-family: myFont;
  font-weight: 300;
  scroll-margin-top: 100px;
}
</style>
