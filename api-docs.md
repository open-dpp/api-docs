---
aside: false
outline: false
title: vitepress-openapi
---

<script setup>
import spec from './public/api-json.json';

console.log(spec);
</script>

<OASpec :spec="spec" />