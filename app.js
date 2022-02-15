var shop = [
    {
        title: 'Purina Beyond Alaskan Cod',
        image: 'https://img.chewy.com/is/image/catalog/142438_MAIN._AC_SS232_V1616105211_.jpg',
        price: '$24.99',
        
    },
    {
        title: 'Purina Beyond Alaskan Cod',
        image: 'https://img.chewy.com/is/image/catalog/142438_MAIN._AC_SS232_V1616105211_.jpg',
        price: '$24.99',
        
    },
    {
        title: 'Purina Beyond Alaskan Cod',
        image: 'https://img.chewy.com/is/image/catalog/142438_MAIN._AC_SS232_V1616105211_.jpg',
        price: '$24.99',
        
    },


]

var postHTML = " "

for (var i = 0; i < shop.length; i++) {
    var heading = '<div class="product ' + '"><span><h5 class="titles">' + shop[i].title + '</h5>'
    var image = '<img src="' + shop[i].image + '"/'
    var price = '<p> $' + shop[i].price + '</p></span>'
    var button = '<button class="btn btn-primary"> Add to cart</button></div>'
    var concatThis = heading + image + price + button
    postHTML = postHTML + concatThis

}
document.getElementById('market').innerHTML = postHTML

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }