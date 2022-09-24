let btn = document.getElementsByClassName("bt1")[0];
let catDiv = document.getElementsByClassName("cats-image-div")[0];

btn.addEventListener("click", getPics);

function getPics(){
    fetch(" https://api.thecatapi.com/v1/images/search")
    .then(response =>  response.json())
    .then((data)=> {
        catDiv.innerHTML= '';
        let catUrl = data[0].url;
        let catsImg = document.createElement("img");
        catsImg.classList.add("imgSize")
        catsImg.setAttribute('src',`${catUrl}`);
        catDiv.appendChild(catsImg);
    })
    .catch(err => console.log(err));

}