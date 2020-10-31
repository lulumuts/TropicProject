<template>
  <div>
    <h1>{{ msg }}</h1>
    <input v-model="search" />
    <div v-for="item in searchFilter" :key="item.id">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "api",
  props: { msg: String },
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
    async allData() {
      try {
        const response = await this.axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        return (this.todos = response.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
