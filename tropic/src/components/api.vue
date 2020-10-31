<template>
  <div>
    <h1>TO DO'S</h1>
    <div v-for="item in todos" :key="item.id">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "api",
  data() {
    return {
      todos: [],
    };
  },
  mounted() {
    this.allData();
  },
  methods: {
    async allData() {
      await this.axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
          this.todos = response.data;
          console.log(response.data);
        });
    },
  },
};
</script>
