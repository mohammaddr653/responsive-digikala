var slidingMenu = document.getElementById('sliding-menu');
var blackBackground = document.getElementById('black-background');
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
