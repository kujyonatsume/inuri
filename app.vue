<script lang="tsx" setup>
useHead({
  script: [
    { src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" },
    { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" },
    { src: "https://cdn.jsdelivr.net/npm/jquery@3.6.4/dist/jquery.min.js" }
  ]
})

</script>

<template>
  <Html>

  <Head>
    <title>Inuri-Sound</title>

    <Meta charset="utf-8" />
    <Meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <Link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
    <Link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
    </Head>

  <Body>
    <SideBar />
    <main>
      <div class="container-md">
        <NuxtPage />
      </div>
    </main>
    <footer>
      <Floor />
    </footer>
  </Body>

  </Html>
</template>
<style>
body {
  margin: 0;
  padding: 0;
  display: flex;
  width: 100vw;
  height: fit-content;
  flex-direction: column;
}

@media (min-width: 768px) {
  header, footer {
    padding: 10px;
    position: fixed;
    left: 0;
    width: 20%;
  }
  footer {
    bottom: 0;
  }
  header {
    position: fixed;
    top: 0;
    height: max(100vh, 100%);
    border-radius: 10px;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
  }

  main {
    position: absolute;
    padding: 10px;
    top: 0;
    right: 0;
    min-height: 120vh;
    width: 80%;
  }


}

/* 手機版排版 */
@media (max-width: 767px) {

  header,
  main,
  footer {
    flex: none;
    width: 100%;
  }

  main {
    min-height: 75vh;
  }
}
</style>