<template>
  <div>
    <h1>TO DO'S</h1>
    <input v-model="search" />
    <div v-for="item in searchFilter" :key="item.id">
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
      search: "",
    };
  },
  computed: {
    searchFilter() {
      return this.todos.filter((x) => {
        return x.title.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  mounted() {
    this.allData();
  },
  methods: {
    allData() {
      this.axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
          this.todos = response.data;
        });
    },
  },
};
</script>
