<template>
  <div>
    <h1>{{ msg }}</h1>
    <input v-model="search" />
    <input type="checkbox" id="checkbox" v-model="checked" />
    <label for="checkbox">{{ checked }}</label>

    <ul class="flex-container wrap">
      <div v-for="item in filterTodos" :key="item.id">
        <div class="item">
          <!-- {{ item }} -->
          <ul>
            <li>userId: {{ item.id }}</li>
            <li>title: {{ item.title }}</li>
            <li>Completed: {{ item.completed }}</li>
          </ul>
        </div>
      </div>
    </ul>
    <!-- <div class="container">
      <div class="flex-container">
        <div v-for="item in filterTodos" :key="item.id">
          <div>{{ item }}</div>
        </div>
      </div>
    </div> -->
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
      checked: false,
    };
  },
  computed: {
    filterTodos: function() {
      return this.filterBySearch();
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
    filterBySearch() {
      return this.todos.filter((x) => {
        return (
          x.title.toLowerCase().includes(this.search.toLowerCase()) &&
          x.completed === this.checked
        );
      });
    },
    filteredCompleted(todos) {
      //   return todos.filter((todo) => todo.completed == this.checked);
      todos.filter((x) => {
        if (x.completed === this.checked) {
          return x;
        }
      });
    },
  },
};
</script>
<style scoped>
.highlight {
  background-color: yellow;
}

.flex-container {
  padding: 0;
  margin: 0;
  list-style: none;

  -ms-box-orient: horizontal;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
}
.wrap {
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
}
.item {
  height: 150px;
  width: 300px;
  margin: 20%;
}
ul li {
  list-style: none;
}
</style>
