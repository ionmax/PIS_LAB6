function OnClickButton(){
    const request = new Request("https://api.thecatapi.com/v1/images/search", {method: "GET"});
    fetch(request)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Что-то пошло не так на API сервере.');
            }
        })
        .then(response => {
            var cat = response[0];
            var imgUrl = cat.url;

            var img = document.createElement("img");
            img.src = imgUrl;
            img.style.height = "100%";
            img.style.width = "100%";
            img.id = "img";

            var div = document.getElementById("random-img");
            if(div.hasChildNodes()){
                div.removeChild(div.firstChild);
            }
            div.appendChild(img);
        })
        .catch(error => console.error(error));
    console.log("TEST");
}