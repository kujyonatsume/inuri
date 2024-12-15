<script lang="ts" setup>

</script>
<template>
  <header>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03" aria-expanded="true" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="/">魯尼按鈕</a>
        <div class="collapse navbar-collapse show" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <hr>
            <a class="nav-link" href="https://www.youtube.com/@IruniIanvs" target="_blank">
              <i class="bi bi-youtube" style="color: red;"></i>YouTube
            </a>
            <a class="nav-link" href="https://x.com/iruni_ianvs" target="_blank">
              <i class="bi bi-twitter-x"></i>X (Twitter)
            </a>
            <a class="nav-link" href="https://www.instagram.com/iruni_ianvs" target="_blank">
              <i class="bi bi-instagram" style="color:mediumvioletred;"></i>Instagram
            </a>
            <a class="nav-link" href="https://www.facebook.com/iruniianvs" target="_blank">
              <i class="bi bi-facebook" style="color:royalblue;"></i>Facebook
            </a>
            <a class="nav-link" href="https://www.twitch.tv/iruni_ianvs" target="_blank">
              <i class="bi bi-twitch" style="color: blueviolet;"></i>Twitch
            </a>
            <hr>
            <a class="nav-link" href="/about"><i class="bi bi-braces"></i>關於</a>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
<style lang="css">
#navbarToggleExternalContent {
  padding: 20px;
  margin: 20px;
  width: 100%;
}

.nav-link:hover {
  background-color: gainsboro;
  color: black
}

.nav-link {
  color: black;

}

a.nav-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 8px;
}
</style>
