<template>
  <div id="app">

    <list></list>


  </div>
</template>

<script>
import List from './components/List'

export default {
  name: 'app',
  components: {
    List
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  font-size: 12px;
}

.button {
    display: block;
    width: 100%;
    background: #212121;
    color: #fff;
    font-weight: bold;
    text-align: center;
    padding: 1em;
    cursor: pointer;
    text-decoration: none;
  }

  .button span {
    margin-left: 2em;
    font-size: .5rem;
    color: #d6d6d6;
  }

p {
  margin: 0;
  padding: 0;
}
</style>
