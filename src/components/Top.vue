<template>
  <div class="top">
    <h1>{{ title }}</h1>
    <a :href="url.vote">スケジュール決定システムはこちら</a>
  </div>
</template>

<script>
export default {
  name: 'Top',
  data () {
    return {
      title: 'トップページ',
      url: {
        vote: '/#/vote'
      }
    }
  }
}
</script>
