<template>
  <div>
    <img height="180" width="300" :src="downloadURL" alt="Image" />
    <input type="file" @change="handleUploadFile" />
    <button @click="uploadFile">Upload</button>
  </div>
</template>
<script setup>
import { storage } from "@/firebase/config";
import {
  ref as storageRef,
  getDownloadURL,   
  uploadBytes,
} from "firebase/storage";
import { ref } from "vue";

const file = ref(null);
const downloadURL = ref(null);
const handleUploadFile = (event) => {
  file.value = event.target.files[0];
};
const uploadFile = async () => {
  if (!file.value) {
    return;
  }
  try {
    const storageReference = storageRef(storage, `uploads/${file.value.name}`);
    await uploadBytes(storageReference, file.value);
    downloadURL.value = await getDownloadURL(storageReference);
  } catch (error) {
    console.log("loi", error);
  }
};
</script>
<style></style>
