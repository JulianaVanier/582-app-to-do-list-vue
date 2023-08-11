<template>
  <header>
    <nav class="header-flexbox" role="navigation">
      <div class="logo-holder">
        <img src="/img/checked.png" alt="Header logo of the company" />
        <p>APP To-do List</p>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: "HeaderApp",
  props: {},
};
</script>
<style scoped lang="scss">
header {
  background: linear-gradient(to right, #00095e 0%, #0c0c1f 100%);
  height: 100px;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  .header-flexbox {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100px;
    transition: 0.5s;
    margin: 0 30px;
    .logo-holder {
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        display: block;
        width: auto;
        max-height: 100%;
      }
      p {
        font-family: "Poppins", sans-serif;
        letter-spacing: 0.2rem;
        margin-left: 10px;
        font-size: 18px;
        color: white;
      }
    }
  }
}
</style>
