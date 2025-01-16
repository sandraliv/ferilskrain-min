<template>
  <section class="about-section">
    <p style="font-size: 30px; padding: 0; margin: 0; font-family: myFont">
      Námsferill
    </p>
  </section>
  <div v-if="felagsradgjofClasses" class="border-box">
    <div class="three-buttons">
      <div class="buttons">
        <button
          class="button-67"
          :class="{ selected: whichStudy === 1 }"
          role="button"
          @click="toggleStudy(1)"
        >
          {{ $t("namsferill.CS") }}
        </button>
        <button
          class="button-67"
          :class="{ selected: whichStudy === 0 }"
          role="button"
          @click="toggleStudy(0)"
        >
          {{ $t("namsferill.FR") }}
        </button>
      </div>
      <div v-if="whichStudy === 1" class="download-section">
        <button class="button-67 new-button" @click="downloadFile(0)">
          {{ $t("namsferill.PDF") }}
        </button>
      </div>
      <div v-else class="buttons new-ones">
        <button class="button-67 new-button" @click="downloadFile(1)">
          {{ $t("namsferill.PDF") }}
        </button>
        <button class="button-67 new-button" @click="downloadFile(2)">
          {{ $t("namsferill.profskirteini") }}
        </button>
      </div>
    </div>
    <div class="boxes">
      <table class="data-table">
        <thead cl>
          <tr>
            <th>Áfangi</th>
            <th>Námskeiðsnúmer</th>
            <th>Einkunn</th>
            <th>Einingar</th>
            <th>Önn</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(course, index) in felagsradgjofClasses" :key="index">
            <td class="name_box">{{ course.name }}</td>
            <td>{{ course.id }}</td>
            <td>{{ course.grade.toFixed(1) }}</td>
            <td>{{ course.credits }}</td>
            <td>{{ course.semester }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p>Fjöldi eininga: {{ totalCredits }}</p>
    <p>Vegið meðaltal: {{ weightedAverage.toFixed(2) }}</p>
  </div>
  <div v-else>
    <p>No course data available.</p>
  </div>
</template>

<script lang="ts">
import userData from "@/assets/data/data.json";
import { defineComponent } from "vue";

/**
 * Setja týpun á áfanga.
 */
interface Course {
  name: string;
  id: string;
  grade: number;
  credits: number;
  semester: string;
}

/**
 * Setja týpun á fag.
 */
interface Study {
  [key: string]: {
    slug: string;
    classes: Course[];
  };
}

export default defineComponent({
  name: "SkolaComponent",
  data() {
    return {
      users: userData.study as Study,
      whichStudy: 1,
    };
  },
  computed: {
    felagsradgjofClasses(): Course[] {
      const studyKey =
        this.whichStudy === 0 ? "Tölvunarfræði" : "Félagsráðgjöf";
      return this.users[studyKey]?.classes || [];
    },
    totalCredits(): number {
      return this.felagsradgjofClasses.reduce(
        (sum, course) => sum + course.credits,
        0
      );
    },
    weightedAverage(): number {
      const totalWeightedGrades = this.felagsradgjofClasses.reduce(
        (sum, course) => sum + course.grade * course.credits,
        0
      );
      const totalCredits = this.totalCredits;
      return totalCredits > 0 ? totalWeightedGrades / totalCredits : 0;
    },
  },
  methods: {
    toggleStudy(number: Number) {
      this.whichStudy = number == 0 ? 0 : 1;
      this.whichStudy = number == 1 ? 1 : 0;
    },
    downloadFile(number: number) {
      const file_array: string[] = [
        "TF-namsferill-SandraLiv.pdf",
        "ferill.jpg",
        "ferill2.jpg",
      ];
      if (number >= 0 && number < file_array.length) {
        const fileUrl = `/${file_array[number]}`; // Dynamically pick the file based on `number`
        const link = document.createElement("a");
        link.href = fileUrl;
        link.download = file_array[number]; // Use the same file name for download
        link.click();
      } else {
        console.error("Invalid number provided. No file to download.");
      }
    },
  },
});
</script>

<style scoped>
.about-section {
  background-image: linear-gradient(-90deg, #0f2f4e, #7f7e85);
  color: #fff;
}
/* CSS */
.button-67 {
  align-items: center;
  background: #cbcbe2;
  border: 0;
  border-radius: 8px;
  box-shadow:
    -10px -10px 30px 0 #fff,
    10px 10px 30px 0 #1d0dca17;
  box-sizing: border-box;
  color: #2a1f62;
  cursor: pointer;
  display: flex;
  font-family: "Cascadia Code", Consolas, Monaco, "Andale Mono", "Ubuntu Mono",
    monospace;
  font-size: 0.9rem;
  justify-content: center;
  line-height: 1.5rem;
  position: relative;
  text-align: left;
  transition: 0.2s;
  touch-action: manipulation;
  white-space: pre;
  width: max-content;
  word-break: normal;
  word-spacing: normal;
}

.about-section {
  padding: 50px;
}

.button-67:hover {
  background: #dcdce0;
  box-shadow:
    -15px -15px 30px 0 #fff,
    15px 15px 30px 0 #1d0dca17;
}

@media (min-width: 768px) {
  .button-67 {
    padding: 24px;
  }
}
.new-button {
  line-height: 0rem;
  font-size: 0.7rem;
  padding: 14px;
  box-shadow: none;
  width: 200px;
}

.selected {
  background: #a2a2aa;
}

.buttons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 30px;
  gap: 20px;
}

.boxes {
  display: flex;
  justify-content: center;
  border: 1px solid gray;
  box-shadow: 0px 0px 4px 1.8px rgb(146, 172, 212);
  width: fit-content;
  margin: 20px auto 20px auto;
  border-radius: 4px;
  flex-direction: column;
  width: 837;
}
.data-table {
  text-align: left;
  max-width: 1000px;
  border-spacing: 16px 0;
  font-family: myFont;
  padding: 30px;
}

.three-buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.data-table td {
  padding: 3px;
}

td:nth-child(1) {
  width: 390px;
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
  padding-top: 0; /* Ensure there's no extra padding */
}

.um-mig {
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

.new-ones {
  gap: none;
  padding: 0;
}
</style>
