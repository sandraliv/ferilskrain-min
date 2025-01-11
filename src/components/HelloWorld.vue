<template>
  <div class="page-container">
    <div class="hello">
      <h1>All Courses and Grades:</h1>
      <button @click="fetchData">Fetch Courses</button>
      <div v-if="fact.length > 0">
        <ul>
          <!-- Loop through studies -->
          <li v-for="study in fact" :key="study.id">
            <strong>{{ study.studyName }}</strong>
            <ul>
              <!-- Loop through courses in each study -->
              <li v-for="course in study.courses" :key="course.id">
                {{ course.name }} - Grade: {{ course.grade }}
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <p v-else>
        Click the button to fetch! (It can take some time for it to load, please
        be patient)
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fact: '',
    };
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('https://ferilskra.onrender.com/studies');
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log(data);
        this.fact = data || 'No data available';
      } catch (err) {
        console.error('Failed to fetch data:', err.message);
        this.fact = 'Error fetching data. Please try again.';
      }
    },
  },
};
</script>

<style>
.hello {
  display: flex;
  flex-direction: column;
  align-items: center;
}
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
}
</style>
