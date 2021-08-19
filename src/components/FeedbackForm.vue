<template>
  <form @submit.prevent="sendFeedback">
    <div class="row">
      <div class="col-6">
        <input type="text" class="form-control" placeholder="Ваше имя" />
      </div>
      <div class="col-6">
        <input-mask
          type="text"
          class="form-control"
          placeholder="Ваш телефон"
          mask="+7 (999) - 999 - 99"
        ></input-mask>
      </div>
      <div class="col-12 mt-3">
        <textarea
          class="form-control"
          rows="3"
          placeholder="Ваше сообщение"
        ></textarea>
      </div>
    </div>
    <button class="btn btn-default mt-3 px-5 float-end">Отправить</button>
  </form>
</template>

<script>
  import InputMask from 'vue-input-mask'
  export default {
    name: 'FeedbackForm',
    components: {InputMask},
    data() {
      return {
        sendFeedback() {
          console.log('send feedbck')
        }
      }
    }
  }
</script>

<style scoped></style>
