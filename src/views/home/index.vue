<template>
  <page-container :title="`${$route.meta.title}`" sub-title="is a sub-title.">
    <template #tags>
      <a-tag>tag1</a-tag>
      <a-tag color="pink">tag2</a-tag>
    </template>
    <a-button @click="handleClick">Button</a-button>
    <p v-for="item in new Array(20)" :key="item">text block...</p>

  </page-container>
</template>
<style></style>
