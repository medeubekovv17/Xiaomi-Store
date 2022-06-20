function change(element) {
    var a = element.innerHTML;
    switch (a) {
        case "Products":
            document.getElementById("phones").src ="https://media.croma.com/image/upload/v1605132165/Croma%20Assets/Entertainment/Headphones%20and%20Earphones/Images/8996954341406.png";
            document.getElementById("maintext").innerHTML = "This is the Xiaomi Mi Super Bass Wireless Headphones";
            document.getElementById("podtext").innerHTML = "For those who live their life in music and find music in the tune of life, the Xiaomi Mi Super Bass Wireless Headphones is a boon for them. <br> If you want your music to be a constant companion to you then this is the ideal product for you with heighten your music experience by providing you with surround sound quality that you can never move on from. Enjoy perfect flexibility and mobility with amazing musical quality with these headphones giving you a truly awesome audio experience.";
            break;
        case "Store":
            document.getElementById("phones").src ="https://www.giztop.com/media/catalog/product/cache/dc206057cdd42d7e34b9d36e347785ca/x/i/xiaomi_notebook_pro_15_3.png";
            document.getElementById("maintext").innerHTML = "This is the Xiaomi Mi Notebook Pro";
            document.getElementById("podtext").innerHTML = "The powerful Windows 10 operating system makes it easy to check E-mail and manage digital files. Powered by 11th Gen Intel Core processors, designed with HDMI output, featuring powerful graphics, all of this give users a full suite for using dominance and offer users a truly seamless using experience.";
            break;
        case "About us":
            document.getElementById("phones").src ="https://www.kibotek.com/wp-content/uploads/2021/05/kiboTEK_xiaomi_mi_tv_p1_50_011.png";
            document.getElementById("maintext").innerHTML = "About Xiaomi Company";
            document.getElementById("podtext").innerHTML = "We provide more than 500 types of goods: smartphones, laptops, electric vehicles, smart home devices and much more. In warehouses, products are always available, so you don't have to wait long for the goods to be received.";
            break;
        case "Contacts":
            document.getElementById("phones").src ="https://icon-library.com/images/1034176-contact-us_8638.png";
            document.getElementById("maintext").innerHTML = "Email: sales@mi.com.kz";
            document.getElementById("podtext").innerHTML = "Online store <br> Receiving orders: around the clock <br> Online store: Mon-Sun 24/7 <br> +7(727) 300 03 30 <br>+7(778) 746 38 07";
            break;    
    }
}

$("#phones").animate({top: '+=50px', opacity: '0'}, "fast");
$("#phones").animate({top: '-=50px', opacity: '1'}, "fast");

$("#products").click(function(){
  $("#phones").animate({top: '+=50px', opacity: '0'}, "fast");
  $("#phones").animate({top: '-=50px', opacity: '1'}, "fast");
}); 

$("#store").click(function(){
  $("#phones").animate({top: '+=50px', opacity: '0'}, "fast");
  $("#phones").animate({top: '-=50px', opacity: '1'}, "fast");
}); 

$("#aboutus").click(function(){
  $("#phones").animate({top: '+=50px', opacity: '0'}, "fast");
  $("#phones").animate({top: '-=50px', opacity: '1'}, "fast");
}); 

$("#contacts").click(function(){
  $("#phones").animate({top: '+=50px', opacity: '0'}, "fast");
  $("#phones").animate({top: '-=50px', opacity: '1'}, "fast");
}); 


function big(element){
    element.style.fontSize = "30px";
}
function small(element){
    element.style.fontSize = "25px";
}

function load(){
$(".text").animate({top: '+=50px',opacity: '1'}, "slow");
}

$("#products").click(function load(){
    $(".text").animate({top: '+=50px',opacity: '0'}, "slow");
    $(".text").animate({top: '-=50px',opacity: '1'}, "slow");
}); 

$("#store").click(function load(){
    $(".text").animate({top: '+=50px',opacity: '0'}, "slow");
    $(".text").animate({top: '-=50px',opacity: '1'}, "slow");
}); 

$("#aboutus").click(function load(){
    $(".text").animate({top: '+=50px',opacity: '0'}, "slow");
    $(".text").animate({top: '-=50px',opacity: '1'}, "slow");
}); 

$("#contacts").click(function load(){
    $(".text").animate({top: '+=50px',opacity: '0'}, "slow");
    $(".text").animate({top: '-=50px',opacity: '1'}, "slow");
}); 


