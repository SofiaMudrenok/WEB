let moods = [
    { 
        mood:"Веселий",
        url:"https://w7.pngwing.com/pngs/180/962/png-transparent-smiley-emoticon-smiley-miscellaneous-smiley-desktop-wallpaper-thumbnail.png "
    },
    {
       mood:"Сумний",
       url:"https://w7.pngwing.com/pngs/222/140/png-transparent-sad-emoticon-iphone-emoji-sadness-smiley-emoticon-emoji-face-electronics-face-emoji-face-thumbnail.png "
    },
    {
        mood:"Любов",
        url:"https://emojio.ru/images/apple-b/11.0/1f970.png"
    }
]
let output = "Moods: ";
for(let i = 0; i < moods.length; i++) {
    output += moods[i].mood + " ";
}
alert(`${output}`);
let num = (parseInt(prompt("N=")) - 1);
let img = document.getElementById("img1");
if(num >= 0 && num <= moods.length) {
    img.src = moods[num].url;
    img.height = 1000;
    img.width = 1000; 
}
else { alert("error: no mood"); }