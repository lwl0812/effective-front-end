<template>
  <ul class="demo-hover-to-show">
    <li class="demo-item notification">通知</li>
    <li class="demo-item user">用户</li>
    <li class="menu">
      <ul class="sub-menu">
        <li>账户设置</li>
        <li>登出</li>
      </ul>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;
}

.demo-item {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
}

.menu {
  display: none;
  position: relative;
}

.sub-menu {
  position: absolute;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 5px #000000;
  background: #ffffff;
}

.user:hover + .menu {
  display: list-item;
}
</style>
