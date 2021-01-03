const App = {
  data() {
    return {
      activeIndex: 0,
      steps: [
        {
          title: ' Основы',
          text: 'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.'
        },
        {
          title: ' Компоненты',
          text: 'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.'
        },
        {
          title: ' Роутер',
          text: 'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.'
        },
        {
          title: ' Vuex',
          text: 'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.'
        },
        {
          title: ' Composition',
          text: 'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.'
        },
      ],
      isFinished: false
    }
  },
  methods: {
    prev() {
      if (this.activeIndex > 0) { // на тот случай, ели поправить html руками и убрать disabled
        this.activeIndex--
      }
    },
    reset() {
      this.activeIndex = 0
      this.isFinished = false
    },
    nextOfFinish() {
      if (!this.isLastStep) {
        this.activeIndex++
      } else {
        this.isFinished = true
      }
    },
    setActive(idx) {
      this.activeIndex = idx
    }
  },
  computed: {
    activeStep() {
      return this.steps[this.activeIndex]
    },
    isPrevButtonDisabled() {
      return !this.activeIndex
    },
    isLastStep() {
      return this.activeIndex === this.steps.length - 1
    },
    nextOfFinishButtonTitle() {
      return this.isLastStep ? 'Закончить' : 'Вперед'
    }
  }
}

Vue.createApp(App).mount('#app')