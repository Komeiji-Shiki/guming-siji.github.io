function obcboPic() {
    var backPicture = document.getElementById("page-header");
    if (backPicture.style.backgroundImage == "") {
        var background_urls = [
            'https://s2.loli.net/2024/08/04/pAGS5BT4hJgQkyf.jpg',
            'https://s2.loli.net/2024/08/04/YLOyw9cmRthCSui.jpg',
            'https://s2.loli.net/2024/08/04/Mb6pxg3jJYWEfDa.png',
            'https://s2.loli.net/2024/08/04/sg9TUqe7B2nRb4i.jpg'
        ]
        var url = background_urls[Math.floor((Math.random() * background_urls.length))];
        var urlPhoto = ('background-image:url(' + url + ')');
        console.log("BackGround URL:" + url);
        backPicture.setAttribute("style", urlPhoto);
    }
}