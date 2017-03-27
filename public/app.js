  var createList = function(){
    var list = document.createElement('ul');
    list.classList.add('cat');
    return list;
  };

  var createName = function(catName){
    var name = document.createElement('li');
    name.innerText = 'Name: ' + catName;
    return name;
  };

  var createFood = function(topFood){
    var food = document.createElement('li');
    food.innerText = 'Favourite food: ' + topFood;
    return food;
  };

  var createImage = function(url){
    var image = document.createElement('li');
    image.innerHTML = '<img width="500" src="' + url + '">';
    return image;
  };

  var appendElements = function(cats, list, catName, catFood, catImage){
    list.appendChild(catName);
    list.appendChild(catFood);
    list.appendChild(catImage);
    cats.appendChild(list);
  };

  var addCat = function(cat){

    var list = createList();
    var catName = createName(cat.name);
    var catFood = createFood(cat.food);
    var catPicture = createImage(cat.image);

    var cats = document.getElementById('cats');

    appendElements(cats, list, catName, catFood, catPicture); 
  };

  var Cat = function(name, food, image){
    this.name = name,
    this.food = food,
    this.image = image
  };

  var gary = new Cat("Gary", "Cheese", "http://www.catster.com/wp-content/uploads/2017/03/MrChat5.jpg");

  var boba = new Cat("Boba", "Sock fluff", "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg");

  var barnaby = new Cat("Barnaby", "Tuna", "http://66.media.tumblr.com/8a827e13ebb5db7d16e2b1c4cbe7ce70/tumblr_odtp4ftIhB1uhevdso1_400.jpg");

  var max = new Cat("Max", "Whiskas Temptations", "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg");

  var app = function() {
    addCat(boba);
    addCat(barnaby);
    addCat(max);
    addCat(gary);
  };


  window.onload = app;