<script lang="tsx" setup>
useHead({
  script: [{ src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" }, { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" }]
})

</script>

<template>
  <Html>

  <Head>
    <title>Inuri-Sound</title>

    <Meta charset="utf-8" />
    <Meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <Link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous" />
  </Head>

  <Body>
    <header>
      <!-- place navbar here -->
    </header>
    <main>
      <div class="container">
        <NuxtPage />
      </div>
    </main>
    <footer>
      <!-- place footer here -->
    </footer>
    <!-- Bootstrap JavaScript Libraries -->

  </Body>

  </Html>
</template>