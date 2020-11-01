# Tropic take home

Written using Vue 3, this project is a single page that:

1. Consumes an Api of Users and Posts
2. Filters the posts through a separate Api based on the UserId or whether the post has been completed.
3. Includes a search functionality for both Users and Posts
4. Uses minimalist design to display the Api data
5. Hides Specific posts from the page on click using CSS (I chose to use this solution as a delete request would require a backend delete method)

## Installing Tropic Take home

To install simply run:

```
npm install
```

### For compiles and hot-reloads for development run:

```
npm run serve
```

### To run the Jest tests

```
npm run test:unit
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
