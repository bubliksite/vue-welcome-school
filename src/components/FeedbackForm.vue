<template>
  <form @submit.prevent="(e) => sendEmail(e)">
    <div class="row">
      <div class="col-6">
        <input
          :disabled="emailIsSending"
          type="text"
          name="user_name"
          class="form-control"
          placeholder="Ваше имя"
          v-model="emailData.name"
          :class="{'is-invalid': !validation}"
        />
      </div>
      <div class="col-6">
        <the-mask
          :disabled="emailIsSending"
          class="form-control"
          :class="{'is-invalid': !validation}"
          :mask="['+7 (###) ###-##-##']"
          placeholder="Ваш телефон"
          name="user_phone"
          v-model="emailData.phone"
        />
      </div>
      <div class="col-12 mt-3">
        <textarea
          :disabled="emailIsSending"
          class="form-control"
          rows="3"
          placeholder="Ваше сообщение"
          name="user_message"
          v-model="emailData.message"
        ></textarea>
      </div>
    </div>
    <div class="d-flex justify-content-between align-items-center mt-3">
      <span :class="result">{{ message }}</span>
      <button :disabled="emailIsSending" class="btn btn-default px-5 float-end">
        Отправить
        <div
          v-if="emailIsSending"
          class="spinner-border ms-2 spinner-border-sm text-light"
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
      </button>
    </div>
  </form>
</template>

<script>
  import {TheMask} from 'vue-the-mask'
  import emailjs from 'emailjs-com'
  export default {
    name: 'FeedbackForm',
    components: {TheMask},
    data() {
      return {
        emailIsSending: false,
        validation: true,
        message: '',
        result: '',
        emailData: {
          name: '',
          phone: '',
          message: ''
        }
      }
    },
    methods: {
      sendEmail(e) {
        this.message = ''
        this.result = ''
        this.validation = true
        if (!this.emailData.name || !this.emailData.phone) {
          this.message = 'Заполните обязательные поля'
          this.result = 'is-invalid'
          this.validation = false
        } else {
          this.emailIsSending = true
          emailjs
            .sendForm(
              'service_zujhgrf',
              'template_ztfx7vn',
              e.target,
              'user_XoCQ8ppvF0vAm16AfHR8q'
            )
            .then(
              () => {
                this.emailIsSending = false
                this.message = 'Сообщение отправлено! Мы скоро свяжемся с вами'
                this.result = 'is-valid'
                this.emailData = ''
              },
              () => {
                this.emailIsSending = false
                this.message =
                  'Сообщение не отправлено! Попробуйте позже или позвоните нам на +7 (915) 095-13-66'
                this.result = 'is-invalid'
              }
            )
        }
      }
    }
  }
</script>

<style scoped lang="scss">
  .is-valid {
    color: #198754;
  }
  .is-invalid {
    color: #ca2027;
  }
</style>
