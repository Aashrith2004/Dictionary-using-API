let searchInput = document.querySelector("#searchInput");
let searchBtn = document.querySelector("#searchBtn");
let textsec = document.querySelector(".text")
const getData= async (value) => {
    let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${value}`);
    let jsondata= await data.json();
    textsec.innerHTML=""
    let div = document.createElement("div");
    div.classList.add("detail");
    div.innerHTML=`
            <h2>Word: <span>${jsondata[0].word}</span></h2>
            <p>${jsondata[0].meanings[0].partOfSpeech}</p>
            <p>Meaning: <span>${jsondata[0].meanings[0].definitions[0].definition}</span></p>
            <p>Example: <span>${jsondata[0].meanings[0].definitions[0].example == undefined ?"Not Found": jsondata[0].meanings[0].definitions[0].example  }</span></p>
            <p>Synonyms: <span>${jsondata[0].meanings[0].synonyms}</span></p>

            <a href=${jsondata[0].sourceUrls[0]} target="_blank">Read More</a>
    `
    document.querySelector(".text").appendChild(div)
    textsec.style.display = "block";
}


searchBtn.addEventListener("click", function(){
    let value = searchInput.value;
    if(value==="")
    {
        alert("Enter a word");
    }else
    {
        getData(value);
    }
})
