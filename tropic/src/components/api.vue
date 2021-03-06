<template>
  <div>
    <!-- title being served from app.vue -->

    <h1>{{ msg }}</h1>

    <!-- search bar for users where you can search by Company Name or User Name-->

    <input v-model="searchUser" class="searchBar" placeholder="Search for a Company or Name" />

    <!-- for loop for users data-->

    <ul class="flex-container wrap no-margin">
      <div v-for="item in filterUsers" :key="item.id">
        <div class="user">
          <div>
            <h3>{{ item.company.name }}</h3>
            <p class="subtitle">{{ item.company.catchPhrase }}</p>

            <p>
              <strong>Name:</strong>
              <br />
              {{ item.name }}
            </p>
            <p>
              <strong>Username:</strong>
              <br />
              {{ item.username }}
            </p>
            <p>
              <strong>Email:</strong>
              <br />
              {{ item.email }}
            </p>
            <p>
              <strong>Phone:</strong>
              <br />
              {{ item.phone }}
            </p>
            <p>
              <strong>Website:</strong>
              <br />
              {{ item.website }}
            </p>
          </div>
        </div>
      </div>
    </ul>

    <h1>Posts</h1>
    <!-- Search Bar for Posts data where you can search by title -->
    <input v-model="search" class="searchBar" placeholder="Search for a post" />
    <br />
    <!-- For loop for users data, here is used to filter posts data below -->
    <div class="flex-container wrap no-margin">
      <div v-for="item in users" :key="item.id">
        <div class="user-button">
          <div>
            <button class="userIdButton" @click="userId = item.id">
              <p>
                <strong>ID:</strong>
                {{ item.id }}
                <br />
                <strong>Name:</strong>
                {{ item.name }}
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- filter whether posts are completed or not -->
    <div class="flex-container wrap completed no-margin">
      <button>
        <input type="checkbox" class="hidden" id="checkbox" :value="false" v-model="checked" />
        <label for="checkbox">Post completed</label>
      </button>
      <br />
      <button>
        <input type="checkbox" class="hidden" id="checkbox" :value="true" v-model="checked" />
        <label for="checkbox">Post not completed</label>
      </button>
    </div>
    <br />
    <!-- for loop for posts data -->
    <ul class="flex-container wrap no-margin">
      <div v-for="item in filterTodos" :key="item.id">
        <div :class="{ highlight: item.id == selected }" @click="selected = item.id">
          <div class="item">
            <p>
              <strong>UserId:</strong>
              {{ item.userId }}
            </p>
            <p>
              <strong>postId:</strong>
              {{ item.id }}
            </p>
            <p>
              <strong>title:</strong>
              {{ item.title }}
            </p>
            <p>
              <strong>Completed:</strong>
              {{ item.completed }}
            </p>
          </div>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "api",
  props: { msg: String },
  data() {
    return {
      todos: [],
      users: [],
      search: "",
      searchUser: "",
      checked: false,
      selected: [],
      userId: 1
    };
  },
  computed: {
    // function reacts to any change in the search bars, the completed filters, and the userId filter
    filterTodos: function() {
      console.log(this.userId);
      return this.todos.filter(x => {
        return (
          x.title.toLowerCase().includes(this.search.toLowerCase()) &&
          x.completed === this.checked &&
          this.filterById(x.userId)
        );
      });
    },
    // function filters the users search bar
    filterUsers: function() {
      return this.filterUsersBySearch();
    }
  },
  mounted() {
    // calls get functions on mount to be available once page is loaded
    this.getAllData();
    this.getAllUsers();
  },
  methods: {
    // calls user data
    async getAllUsers() {
      try {
        const response = await this.axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        return (this.users = response.data);
      } catch (error) {
        console.log(error);
      }
    },
    // calls all posts data
    async getAllData() {
      try {
        const response = await this.axios.get(
          "https://jsonplaceholder.typicode.com/todos"
        );
        return (this.todos = response.data);
      } catch (error) {
        console.log(error);
      }
    },
    // assigns change to userId on click
    filterById(y) {
      if (this.userId !== null) {
        return this.userId === y;
      }
    },
    // filters users through the search bar, which is return on computed
    filterUsersBySearch() {
      return this.users.filter(x => {
        return (
          x.name.toLowerCase().includes(this.searchUser.toLowerCase()) ||
          x.company.name.toLowerCase().includes(this.searchUser.toLowerCase())
        );
      });
    }
  }
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap");
body {
  font-family: "Raleway", sans-serif;
}
h1 {
  text-align: left;
  margin: 120px 7%;
  font-size: 110px;
  opacity: 0.25;
  font-weight: 700;
}

.highlight {
  background-color: yellow;
}

.flex-container {
  padding: 30px 0 30px 0;
  margin: 0;
  list-style: none;

  -ms-box-orient: horizontal;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -moz-flex;
  display: -webkit-flex;
  display: flex;
  margin: auto;
}
.wrap {
  -webkit-flex-wrap: wrap;
  flex-wrap: wrap;
  margin: 5%;
}
.searchBar {
  width: 85vw;
  height: 50px;
  border-radius: 5px;
  font-family: "Raleway", sans-serif;
  border: 1.75px solid #eaeaea;
  font-size: 20px;
  padding: 0 10px;
  box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.08);
}
.searchBar:focus {
  outline: none;
}
input[type="checkbox"].hidden {
  display: none;
  margin: 100px;
}
label {
  font-size: 18px;
  cursor: pointer;
  font-weight: bold;
  color: #172d15;
}
.completed button {
  margin: 10px 20px;
  height: 40px;
  width: 200px;
  border-radius: 10px;
  font-family: "Raleway", sans-serif;
  border: none;
  cursor: pointer;
}
.completed button:active {
  background: #7bff70;
  color: #172d15;
}
.completed button:hover {
  background: #7bff70;
  color: #172d15;
}
.completed button:focus {
  outline: none;
}
.no-margin {
  margin-top: 0;
  margin-bottom: 0;
}
.item {
  height: auto;
  width: 200px;
  margin: auto;
  box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.08);
  padding: 10px 20px 10px 20px;
  border-radius: 10px;
  border: 1px solid #eaeaea;
  margin: 20px;
  text-align: left;
}
.subtitle {
  font-size: 15px;
  margin: 0;
  padding: 0;
}
h3 {
  margin: 5px 0;
}
.user {
  height: 400px;
  width: 210px;
  padding: 10%;
  border: 1px solid #eaeaea;
  text-align: left;
  border-radius: 10px;
  box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.08);
  margin: 35px;
  display: flex;
}

.userIdButton {
  background: none;
  text-align: left;
  width: auto;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  margin: 10px;
  padding: 0 10px;
  border-bottom: 4px solid #eaeaea;
}
.userIdButton:active {
  border-bottom: 4px solid #7bff70;
  color: #172d15;
}
.userIdButton:hover {
  background-color: #7bff70;
  color: #172d15;
  border-bottom: 4px solid #7bff70;
}

.userIdButton:focus {
  outline: none;
}
div {
  cursor: pointer;
}
div.highlight {
  visibility: hidden;
}

ul li {
  list-style: none;
}
</style>
