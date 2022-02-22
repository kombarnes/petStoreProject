var shop = [
    {
        title: 'Purina Alaskan Cod Dog Food',
        image: 'https://img.chewy.com/is/image/catalog/142438_MAIN._AC_SS232_V1616105211_.jpg',
        price: '24.99',
        
    },
    {
        title: 'Wellness Wild Tuna Cat Food',
        image: 'https://img.chewy.com/is/image/catalog/119917_MAIN._SS190_V1621987350_.jpg',
        price: '30.25',
        
    },
    {
        title: 'Cesar Classic Loaf Beef Dog',
        image: 'https://img.chewy.com/is/image/catalog/86492_MAIN._AC_SS232_V1621517247_.jpg',
        price: '21.99',
        
    },
    {
        title: 'Cesar Softies Dog Treats',
        image: 'https://img.chewy.com/is/image/catalog/110534_MAIN._AC_SS232_V1541191345_.jpg',
        price: '8.99',
        
    },
    {
        title: 'Bones and Chews Jerky Dog Treats',
        image: 'https://img.chewy.com/is/image/catalog/131620_MAIN._AC_SS232_V1516821060_.jpg',
        price: '11.99',
        
    },
    {
        title: 'Greenies Salmon Cat Treats',
        image: 'https://img.chewy.com/is/image/catalog/214725_MAIN._AC_SS232_V1577111640_.jpg',
        price: '4.48',
        
    },
    {
        title: 'Frisco Cat and Dog Bed',
        image: 'https://img.chewy.com/is/image/catalog/210135_MAIN._AC_SS232_V1589289188_.jpg',
        price: '24.99',
        
    },
    {
        title: 'Hartz Dog Pee Pads',
        image: 'https://img.chewy.com/is/image/catalog/93304_MAIN._AC_SS232_V1620843154_.jpg',
        price: '30.25',
        
    },
    {
        title: 'Fresh Step Febreze Cat Litter',
        image: 'https://img.chewy.com/is/image/catalog/157667_MAIN._AC_SS232_V1576597394_.jpg',
        price: '21.99',
        
    },
    {
        title: 'Disney Mickey Mouse Sweater (M)',
        image: 'https://img.chewy.com/is/image/catalog/264655_MAIN._AC_SS232_V1627335757_.jpg',
        price: '13.99',
        
    },
    {
        title: 'Frisco Striped Hoodie',
        image: 'https://img.chewy.com/is/image/catalog/224253_MAIN._AC_SS232_V1637655169_.jpg',
        price: '8.00',
        
    },
    {
        title: 'Petlibro Automatic Feeder',
        image: 'https://img.chewy.com/is/image/catalog/277463_MAIN._AC_SS232_V1621373653_.jpg',
        price: '58.79',
        
    },


]

var postHTML = " "

for (var i = 0; i < shop.length; i++) {
    var heading = '<div class="product ' + '"><span><h5 class="titles">' + shop[i].title + '</h5>'
    var image = '<img src="' + shop[i].image + '"/'
    var price = '<p> $' + shop[i].price + '</p></span>'
    var button = '<button class="btn btn-block btn-primary"> Add to cart</button></div>'
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