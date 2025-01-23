<template>
    <div class="video-player-container">
      <video
        id="plyr-video"
        class="plyr"
        controls
        playsinline>
        <source :src="videoSource" type="video/mp4">
      </video>
    </div>
  </template>
  
  <script>
  import Plyr from 'plyr';
  import 'plyr/dist/plyr.css';
  
  export default {
    mounted() {
      this.player = new Plyr('#plyr-video', {
        controls: [
          'play-large',
          'play',
          'rewind',
          'fast-forward',
          'progress',
          'current-time',
          'duration',
          'mute',
          'volume',
          'settings',
          'pip',
          'fullscreen',
        ],
        settings: ['speed'],
        speed: { selected: 1.0, options: [0.5, 1, 1.5, 2] },
      });
  
      document.addEventListener('keydown', this.handleKeyEvents);
    },
    methods: {
      handleKeyEvents(event) {
        if (event.key === 'ArrowRight') {
          this.player.forward(5);
        } else if (event.key === 'ArrowLeft') {
          this.player.rewind(5);
        } else if (event.key === 'ArrowUp') {
          this.player.volume = Math.min(this.player.volume + 0.1, 1);
        } else if (event.key === 'ArrowDown') {
          this.player.volume = Math.max(this.player.volume - 0.1, 0);
        }
      },
    },
    beforeUnmount() {
      document.removeEventListener('keydown', this.handleKeyEvents);
      this.player.destroy();
    },
  };
  </script>
  
  <style>
  :root {
    --plyr-color-main: #FFCC02 !important;
    --plyr-control-color: #ffffff !important;
    --plyr-menu-background: #1e293b !important;
    --plyr-menu-color: #e2e8f0 !important;
    --plyr-tooltip-background: #475569 !important;
    --plyr-tooltip-color: #ffffff !important;
  }
  
  .video-player-container {
    width: 100%;
    height: 700px;
  }
  
  .plyr {
    width: 100%;
    height: 700px;
    background-position: center;
    overflow: hidden;
  }
  </style>