<template>
    <video id="my-video" playsinline controls>
      <source :src="videoUrl" type="video/mp4">
    </video>
  </template>
  
  <script>
  import Plyr from 'plyr';
  import 'plyr/dist/plyr.css';
  
  export default {
    data() {
      return {
        videoUrl: 'https://0-100.community/media/lesson/776ff3ac-bac3-4ab8-b592-4c6a7fb956b3.mp4'
      }
    },
    mounted() {
      const player = new Plyr('#my-video');
    }
  }
  </script>