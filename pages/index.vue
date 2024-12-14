<script lang="tsx" setup>
import AccordionItem from "@/components/AccordionItem";
var audio = {} as HTMLAudioElement
onMounted(() => {
    audio = new Audio()
})

var list = (await useFetch("/api/all")).data.value

async function ButtonClick(events: MouseEvent) {
    var btn = (events.target as HTMLButtonElement)
    audio.pause()
    audio.currentTime = 0
    audio.src = "/api/sound/" + btn.innerText
    audio.play()
}

const Item = (name: string) => <button type="button" class="btn btn-primary" onClick={ButtonClick}>{name}</button>
</script>
<template>
    <div class="accordion" id="accordionExample">
        <AccordionItem id="accordionExample" label="音檔" :content="list.map(Item)" />
    </div>
</template>
