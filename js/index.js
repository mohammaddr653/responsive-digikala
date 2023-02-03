var slidingMenu = document.getElementById('sliding-menu');
var blackBackground = document.getElementById('black-background');
var productsCategoryDiv=document.querySelector("div#header-container div.header-bottom-row>div");
var mainProductsMenu=document.getElementById("main-products-menu");
var productCategoryLis=document.querySelectorAll("div#main-products-menu>nav>ul>li");
var productCategoryUls=document.querySelectorAll("div#main-products-menu>nav>ul>li>ul");
function openSlidingMenu(){
    slidingMenu.style.right=0;
    showBlack();
}
function closeSlidingMenu(){
    slidingMenu.style.right="-100%";
    closeBlack();
}
function showBlack(){
    blackBackground.style.display="block";
}
function closeBlack(){
    blackBackground.style.display="none";
}
productsCategoryDiv.addEventListener("mouseenter",openMainProductsMenu);
productsCategoryDiv.addEventListener("mouseleave",closeMainProductsMenu);
mainProductsMenu.addEventListener("mouseenter",openMainProductsMenu);
mainProductsMenu.addEventListener("mouseleave",closeMainProductsMenu);
function openMainProductsMenu(){
    mainProductsMenu.classList.add('main-products-menu-fade');
    productsCategoryDiv.style.borderBottom="2px solid #f9152c";
    productCategoryUls[0].style.display="block";
    // productCategoryUls[0].style.backgroundColor="black";

}
function closeMainProductsMenu(){
    mainProductsMenu.classList.remove('main-products-menu-fade');
    productsCategoryDiv.style.borderBottom="2px solid rgba(0, 0, 0, 0)";
}
for(var n=1 ; n<=productCategoryLis.length-1 ; n++ ){
    productCategoryLis[n].addEventListener("mouseenter",jj);
}
productCategoryLis[0].addEventListener("mouseenter",function(){
    productCategoryUls[0].style.display="block";
})
function jj(){
    // alert("hh");
    productCategoryUls[0].style.display="none";
}
