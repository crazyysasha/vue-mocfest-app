<template>
  <div class="flex items-center justify-center w-full">
    <div v-if="isLoading" class="p-5 mb-2 justify-center flex">
      <div class="h-10 w-10 animate-pulse rounded-full bg-white">
        <div class="animate-ping h-10 w-10 rounded-full bg-white"></div>
      </div>
    </div>
    <div v-if="!isLoading" style="max-width: 80%; padding: 50px 0;">
      <template v-if="verified">
        <img :src="successIcon" alt="Success">
      </template>
      <template v-else>
        <img :src="failedIcon" alt="Fail">
      </template>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";
import axios from "@/utils/axios";
import { onMounted} from "vue";


const route = useRoute();
const router = useRouter();
const isLoading = ref(false);
const ticketId = route.params.id;
const verified = ref(false);
const successIcon = require('../assets/images/success-green-check-mark.png')
const failedIcon = require('../assets/images/cross.png')


function setCookie(name,value,days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

onMounted(() => {
  console.log(route.query)
})
onMounted(() => {
  let password = getCookie('password') ?? prompt("Пароль" )
  let endpoint = route.query.type  === 'seat' ? 'seats' : 'tickets'

  if (password === '1993testtest') {
    setCookie('password', '1993testtest', 1);

    axios.post(`verify/${endpoint}/${ticketId}`, {
      id: ticketId
    }).then(res => {
      verified.value = true;
      isLoading.value = false;
    }).catch(err => {
      isLoading.value = false;
    });
  }
});



</script>
