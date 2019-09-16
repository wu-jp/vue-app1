<template>
  <div id="app">
    <div class="header">
      <div class="center">
        <div class="logo">
          <img src="./assets/img/logo.png" alt />
        </div>
        <ul>
          <router-link tag="li" to="/home">Home</router-link>
          <router-link tag="li" to="/learn">Learn</router-link>
          <router-link tag="li" to="/student">Student</router-link>
          <router-link tag="li" to="/about">About</router-link>
          <router-link tag="li" to="/community">Community</router-link>
        </ul>
      </div>
    </div>

    <router-view class="router-view"/>
    <!-- router-view 的复用 -->
    <!-- <router-view class="router-view" name="academic"/> -->

    <div class="footer"></div>
  </div>
</template>

<style>
.router-link-active{
  border-bottom: 2px solid #fff;
}

.header {
  background-color: #000;
  line-height: 70px;
  padding-bottom: 2px;
}

.header .center {
  display: flex;
  justify-content: space-between;
  width: 1000px;
  margin: 0 auto;
}

.header .center img{
  width: 120px;
  height: 40px;
  vertical-align: middle;
}

.header .center .logo{
  line-height: 70px;
}

.header .center ul{
  display: flex;
}

.header .center ul li{
  color: #fff;
  padding: 0 30px;
  cursor: pointer;
}

.footer{
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100px;
  background-color: #000;
}

.router-view{
  width: 1000px;
  /* min-height: 600px; */
  margin: 0 auto;
  padding-top: 40px;
}
</style>
