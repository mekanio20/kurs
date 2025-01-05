<template>
  <div class="video-container">
    <video
      ref="videoPlayer"
      class="video-player"
      :src="videoSource"
      poster="https://via.placeholder.com/1280x720.png?text=Video+Player"
      controls
      autoplay
    ></video>
    <div class="video-controls">
      <button @click="togglePlayPause">
        {{ isPlaying ? 'Pause' : 'Play' }}
      </button>
      <button @click="restartVideo">Restart</button>
      <input
        type="range"
        :max="duration"
        :value="currentTime"
        @input="seekVideo"
        class="video-progress-bar"
      />
      <span>{{ formattedTime }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoPlayer',
  data() {
    return {
      videoSource: '', // Video URL
      isPlaying: false,
      currentTime: 0,
      duration: 0,
    };
  },
  computed: {
    formattedTime() {
      const minutes = Math.floor(this.currentTime / 60);
      const seconds = Math.floor(this.currentTime % 60);
      return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    },
  },
  mounted() {
    const video = this.$refs.videoPlayer;
    video.addEventListener('loadedmetadata', this.onMetadataLoaded);
    video.addEventListener('timeupdate', this.onTimeUpdate);
  },
  methods: {
    onMetadataLoaded() {
      this.duration = this.$refs.videoPlayer.duration;
    },
    onTimeUpdate() {
      this.currentTime = this.$refs.videoPlayer.currentTime;
    },
    togglePlayPause() {
      const video = this.$refs.videoPlayer;
      if (video.paused) {
        video.play();
        this.isPlaying = true;
      } else {
        video.pause();
        this.isPlaying = false;
      }
    },
    restartVideo() {
      const video = this.$refs.videoPlayer;
      video.currentTime = 0;
      video.play();
      this.isPlaying = true;
    },
    seekVideo(event) {
      const video = this.$refs.videoPlayer;
      video.currentTime = event.target.value;
    },
  },
};
</script>

<style scoped>
.video-container {
  max-width: 100%;
  margin: 20px auto;
  position: relative;
  width: 800px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background: #000;
}

.video-player {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.video-controls {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  bottom: 0;
  width: 100%;
  color: white;
}

button {
  background-color: #42b983;
  border: none;
  padding: 8px 16px;
  color: white;
  cursor: pointer;
  border-radius: 5px;
}

button:hover {
  background-color: #379f6f;
}

input[type="range"] {
  flex-grow: 1;
  margin: 0 10px;
  background: #444;
  height: 5px;
  border-radius: 2px;
  -webkit-appearance: none;
  appearance: none;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background: #42b983;
  cursor: pointer;
}

input[type="range"]::-webkit-slider-runnable-track {
  height: 5px;
  background: #444;
}

span {
  font-size: 12px;
}
</style>