<template>
  <div class="vote">
    <h1>{{ title }}</h1>
    <div>
      <input type="text" name="idea" v-model="input.idea">
      <button name="add" v-on:click="add">add</button>
    </div>
    <div>
      <ol>
        <li v-for="(idea, index) in ideas">
          {{ idea.title }}({{ idea.count }})
          <button name="like" v-on:click="like(index)">like</button>
          <button name="remove" v-on:click="remove(index)">remove</button>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Vote',
  data () {
    return {
      title: '投票システム',
      input: {
        idea: ''
      },
      ideas: []
    }
  },
  created: function () {
    this.prepare()
  },
  methods: {
    // 候補用意
    prepare: function () {
      database.ref('ideas/').on('value', ideasData => {
        if (ideasData.val() !== null) {
          const ideas = ideasData.val()
          const array = []
          Object.keys(ideas).forEach((title) => {
            array.push({
              title: title,
              count: ideas[title].count
            })
          })
          this.ideas = array
        } else {
          this.ideas = []
        }
      })
    },
    // 候補追加
    add: function () {
      database.ref('ideas/' + this.input.idea).set({
        title: this.input.idea,
        count: 0
      })
      this.input.idea = ''
    },
    // 候補削除
    remove: function (index) {
      database.ref('ideas/' + this.ideas[index].title).remove()
    },
    // 投票
    like: function (index) {
      database.ref('ideas/' + this.ideas[index].title).update({
        count: this.ideas[index].count + 1
      })
    }
  }
}
</script>
