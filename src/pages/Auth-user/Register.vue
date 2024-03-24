<script setup>
import { ref } from "vue";
import { useField, useForm } from "vee-validate";
const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 2) return true;
      return "Введите имя (минимум 2 знака).";
    },

    email(value) {
      if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true;

      return "Введите корректный адрес e-mail.";
    },
    select(value) {
      if (value) return true;
      return "Выберете тип.";
    },
    checkbox(value) {
      if (value === "1") return true;
      return "Must be checked.";
    },
  },
});
const name = useField("name");

const email = useField("email");
const select = useField("select");
const password = useField("password");

const show1 = ref(false);

const rules = {
  required: (value) => !!value || "Поле обязательно.",
  min: (v) => v.length >= 6 || "Минимум 6 символов",
  emailMatch: () => "The email and password you entered don't match",
};

const items = ref(["Item 1", "Item 2", "Item 3", "Item 4"]);

// const submit = handleSubmit((values) => {
//   console.log("Submit button clicked");
//   alert(JSON.stringify(values, null, 2));
// });

const submit = handleSubmit ((values) => {
  console.log("Submit button clicked");
  alert(JSON.stringify(values, null, 2));
});
</script>
<template>
  <div class="form-wrapp">
    <form @submit.prevent="submit">
      <v-text-field
        v-model="name.value.value"
        :counter="10"
        :error-messages="name.errorMessage.value"
        label="Ваше имя"
      ></v-text-field>

      <v-text-field
        v-model="email.value.value"
        :error-messages="email.errorMessage.value"
        label="E-mail"
      ></v-text-field>

      <v-text-field
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        v-model="password.value.value"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        label="Пароль"
        name="input-10-1"
        counter
        @click:append="show1 = !show1"
      ></v-text-field>

      <v-select
        v-model="select.value.value"
        :error-messages="select.errorMessage.value"
        :items="items"
        label="Тип пользователя"
      ></v-select>

      <v-btn class="me-4" type="submit"> submit </v-btn>
      <v-btn @click="handleReset"> clear </v-btn>
    </form>
  </div>
</template>

<style scoped>
.form-wrapp {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  margin-top: 40px;
  padding: 20px;
  border-radius: 30px;
  box-shadow: 10px 5px 29px 15px #dbdbdb;
}
</style>
