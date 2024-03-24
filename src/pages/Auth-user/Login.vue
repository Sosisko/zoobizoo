<script setup>
import { ref } from "vue";
import { useField, useForm } from "vee-validate";

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name(value) {
      if (value?.length >= 2) return true;

      return "Name needs to be at least 2 characters.";
    },
    phone(value) {
      if (value?.length > 9 && /[0-9-]+/.test(value)) return true;

      return "Phone number needs to be at least 9 digits.";
    },

    select(value) {
      if (value) return true;

      return "Select an item.";
    },
  },
});
const name = useField("name");
const phone = useField("phone");

const select = useField("select");
const password = useField("password");

const show1 = ref(false);

const rules = {
  required: (value) => !!value || "Поле обязательно.",
  min: (v) => v.length >= 6 || "Минимум 6 символов",
  emailMatch: () => "The email and password you entered don't match",
};

const items = ref(["Item 1", "Item 2", "Item 3", "Item 4"]);

const submit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2));
});
</script>
<template>
  <form @submit.prevent="submit">
    <v-text-field
      v-model="name.value.value"
      :counter="10"
      :error-messages="name.errorMessage.value"
      label="Name"
    ></v-text-field>

    <v-text-field
      v-model="phone.value.value"
      :counter="7"
      :error-messages="phone.errorMessage.value"
      label="Phone Number"
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
      label="Select"
    ></v-select>

    <v-btn class="me-4" type="submit"> submit </v-btn>

    <v-btn @click="handleReset"> clear </v-btn>
  </form>
</template>

<style lang="scss" scoped></style>
