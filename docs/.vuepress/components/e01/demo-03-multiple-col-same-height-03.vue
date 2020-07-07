<template>
  <div class="demo-03-multiple-col-same-height-03">
    <div class="col">
      <p class="col-title">苹果</p>
      <p class="col-content">
        苹果是蔷薇科苹果亚科苹果属植物，其树为落叶乔木。
      </p>
    </div>

    <div class="col">
      <p class="col-title">香蕉</p>
      <p class="col-content">
        香蕉（学名：Musa nana Lour.）芭蕉科芭蕉属植物，又指其果实，热带地区广泛种植。
      </p>
    </div>

    <div class="col">
      <p class="col-title">水蜜桃</p>
      <p class="col-content">
        水蜜桃（学名：Prunus persica 、meltingfleshed peach）：蔷薇科、桃属植物。
      </p>
    </div>

    <div class="col">
      <p class="col-title">菠萝</p>
      <p class="col-content">
        菠萝（学名：Ananas comosus），是热带水果之一。
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.demo-03-multiple-col-same-height-03 {
  display: table;
  border-spacing: 20px; // <-- 设置间隔

  .col {
    display: table-cell;
    width: 1000px; // 设置最大宽度，会自动平分
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
}

@media (max-width: 800px) {
  .demo-03-multiple-col-same-height-03 {
    display: block;

    .col {
      display: block;
      width: auto;
      padding: 10px;
      margin-bottom: 20px;
      border-radius: 5px;
      border: 1px solid #ccc;
    }
  }
}
</style>
