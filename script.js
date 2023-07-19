var quotes = [
  ["Never trust anyone too much remember, the devil was once an angel."],
  [
    "You focus on the trivial and lose sight of what is most important ,change is impossible in this fog of ignorance.",
  ],
  ["it’s painful when you get disappointed by the person you look up to."],
  ["Revenge is just the path you take to escape your suffering."],
  ["The world is cruel but also very beautiful."],
  ["People’s lives don’t end when they die, it ends when they lose faith."],
  ["A dropout will beat a genius through hard work."],
  ["Laws exist only for those who cannot live without clinging to them."],
  [
    "Any betrayal you can see is trivial, what is truly frightening and much more lethal, is the betrayal you cannot see.",
  ],
  [
    "The big secret to breaking the rules is to make it look as though you’re following them.",
  ],
  ["I don't like expending more effort than I have to."],
];
var Names = [
  ["Ken Kaneki"],
  ["Itachi Uchiha"],
  ["Misaki Ayuzawa"],
  ["Ichigo Kurosaki"],
  ["Mikasa Ackerman"],
  ["Itachi Uchiha"],
  ["Rock Lee"],
  ["Sosuke Aizen"],
  ["Sosuke Aizen"],
  ["Johan Liebert"],
  ["Kiyotaka Ayanokouji"],
];

var backgroundImages = [
  [
    "https://c4.wallpaperflare.com/wallpaper/155/122/485/anime-tokyo-ghoul-re-ken-kaneki-wallpaper-preview.jpg",
  ],
  [
    "https://c4.wallpaperflare.com/wallpaper/365/244/884/uchiha-itachi-naruto-shippuuden-anbu-silhouette-wallpaper-preview.jpg",
  ],
  [
    "https://c4.wallpaperflare.com/wallpaper/287/427/776/ayuzawa-black-eyes-hair-wallpaper-preview.jpg",
  ],
  [
    "https://c4.wallpaperflare.com/wallpaper/904/437/143/bleach-kurosaki-ichigo-manga-wallpaper-preview.jpg",
  ],
  [
    "https://c4.wallpaperflare.com/wallpaper/513/102/486/shingeki-no-kyojin-mikasa-ackerman-anime-girls-wallpaper-preview.jpg",
  ],
  [
    "https://c4.wallpaperflare.com/wallpaper/157/662/439/uchiha-itachi-naruto-anime-hd-wallpaper-preview.jpg",
  ],
  [
    "https://c4.wallpaperflare.com/wallpaper/885/856/46/naruto-shippuuden-rock-lee-anime-boys-wallpaper-preview.jpg",
  ],
  [
    "https://c4.wallpaperflare.com/wallpaper/671/998/552/bleach-s%C5%8Dsuke-aizen-wallpaper-preview.jpg",
  ],
  [
    "https://c4.wallpaperflare.com/wallpaper/890/387/812/aizen-bleach-grande-menos-wallpaper-preview.jpg",
  ],
  [
    "https://c4.wallpaperflare.com/wallpaper/254/330/393/anime-monster-johan-liebert-hd-wallpaper-preview.jpg",
  ],
  [
    "https://w0.peakpx.com/wallpaper/588/271/HD-wallpaper-ayanokoji-kiyotaka-ayanokouji-kiyotaka-classroom-of-elite.jpg",
  ],
];
var colors = [
  "#000000", 
  "#36454F", 
  "#E6C1AD", 
  "#000000", 
  "#FFFFFF", 
  "#FFD700", 
  "#FFA500", 
  "#C8A2C8", 
  "#000000",
  "#000000",
  "#FFFFFF", 
];
var index = 0;
function generateRandomQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomIndex];
  index = randomIndex;
  var quotedText = '"' + randomQuote + '"';
  var authorname = "- " + Names[index];

  document.getElementById("quote").textContent = quotedText + authorname;
}
function changeBackgroundImage() {
  var randomImage = backgroundImages[index];
  document.body.style.backgroundImage = "url('" + randomImage + "')";
}
function changeQuoteColor() {
  var color = colors[index];
  document.getElementById("quote").style.color = color;
}
document.getElementById("btn").addEventListener("click", function () {
  generateRandomQuote();
  changeBackgroundImage();
  changeQuoteColor();
});
generateRandomQuote();
changeBackgroundImage();
changeQuoteColor();
