function obcboPic() {
    var backPicture = document.getElementById("page-header");
    if (backPicture.style.backgroundImage == "") {
        var background_urls = [
            'https://img2.imgtp.com/2024/03/29/WvVO83FS.jpg',
            'https://img2.imgtp.com/2024/03/29/VwCyUm4p.jpg',
            'https://img2.imgtp.com/2024/03/29/8dTrzJdP.jpg',
            'https://img2.imgtp.com/2024/03/29/UcGAUzbD.png',
            'https://img2.imgtp.com/2024/03/29/muBZ4QVr.jpg',
            'https://img2.imgtp.com/2024/03/29/9awhNUqp.jpg',
            'https://img2.imgtp.com/2024/03/29/4JWtZ2YT.jpg',
            'https://img2.imgtp.com/2024/03/29/IdUNW3Cn.jpg',
            'https://img2.imgtp.com/2024/03/29/JNRJTAIL.png',
            'https://img2.imgtp.com/2024/03/29/UDWGMue4.jpg',
            'https://img2.imgtp.com/2024/03/29/vU9csbFH.png',
            'https://img2.imgtp.com/2024/03/29/pR92905y.png',
            'https://img2.imgtp.com/2024/03/29/AguXnpAV.jpg',
            'https://img2.imgtp.com/2024/03/29/LGJHqRBG.jpg',
            'https://img2.imgtp.com/2024/03/29/Ehu1RsuL.jpg',
            'https://img2.imgtp.com/2024/03/29/111Xhj7V.jpg',
            'https://img2.imgtp.com/2024/03/29/39ujAML5.jpg',
            'https://img2.imgtp.com/2024/03/29/DYVXNMhy.jpg',
            'https://img2.imgtp.com/2024/03/29/sPQo2Y9T.jpg'
        ]
        var url = background_urls[Math.floor((Math.random() * background_urls.length))];
        var urlPhoto = ('background-image:url(' + url + ')');
        console.log("BackGround URL:" + url);
        backPicture.setAttribute("style", urlPhoto);
    }
}