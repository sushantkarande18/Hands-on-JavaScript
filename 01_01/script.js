import data from "./data";

const mainCOontent = document.querySelector(".main-content");

const Card = (data) => {
    const imgData = data[0] ;

    const markup = `
    <figure class="image">
        <img srcset="
        ${imgData.urls.full} ${imgData.urls.full}w
        ${imgData.urls.full} ${imgData.urls.full}w
        "
        </img>
    </figure>
    `

}