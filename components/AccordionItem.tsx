import type { JSX } from "vue/jsx-runtime"

export default function (data: {
    id: string
    label: string
    content: JSX.Element[]
}) {
    return (
        <div class="accordion-item">
            <h2 class="accordion-header" id={`heading${data.label}`}>
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${data.label}`} aria-expanded="true" aria-controls="collapseOne">
                    {data.label}
                </button>
            </h2>
            <div id={`collapse${data.label}`} class="accordion-collapse collapse" aria-labelledby={`heading${data.label}`} data-bs-parent={`#${data.id}`}>
                < div class="accordion-body">{data.content}</div >
            </div>
        </div>
    )
}