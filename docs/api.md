---
aside: false
outline: false
title: REST API
---

<script setup>
import spec from './public/api-json.json';

const config = {
  displayResponses: true,
  responseConfig: {
    displayAll: true,
    expandResponses: true
  }
};


</script>

<OASpec :spec="spec" :config="config" />