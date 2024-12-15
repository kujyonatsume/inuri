<script lang="tsx" setup>

var audio = {} as HTMLAudioElement
onMounted(() => {
    audio = new Audio()
})

var list = (await useFetch("/api/all")).data.value

function click(name: string) {
    audio.pause()
    audio.currentTime = 0
    audio.src = "/api/sound/" + name
    audio.play()
}
</script>
<template>
    <div class="card" style="width: 100%;">
        <div class="card-body">
            <h5 class="card-title">全部</h5>
            <button v-for="name in list" id="vo-btn" class="btn" @click="() => click(name)">{{ name.replace(".mp3",
                "")}}</button>
        </div>
    </div>
</template>
<style lang="css">
.accordion-item:first-of-type>.accordion-header .accordion-button {
    background-color: unset
}

#title {
    text-align: center;
}

.card {
    border-radius: 20px;
    background-color: unset;
    padding: 10px;
    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.25);
}

#vo-btn {
    border-radius: 50px;
    background-color: rgb(103, 139, 255);
    color: bisque;
    font-size: 18px;
    margin: 3px;

    box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.15);
}
</style>