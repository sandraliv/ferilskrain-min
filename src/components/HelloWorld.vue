<template>
  <div class="hello">
    <h1>Random Fact:</h1>
    <button @click="fetchData">Click Me!</button>
    <p v-if="fact">{{ fact }}</p>
    <p v-else>No fact yet. Click the button to fetch!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fact: "",
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch("https://ferilskra.onrender.com/studies");
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data);
        this.fact = data[0].studyName || "No data available"; 
      } catch (err) {
        console.error("Failed to fetch data:", err.message);
        this.fact = "Error fetching data. Please try again.";
      }
    },
  },
};
</script>

<style>
button {
  padding: 12px 32px;
  font-size: 16px;
  border-radius: 8px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #2c7a6f;
}
p {
  font-size: 18px;
  margin-top: 12px;
}
</style>
