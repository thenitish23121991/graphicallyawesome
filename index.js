$(document).ready(function(){

var boxes_arr = new Array();
var clear_interval;

setTimeout(function(){
$('.overlay_result_container').addClass('show_overlay_result');
},1300);

$('.overlay_button').bind('click',function(){
$('.graph_lightbox').addClass('show');
$('.lightbox_box').addClass('show');
});

$('.lightbox_box').bind('click',function(){
$('.graph_lightbox, .lightbox_box').removeClass('show');
});

for(var i=1;i<=25;i++){
boxes_arr.push(i);
}


function shuffle_array(arr){

if(arr.length != 0){
var rnum = Math.floor((Math.random()*arr.length)+1);
var num = arr[rnum];
$('#lightbox_box_'+num).addClass('show');
arr.push(arr[num]);
console.log(rnum);
}else{
clearInteval(clear_interval);
}

}


clear_interval = setInterval(function(){
shuffle_array(boxes_arr);
},600);


});