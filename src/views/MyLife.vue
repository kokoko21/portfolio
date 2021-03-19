<template>
  <v-main class="grey lighten-3">
    <v-container>

    </v-container>
  </v-main>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength, email } from 'vuelidate/lib/validators'
  import axios from '../plugins/setting';

  export default {
    name: 'Contact',

    mixins: [validationMixin],

    validations: {
      name: { required, maxLength: maxLength(20) },
      email: { required, email },
      text: { required },
      checkbox: {
        checked (val) {
          return val
        },
      },
    },

    data: () => ({
      contactForm: {
        name: '',
        email: '',
        select: null,
        text: '',
        checkbox: false,
      },
      snackBar: {
        show: false,
        color: '',
        message: ''
      }
    }),

    computed: {
      checkboxErrors () {
        const errors = []
        if (!this.$v.checkbox.$dirty) return errors
        !this.$v.checkbox.checked && errors.push('You must agree to continue!')
        return errors
      },
      textErrors () {
        const errors = []
        if (!this.$v.text.$dirty) return errors
        !this.$v.text.required && errors.push('お問い合わせ内容を入力してください')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long')
        !this.$v.name.required && errors.push('名前を入力してください。')
        return errors
      },
      emailErrors () {
        const errors = []
        if (!this.$v.email.$dirty) return errors
        !this.$v.email.email && errors.push('Must be valid e-mail')
        !this.$v.email.required && errors.push('メールアドレスを入力してください。')
        return errors
      },
    },

    methods: {
      submit: async function() {
        this.$v.$touch()
        var Nam = "entry.2005620554" + "=" + document.getElementById("name").value;
        var Mai = "entry.1045781291" + "=" + document.getElementById("mail").value;
        var Con = "entry.839337160" + "=" + document.getElementById("content").value;
        var url =
          "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdvZpCjWPV9nxzTHDcTjJVdhy6_75-KJHiIpviANL8nPVyU-A/formResponse?" +
          Nam +
          "&" +
          Mai +
          "&" +
          Con;
        axios.get(url);
      },
      clear () {
        this.$v.$reset()
        this.name = ''
        this.email = ''
        this.text = null
        this.checkbox = false
      },
    },
  }
</script>

<style>
  .form {
    font-size: 50px;
    text-align: center;
    padding-top: 100px;
  }
</style>