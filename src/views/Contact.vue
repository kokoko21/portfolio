<template>
  <v-main class="grey lighten-3">
    <v-container>
      <v-sheet
        min-height="80vh"
        rounded="lg"
        class="contact"
      >
        <v-img
          height="250"
          src="../assets/image/form.jpg"
          class="form"
        >
          お問い合わせフォーム
        </v-img>
        <v-form>
          <v-text-field
            v-model="contactForm.name"
            :error-messages="nameErrors"
            :counter="20"
            label="Name"
            id="name"
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="contactForm.email"
            :error-messages="emailErrors"
            label="E-mail"
            id="mail"
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
          <v-textarea
          v-model="contactForm.text"
          :error-messages="textErrors"
          required
          solo
          name="input-7-4"
          label="お問い合わせ内容を記入してください。"
          id="content"
          @change="$v.text.$touch()"
          @blur="$v.text.$touch()"
        ></v-textarea>
          <v-checkbox
            v-model="contactForm.checkbox"
            :error-messages="checkboxErrors"
            label="Do you agree?"
            required
            @change="$v.checkbox.$touch()"
            @blur="$v.checkbox.$touch()"
          ></v-checkbox>

          <v-btn
            class="mr-4"
            @click="submit"
          >
            submit
          </v-btn>
          <v-btn @click="clear">
            clear
          </v-btn>
        </v-form>
      </v-sheet>
      <v-snackbar
        v-model="snackBar.show"
        :color="snackBar.color"
        bottom
        right
        :timeout="6000"
        class="font-weight-bold"
      >
        {{snackBar.message}}
      </v-snackbar>
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