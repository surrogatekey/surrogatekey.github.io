$(document).ready(function() {
});



fontsize = function () {
var fontSize = $("#ra_title").width() * 0.035;
var fontSize2 = $("#ra_square").width() * 0.05;
var fontSize3 = $("#raIntro").width() * 0.0145;  
//var fontSize3 = $("#raIntro").width() * 0.015;  
var fontSize4 = $("#raIntro1").width() * 0.04;  
$("#ra_txt").css('font-size', fontSize);
$(".TxtSmear").css('font-size', fontSize2);
$("#raIntro").css('font-size', fontSize3);
$("#raIntro1").css('font-size', fontSize4);
//$(".blob7").css('padding', wtf);
};

$(window).resize(fontsize);
$(document).ready(fontsize);

//  var ziz = $("#raColMerge").width(); 
//  alert(ziz);

leftbump = function () {
  var leftBump = $("#ra_square").width(); 
  var colHeight = $("#raCol1").height();
  //alert(colHeight);
$("#ra_title").css('left', leftBump);
    $("#ra_BGR").css('left', leftBump);
  $("#raIntro1").css('left', leftBump);
  $("#raCol2").css('height', colHeight);
//    var blockR = $("#raIntro1").width();

};
$(window).resize(leftbump);
$(document).ready(leftbump);

var audioIntro = document.getElementById('audio_intro');
var audioId = document.getElementById('audio_player');
var audioId2 = document.getElementById('audio_player2');
var audioId3 = document.getElementById('audio_player3');
var audioId4 = document.getElementById('audio_player4');

var audioRfIntro = $('#audio_intro');
var audioRf = $('#audio_player');
var audioRf2 = $('#audio_player2');
var audioRf3 = $('#audio_player3');
var audioRf4 = $('#audio_player4');

//Diamond alternative
//  e.preventDefault();
$('#raIntro').addClass('fade-out-faster'); 
//  $('#Diamond1').removeClass('fade-in-fast diamondColor1'); 
//  $('#Diamond1').addClass('burst-out diamondColor2'); 
//  $('#Diamond1A').removeClass('fade-in-fast diamondColorA1'); 
//  $('#Diamond1A').addClass('burst-outA diamondColorA2'); 
//  $('#DiamondGo').removeClass('fade-in-fast'); 
//  $('#DiamondGo').addClass('nope'); 

  setTimeout(function() {
$('#raIntro').addClass('nope'); 
$('#ra_canvas').removeClass('canvas-hide'); 
$('#ra_canvas').addClass('canvas-show'); 
    },2000);

  
  setTimeout(function() {
    $( 'h1' ).letterDrop();
    $('#ra_title').removeClass('nope');        $('#ra_title').addClass('move-down delayed');
    },2200);

  setTimeout(function() {audioRfIntro.get(0).play();},4500);


  setTimeout(function() {
  $('#Navigator').removeClass('nope'); 

  $('#arrow1').addClass('arrow fade-in in1B'); 
  $('#arrow2').addClass('arrow fade-in in2B'); 
  $('#arrow3').addClass('arrow fade-in in3B'); 
  $('#arrow4').addClass('arrow fade-in in4B'); 
  
  $('#arrow1Text').addClass('fade-in in1B'); 
    
  $('#b1').addClass('blob blob1 fade-in in1'); 
  $('#b2').addClass('blob blob2 fade-in in2'); 
  $('#b3').addClass('blob blob3 fade-in in3'); 
  $('#b4').addClass('blob blob4 fade-in in4'); 
  $('#bSelector').removeClass('hider');   $('#bSelector').addClass('fade-in in5'); 
    $('#txt1').addClass('TxtSmear TxtSmear1 fade-in in1A'); 
  $('#txt2').addClass('TxtSmear TxtSmear2 fade-in in2A'); 
  $('#txt3').addClass('TxtSmear TxtSmear3 fade-in in3A'); 
  $('#txt4').addClass('TxtSmear TxtSmear4 fade-in in4A'); 

  $('#b1a').addClass('blobA blob1a fade-in in1A'); 
  $('#b2a').addClass('blobA blob2a fade-in in2A'); 
  $('#b3a').addClass('blobA blob3a fade-in in3A'); 
  $('#b4a').addClass('blobA blob4a fade-in in4A'); 
  $('#b5a').removeClass('hider'); 
  $('#b5a').addClass('fade-in in5A'); 

  $('#Lb1').addClass('LbFrame fade-in in5A'); 
  $('#Lb2').addClass('LbFrame fade-in in5A'); 
  $('#Lb3').addClass('LbFrame fade-in in5A'); 
  $('#Lb4').addClass('LbFrame fade-in in5A'); 

  $('#bSelector6').removeClass('hider'); 
$('#bSelector6').addClass('fade-in in5'); 
  
  $('#b7').addClass('blob blob7 fade-in'); 
  $('#b8').addClass('blob blob8 fade-in'); 
  $('#b9').addClass('blob blob9 fade-in'); 
  
  $('#b6a').removeClass('hider');  $('#b6a').addClass('fade-in in5A');
  
  $('#b7a').addClass('blobA blob7a fade-in in5A'); 
  $('#b8a').addClass('blobA blob8a fade-in in5A'); 
  $('#b9a').addClass('blobA blob9a fade-in in5A');

$('#I1').removeClass('hider');  $('#I1').addClass('scroll-txt intro1');
$('#I2').removeClass('hider');  $('#I2').addClass('scroll-txt intro2');
    
    
  },600);
  
//End diamond alternative


//*EndAudio1
audioId.onended = function() {
//    alert("The audio has ended");
//**SHOW NAV BLOBS (REMOVE FADE-OUTS)  
$('#b1').removeClass('fade-out-fast'); 
$('#b2').removeClass('fade-out-fast'); 
$('#b3').removeClass('fade-out-fast'); 
$('#b4').removeClass('fade-out-fast'); 
$('#b1a').removeClass('fade-out-fast'); 
$('#b2a').removeClass('fade-out-fast'); 
$('#b3a').removeClass('fade-out-fast'); 
$('#b4a').removeClass('fade-out-fast'); 

//**SHOW NAV SCALE (REMOVE SCALE-UP )  
$('#b1').removeClass('move-1');
$('#b1a').removeClass('move-1a');
$('#b2').removeClass('move-2');
$('#b2a').removeClass('move-2a');
$('#b3').removeClass('move-3');
$('#b3a').removeClass('move-3a');
$('#b4').removeClass('move-4');
$('#b4a').removeClass('move-4a');

//**HIDE AUDIO PROGRESS (REMOVE FADE-INS)  
$('#ap1').removeClass('fade-in-fast');
$('#ap2').removeClass('fade-in-fast');
$('#ap3').removeClass('fade-in-fast');
$('#ap4').removeClass('fade-in-fast');
$('#ap1').removeClass('fade-in');
$('#ap2').removeClass('fade-in');
$('#ap3').removeClass('fade-in');
$('#ap4').removeClass('fade-in');
  
//**HIDE AUDIO PROGRESS (ADD FADE OUTS)  
$('#ap1').removeClass('fade-in-progress');
$('#ap1').addClass('fade-out-progress');
$('#ap1').addClass('not-clickable');  
$('#ap2').addClass('not-clickable');
$('#ap3').addClass('not-clickable');
$('#ap4').addClass('not-clickable');
  
//**SHOW NAV BLOBS (ADD FADE IN FAST)  
$('#b1').addClass('fade-in-fast'); 
$('#b2').addClass('fade-in-fast'); 
$('#b3').addClass('fade-in-fast'); 
$('#b4').addClass('fade-in-fast'); 
$('#b1a').addClass('fade-in-fast'); 
$('#b2a').addClass('fade-in-fast'); 
$('#b3a').addClass('fade-in-fast'); 
$('#b4a').addClass('fade-in-fast'); 

//*RESTORE LABELS
$('.TxtSmear1').removeClass('highlight-label'); 
$('.TxtSmear1').addClass('fade-in-fast'); 
  
$('#Lb1').removeClass('fade-out-fast'); 
$('#Lb2').removeClass('fade-out-fast'); 
$('#Lb3').removeClass('fade-out-fast'); 
$('#Lb4').removeClass('fade-out-fast'); 
  
//**SHOW LBS (ADD FADE IN FAST)  
$('#Lb1').addClass('fade-in-fast'); 
$('#Lb2').addClass('fade-in-fast'); 
$('#Lb3').addClass('fade-in-fast'); 
$('#Lb4').addClass('fade-in-fast'); 

document.getElementById("hideLb1").style.visibility = "hidden";  
document.getElementById("hideLb2").style.visibility = "hidden";  
document.getElementById("hideLb3").style.visibility = "hidden";  
document.getElementById("hideLb4").style.visibility = "hidden";  

//*Show selector blobs
$('#bSelector').addClass('fade-in-fast'); 
$('#b5a').addClass('fade-in-fast'); 
$('#bSelector6').addClass('fade-in-fast'); 
$('#b6a').addClass('fade-in-fast'); 
$('#bSelector').removeClass('fade-out-fast'); 
$('#b5a').removeClass('fade-out-fast'); 
$('#bSelector6').removeClass('fade-out-fast'); 
$('#b6a').removeClass('fade-out-fast'); 
//*Show arrows
$('.arrow').removeClass('fade-out-fast'); 
$('.arrow').addClass('fade-in-fast'); 
};

//*EndAudio2
audioId2.onended = function() {
//    alert("The audio has ended");
//**SHOW NAV BLOBS (REMOVE FADE-OUTS)  
$('#b1').removeClass('fade-out-fast'); 
$('#b2').removeClass('fade-out-fast'); 
$('#b3').removeClass('fade-out-fast'); 
$('#b4').removeClass('fade-out-fast'); 
$('#b1a').removeClass('fade-out-fast'); 
$('#b2a').removeClass('fade-out-fast'); 
$('#b3a').removeClass('fade-out-fast'); 
$('#b4a').removeClass('fade-out-fast'); 

//**SHOW NAV SCALE (REMOVE SCALE-UP )  
$('#b1').removeClass('move-1');
$('#b1a').removeClass('move-1a');
$('#b2').removeClass('move-2');
$('#b2a').removeClass('move-2a');
$('#b3').removeClass('move-3');
$('#b3a').removeClass('move-3a');
$('#b4').removeClass('move-4');
$('#b4a').removeClass('move-4a');

//**HIDE AUDIO PROGRESS (REMOVE FADE-INS)  
$('#ap1').removeClass('fade-in-fast');
$('#ap2').removeClass('fade-in-fast');
$('#ap3').removeClass('fade-in-fast');
$('#ap4').removeClass('fade-in-fast');
$('#ap1').removeClass('fade-in');
$('#ap2').removeClass('fade-in');
$('#ap3').removeClass('fade-in');
$('#ap4').removeClass('fade-in');
  
//**HIDE AUDIO PROGRESS (ADD FADE OUTS)  
$('#ap2').removeClass('fade-in-progress');
$('#ap2').addClass('fade-out-progress');
$('#ap2').addClass('not-clickable');  
$('#ap1').addClass('not-clickable');
$('#ap3').addClass('not-clickable');
$('#ap4').addClass('not-clickable');
  
//**SHOW NAV BLOBS (ADD FADE IN FAST)  
$('#b1').addClass('fade-in-fast'); 
$('#b2').addClass('fade-in-fast'); 
$('#b3').addClass('fade-in-fast'); 
$('#b4').addClass('fade-in-fast'); 
$('#b1a').addClass('fade-in-fast'); 
$('#b2a').addClass('fade-in-fast'); 
$('#b3a').addClass('fade-in-fast'); 
$('#b4a').addClass('fade-in-fast'); 

//*RESTORE LABELS
$('.TxtSmear2').removeClass('highlight-label'); 
$('.TxtSmear2').removeClass('highlight-z2'); 
$('.TxtSmear2').addClass('fade-in-fast'); 
  
$('#Lb1').removeClass('fade-out-fast'); 
$('#Lb2').removeClass('fade-out-fast'); 
$('#Lb3').removeClass('fade-out-fast'); 
$('#Lb4').removeClass('fade-out-fast'); 
  
//**SHOW LBS (ADD FADE IN FAST)  
$('#Lb1').addClass('fade-in-fast'); 
$('#Lb2').addClass('fade-in-fast'); 
$('#Lb3').addClass('fade-in-fast'); 
$('#Lb4').addClass('fade-in-fast'); 

document.getElementById("hideLb1").style.visibility = "hidden";  
document.getElementById("hideLb2").style.visibility = "hidden";  
document.getElementById("hideLb3").style.visibility = "hidden";  
document.getElementById("hideLb4").style.visibility = "hidden";  
  
//*Show selector blobs
$('#bSelector').addClass('fade-in-fast'); 
$('#b5a').addClass('fade-in-fast'); 
$('#bSelector6').addClass('fade-in-fast'); 
$('#b6a').addClass('fade-in-fast'); 
$('#bSelector').removeClass('fade-out-fast'); 
$('#b5a').removeClass('fade-out-fast'); 
$('#bSelector6').removeClass('fade-out-fast'); 
$('#b6a').removeClass('fade-out-fast'); 
//*Show arrows
$('.arrow').removeClass('fade-out-fast'); 
$('.arrow').addClass('fade-in-fast'); 
};

//*EndAudio3
audioId3.onended = function() {
//    alert("The audio has ended");
//**SHOW NAV BLOBS (REMOVE FADE-OUTS)  
$('#b1').removeClass('fade-out-fast'); 
$('#b2').removeClass('fade-out-fast'); 
$('#b3').removeClass('fade-out-fast'); 
$('#b4').removeClass('fade-out-fast'); 
$('#b1a').removeClass('fade-out-fast'); 
$('#b2a').removeClass('fade-out-fast'); 
$('#b3a').removeClass('fade-out-fast'); 
$('#b4a').removeClass('fade-out-fast'); 

//**SHOW NAV SCALE (REMOVE SCALE-UP )  
$('#b1').removeClass('move-1');
$('#b1a').removeClass('move-1a');
$('#b2').removeClass('move-2');
$('#b2a').removeClass('move-2a');
$('#b3').removeClass('move-3');
$('#b3a').removeClass('move-3a');
$('#b4').removeClass('move-4');
$('#b4a').removeClass('move-4a');
  
//**HIDE AUDIO PROGRESS (REMOVE FADE-INS)  
$('#ap1').removeClass('fade-in-fast');
$('#ap2').removeClass('fade-in-fast');
$('#ap3').removeClass('fade-in-fast');
$('#ap4').removeClass('fade-in-fast');
$('#ap1').removeClass('fade-in');
$('#ap2').removeClass('fade-in');
$('#ap3').removeClass('fade-in');
$('#ap4').removeClass('fade-in');
  
//**HIDE AUDIO PROGRESS (ADD FADE OUTS)  
$('#ap3').removeClass('fade-in-progress');
$('#ap3').addClass('fade-out-progress');
$('#ap3').addClass('not-clickable');  
$('#ap1').addClass('not-clickable');
$('#ap2').addClass('not-clickable');
$('#ap4').addClass('not-clickable');
  
//**SHOW NAV BLOBS (ADD FADE IN FAST)  
$('#b1').addClass('fade-in-fast'); 
$('#b2').addClass('fade-in-fast'); 
$('#b3').addClass('fade-in-fast'); 
$('#b4').addClass('fade-in-fast'); 
$('#b1a').addClass('fade-in-fast'); 
$('#b2a').addClass('fade-in-fast'); 
$('#b3a').addClass('fade-in-fast'); 
$('#b4a').addClass('fade-in-fast'); 

//*RESTORE LABELS
$('.TxtSmear3').removeClass('highlight-label'); 
$('.TxtSmear3').addClass('fade-in-fast'); 
  
$('#Lb1').removeClass('fade-out-fast'); 
$('#Lb2').removeClass('fade-out-fast'); 
$('#Lb3').removeClass('fade-out-fast'); 
$('#Lb4').removeClass('fade-out-fast'); 
  
//**SHOW LBS (ADD FADE IN FAST)  
$('#Lb1').addClass('fade-in-fast'); 
$('#Lb2').addClass('fade-in-fast'); 
$('#Lb3').addClass('fade-in-fast'); 
$('#Lb4').addClass('fade-in-fast'); 

document.getElementById("hideLb1").style.visibility = "hidden";  
document.getElementById("hideLb2").style.visibility = "hidden";  
document.getElementById("hideLb3").style.visibility = "hidden";  
document.getElementById("hideLb4").style.visibility = "hidden";  
  
//*Show selector blobs
$('#bSelector').addClass('fade-in-fast'); 
$('#b5a').addClass('fade-in-fast'); 
$('#bSelector6').addClass('fade-in-fast'); 
$('#b6a').addClass('fade-in-fast'); 
$('#bSelector').removeClass('fade-out-fast'); 
$('#b5a').removeClass('fade-out-fast'); 
$('#bSelector6').removeClass('fade-out-fast'); 
$('#b6a').removeClass('fade-out-fast'); 
//*Show arrows
$('.arrow').removeClass('fade-out-fast'); 
$('.arrow').addClass('fade-in-fast'); 
};

//*EndAudio4
audioId4.onended = function() {
//    alert("The audio has ended");
//**SHOW NAV BLOBS (REMOVE FADE-OUTS)  
$('#b1').removeClass('fade-out-fast'); 
$('#b2').removeClass('fade-out-fast'); 
$('#b3').removeClass('fade-out-fast'); 
$('#b4').removeClass('fade-out-fast'); 
$('#b1a').removeClass('fade-out-fast'); 
$('#b2a').removeClass('fade-out-fast'); 
$('#b3a').removeClass('fade-out-fast'); 
$('#b4a').removeClass('fade-out-fast'); 

//**SHOW NAV SCALE (REMOVE SCALE-UP )  
$('#b1').removeClass('move-1');
$('#b1a').removeClass('move-1a');
$('#b2').removeClass('move-2');
$('#b2a').removeClass('move-2a');
$('#b3').removeClass('move-3');
$('#b3a').removeClass('move-3a');
$('#b4').removeClass('move-4');
$('#b4a').removeClass('move-4a');
  
//**HIDE AUDIO PROGRESS (REMOVE FADE-INS)  
$('#ap1').removeClass('fade-in-fast');
$('#ap2').removeClass('fade-in-fast');
$('#ap3').removeClass('fade-in-fast');
$('#ap4').removeClass('fade-in-fast');
$('#ap1').removeClass('fade-in');
$('#ap2').removeClass('fade-in');
$('#ap3').removeClass('fade-in');
$('#ap4').removeClass('fade-in');
  
//**HIDE AUDIO PROGRESS (ADD FADE OUTS)  
$('#ap4').removeClass('fade-in-progress');
$('#ap4').addClass('fade-out-progress');
$('#ap4').addClass('not-clickable');  
$('#ap1').addClass('not-clickable');
$('#ap2').addClass('not-clickable');
$('#ap3').addClass('not-clickable');
  
//**SHOW NAV BLOBS (ADD FADE IN FAST)  
$('#b1').addClass('fade-in-fast'); 
$('#b2').addClass('fade-in-fast'); 
$('#b3').addClass('fade-in-fast'); 
$('#b4').addClass('fade-in-fast'); 
$('#b1a').addClass('fade-in-fast'); 
$('#b2a').addClass('fade-in-fast'); 
$('#b3a').addClass('fade-in-fast'); 
$('#b4a').addClass('fade-in-fast'); 

//*RESTORE LABELS
$('.TxtSmear4').removeClass('highlight-label'); 
$('.TxtSmear4').removeClass('highlight-z4'); 
$('.TxtSmear4').addClass('fade-in-fast'); 
  
$('#Lb1').removeClass('fade-out-fast'); 
$('#Lb2').removeClass('fade-out-fast'); 
$('#Lb3').removeClass('fade-out-fast'); 
$('#Lb4').removeClass('fade-out-fast'); 
  
//**SHOW LBS (ADD FADE IN FAST)  
$('#Lb1').addClass('fade-in-fast'); 
$('#Lb2').addClass('fade-in-fast'); 
$('#Lb3').addClass('fade-in-fast'); 
$('#Lb4').addClass('fade-in-fast'); 

document.getElementById("hideLb1").style.visibility = "hidden";  
document.getElementById("hideLb2").style.visibility = "hidden";  
document.getElementById("hideLb3").style.visibility = "hidden";  
document.getElementById("hideLb4").style.visibility = "hidden";  
  
//*Show selector blobs
$('#bSelector').addClass('fade-in-fast'); 
$('#b5a').addClass('fade-in-fast'); 
$('#bSelector6').addClass('fade-in-fast'); 
$('#b6a').addClass('fade-in-fast'); 
$('#bSelector').removeClass('fade-out-fast'); 
$('#b5a').removeClass('fade-out-fast'); 
$('#bSelector6').removeClass('fade-out-fast'); 
$('#b6a').removeClass('fade-out-fast'); 
//*Show arrows
$('.arrow').removeClass('fade-out-fast'); 
$('.arrow').addClass('fade-in-fast'); 
};


//*Click diamond
$('#DiamondGo').click(function(e)
{
  e.preventDefault();
$('#raIntro').addClass('fade-out-faster'); 
  $('#Diamond1').removeClass('fade-in-fast diamondColor1'); 
  $('#Diamond1').addClass('burst-out diamondColor2'); 
  $('#Diamond1A').removeClass('fade-in-fast diamondColorA1'); 
  $('#Diamond1A').addClass('burst-outA diamondColorA2'); 
  $('#DiamondGo').removeClass('fade-in-fast'); 
  $('#DiamondGo').addClass('nope'); 

  setTimeout(function() {
$('#raIntro').addClass('nope'); 
$('#ra_canvas').removeClass('canvas-hide'); 
$('#ra_canvas').addClass('canvas-show'); 
    },2000);

  
  setTimeout(function() {
    $( 'h1' ).letterDrop();
    $('#ra_title').removeClass('nope');        $('#ra_title').addClass('move-down delayed');
    },2200);

  setTimeout(function() {audioRfIntro.get(0).play();},4500);


  setTimeout(function() {
  $('#Navigator').removeClass('nope'); 

  $('#arrow1').addClass('arrow fade-in in1B'); 
  $('#arrow2').addClass('arrow fade-in in2B'); 
  $('#arrow3').addClass('arrow fade-in in3B'); 
  $('#arrow4').addClass('arrow fade-in in4B'); 
  
  $('#arrow1Text').addClass('fade-in in1B'); 
    
  $('#b1').addClass('blob blob1 fade-in in1'); 
  $('#b2').addClass('blob blob2 fade-in in2'); 
  $('#b3').addClass('blob blob3 fade-in in3'); 
  $('#b4').addClass('blob blob4 fade-in in4'); 
  $('#bSelector').removeClass('hider');   $('#bSelector').addClass('fade-in in5'); 
    $('#txt1').addClass('TxtSmear TxtSmear1 fade-in in1A'); 
  $('#txt2').addClass('TxtSmear TxtSmear2 fade-in in2A'); 
  $('#txt3').addClass('TxtSmear TxtSmear3 fade-in in3A'); 
  $('#txt4').addClass('TxtSmear TxtSmear4 fade-in in4A'); 

  $('#b1a').addClass('blobA blob1a fade-in in1A'); 
  $('#b2a').addClass('blobA blob2a fade-in in2A'); 
  $('#b3a').addClass('blobA blob3a fade-in in3A'); 
  $('#b4a').addClass('blobA blob4a fade-in in4A'); 
  $('#b5a').removeClass('hider'); 
  $('#b5a').addClass('fade-in in5A'); 

  $('#Lb1').addClass('LbFrame fade-in in5A'); 
  $('#Lb2').addClass('LbFrame fade-in in5A'); 
  $('#Lb3').addClass('LbFrame fade-in in5A'); 
  $('#Lb4').addClass('LbFrame fade-in in5A'); 

  $('#bSelector6').removeClass('hider'); 
$('#bSelector6').addClass('fade-in in5'); 
  
  $('#b7').addClass('blob blob7 fade-in'); 
  $('#b8').addClass('blob blob8 fade-in'); 
  $('#b9').addClass('blob blob9 fade-in'); 
  
  $('#b6a').removeClass('hider');  $('#b6a').addClass('fade-in in5A');
  
  $('#b7a').addClass('blobA blob7a fade-in in5A'); 
  $('#b8a').addClass('blobA blob8a fade-in in5A'); 
  $('#b9a').addClass('blobA blob9a fade-in in5A');

$('#I1').removeClass('hider');  $('#I1').addClass('scroll-txt intro1');
$('#I2').removeClass('hider');  $('#I2').addClass('scroll-txt intro2');
    
    
  },600);
  
}
);

  setTimeout(function() {
     //alert('go');
    //$('#arrow1Text').addClass('nope');     
    $('.arrow-text').removeClass('fade-in in1B');     
    $('.arrow-text').addClass('fade-out-fast');     
  },40000);





//*Click1
$('#Lb1').click(function(e) {
  e.preventDefault();
//*Hide arrows
$('.arrow').addClass('fade-out-fast'); 
$('.arrow').removeClass('fade-in in1A'); 
$('.arrow').removeClass('fade-in in2A'); 
$('.arrow').removeClass('fade-in in3A'); 
$('.arrow').removeClass('fade-in in4A'); 
  
  
//**HIDE NAV2,3,4 BLOBS (REMOVE FADE-INS)  
$('#b1').removeClass('fade-in-fast'); 
$('#b1a').removeClass('fade-in-fast'); 
$('#bSelector').removeClass('fade-in-fast'); 
$('#b5a').removeClass('fade-in-fast'); 
////
$('#bSelector6').removeClass('fade-in-fast'); 
$('#b6a').removeClass('fade-in-fast'); 
////  
$('#b1').removeClass('fade-in'); 
$('#b1a').removeClass('fade-in'); 
$('#bSelector').removeClass('fade-in'); 
$('#b5a').removeClass('fade-in'); 
$('#bSelector').addClass('fade-out-fast'); 
$('#b5a').addClass('fade-out-fast'); 
////
$('#bSelector6').removeClass('fade-in'); 
$('#b6a').removeClass('fade-in'); 
$('#bSelector6').addClass('fade-out-fast'); 
$('#b6a').addClass('fade-out-fast'); 
////  
//**NORMALIZE NAV LBS 2,3,4 (REMOVE FADE INS, REMOVE HIGHLIGHTS)
$('.TxtSmear2').removeClass('highlight-label');
$('.TxtSmear2').removeClass('highlight-z2');
$('.TxtSmear3').removeClass('highlight-label');
$('.TxtSmear4').removeClass('highlight-label');
$('.TxtSmear4').removeClass('highlight-z4');
$('.TxtSmear1').removeClass('fade-in');
  
$('#Lb1').removeClass('fade-in-fast'); 
$('#Lb2').removeClass('fade-in-fast'); 
$('#Lb3').removeClass('fade-in-fast'); 
$('#Lb4').removeClass('fade-in-fast'); 
$('#Lb1').removeClass('fade-in'); 
$('#Lb2').removeClass('fade-in'); 
$('#Lb3').removeClass('fade-in'); 
$('#Lb4').removeClass('fade-in'); 

//**HIGHLIGHT NAV LBS 1 (ADD FADE OUT FAST, ADD HIGHLIGHT)
$('.TxtSmear1').addClass('highlight-label'); 
$('#Lb1').addClass('fade-out-fast'); 
$('#Lb2').addClass('fade-out-fast'); 
$('#Lb3').addClass('fade-out-fast'); 
$('#Lb4').addClass('fade-out-fast'); 

document.getElementById("hideLb1").style.visibility = "visible";  
document.getElementById("hideLb2").style.visibility = "visible";  
document.getElementById("hideLb3").style.visibility = "visible";  
document.getElementById("hideLb4").style.visibility = "visible";  
  
//**HIDE AUDIO PROGRESS 2, 3, 4 (REMOVE FADE INS)  
$('.audioprogress2').removeClass('fade-in-fast');
$('.audioprogress3').removeClass('fade-in-fast');
$('.audioprogress4').removeClass('fade-in-fast');
$('.audioprogress2').removeClass('fade-in');
$('.audioprogress3').removeClass('fade-in');
$('.audioprogress4').removeClass('fade-in');

//**HIDE AUDIO PROGRESS 2, 3, 4 (ADD FADE OUT FAST)  
$('.audioprogress2').addClass('not-clickable');
$('.audioprogress3').addClass('not-clickable');
$('.audioprogress4').addClass('not-clickable');

//**SHOW AUDIO PROGRESS 1 (REMOVE FADE OUT)  
$('.audioprogress1').addClass('fade-in-progress');
$('.audioprogress1').removeClass('not-clickable');
$('.audioprogress1').removeClass('fade-out-fast');
$('.audioprogress1').removeClass('fade-out-progress');

//**SHOW SELECTION 1 (ADD SCALE UPS) 
$('#b1').addClass('move-1');
$('#b1a').addClass('move-1a');

    audioRf2.get(0).pause();
    audioRf3.get(0).pause();
    audioRf4.get(0).pause();
  $('#audio_control').toggleClass('active');
  if (audioRf.prop('paused') == false) {
    audioRf.get(0).pause();
    $('#audio_control').addClass('pause').removeClass('play');
  } else {
    //audioRf.get(0).play();
    setTimeout(function() {
    audioRf.get(0).play();   $('#audio_control').addClass('play').removeClass('pause');
    }
               ,5000);    
    //$('#audio_control').addClass('play').removeClass('pause');
       $('.audioprogress1').removeClass('ease-none');
  }
});

//*Click2
$('#Lb2').click(function(e) {
  e.preventDefault();
//*Hide arrows
$('.arrow').addClass('fade-out-fast'); 
$('.arrow').removeClass('fade-in in1A'); 
$('.arrow').removeClass('fade-in in2A'); 
$('.arrow').removeClass('fade-in in3A'); 
$('.arrow').removeClass('fade-in in4A'); 
  
//**HIDE SMALL NAV BLOBS (REMOVE FADE-INS)  
$('#b2').removeClass('fade-in-fast'); 
$('#b2a').removeClass('fade-in-fast'); 

$('#bSelector').removeClass('fade-in-fast'); 
$('#b5a').removeClass('fade-in-fast'); 
$('#bSelector6').removeClass('fade-in-fast'); 
$('#b6a').removeClass('fade-in-fast'); 
  
$('#b2').removeClass('fade-in'); 
$('#b2a').removeClass('fade-in'); 

$('#bSelector').removeClass('fade-in'); 
$('#b5a').removeClass('fade-in'); 
$('#bSelector6').removeClass('fade-in'); 
$('#b6a').removeClass('fade-in'); 

$('#bSelector').addClass('fade-out-fast'); 
$('#b5a').addClass('fade-out-fast'); 
$('#bSelector6').addClass('fade-out-fast'); 
$('#b6a').addClass('fade-out-fast'); 

//**NORMALIZE NAV LBS (REMOVE FADE INS, REMOVE HIGHLIGHTS)
$('.TxtSmear1').removeClass('highlight-label');
$('.TxtSmear3').removeClass('highlight-label');
$('.TxtSmear4').removeClass('highlight-label');
$('.TxtSmear4').removeClass('highlight-z4');
$('.TxtSmear2').removeClass('fade-in');
  
$('#Lb1').removeClass('fade-in-fast'); 
$('#Lb2').removeClass('fade-in-fast'); 
$('#Lb3').removeClass('fade-in-fast'); 
$('#Lb4').removeClass('fade-in-fast'); 
$('#Lb1').removeClass('fade-in'); 
$('#Lb2').removeClass('fade-in'); 
$('#Lb3').removeClass('fade-in'); 
$('#Lb4').removeClass('fade-in'); 

//**HIGHLIGHT NAV LB (ADD FADE OUT FAST, ADD HIGHLIGHT)
$('.TxtSmear2').addClass('highlight-label'); 
$('.TxtSmear2').addClass('highlight-z2'); 
$('#Lb1').addClass('fade-out-fast'); 
$('#Lb2').addClass('fade-out-fast'); 
$('#Lb3').addClass('fade-out-fast'); 
$('#Lb4').addClass('fade-out-fast'); 

document.getElementById("hideLb1").style.visibility = "visible";  
document.getElementById("hideLb2").style.visibility = "visible";  
document.getElementById("hideLb3").style.visibility = "visible";  
document.getElementById("hideLb4").style.visibility = "visible";  
  
//**HIDE AUDIO PROGRESS (REMOVE FADE INS)  
$('.audioprogress1').removeClass('fade-in-fast');
$('.audioprogress3').removeClass('fade-in-fast');
$('.audioprogress4').removeClass('fade-in-fast');
$('.audioprogress1').removeClass('fade-in');
$('.audioprogress3').removeClass('fade-in');
$('.audioprogress4').removeClass('fade-in');

$('.audioprogress1').addClass('not-clickable');
$('.audioprogress3').addClass('not-clickable');
$('.audioprogress4').addClass('not-clickable');

//**SHOW AUDIO PROGRESS (REMOVE FADE OUT)  
$('.audioprogress2').addClass('fade-in-progress');
$('.audioprogress2').removeClass('not-clickable');
$('.audioprogress2').removeClass('fade-out-fast');
$('.audioprogress2').removeClass('fade-out-progress');
  
//**SHOW SELECTION (ADD SCALE UPS) 
$('#b2').addClass('move-2');
$('#b2a').addClass('move-2a');

    audioRf.get(0).pause();
    audioRf3.get(0).pause();
    audioRf4.get(0).pause();
  $('#audio_control2').toggleClass('active');
  if (audioRf2.prop('paused') == false) {
    audioRf2.get(0).pause();
    $('#audio_control2').addClass('pause').removeClass('play');
  } else {
    //audioRf.get(0).play();
    setTimeout(function() {
    audioRf2.get(0).play();   $('#audio_control2').addClass('play').removeClass('pause');
    }
               ,5000);    
           $('.audioprogress2').removeClass('ease-none');
  }
});

//*Click3
$('#Lb3').click(function(e) {
  e.preventDefault();
 //*Hide arrows
$('.arrow').addClass('fade-out-fast'); 
$('.arrow').removeClass('fade-in in1A'); 
$('.arrow').removeClass('fade-in in2A'); 
$('.arrow').removeClass('fade-in in3A'); 
$('.arrow').removeClass('fade-in in4A'); 
 
//**HIDE SMALL NAV BLOBS (REMOVE FADE-INS)  
$('#b3').removeClass('fade-in-fast'); 
$('#b3a').removeClass('fade-in-fast'); 

$('#bSelector').removeClass('fade-in-fast'); 
$('#b5a').removeClass('fade-in-fast'); 
$('#bSelector6').removeClass('fade-in-fast'); 
$('#b6a').removeClass('fade-in-fast'); 
  
$('#b3').removeClass('fade-in'); 
$('#b3a').removeClass('fade-in'); 

$('#bSelector').removeClass('fade-in'); 
$('#b5a').removeClass('fade-in'); 
$('#bSelector6').removeClass('fade-in'); 
$('#b6a').removeClass('fade-in'); 

$('#bSelector').addClass('fade-out-fast'); 
$('#b5a').addClass('fade-out-fast'); 
$('#bSelector6').addClass('fade-out-fast'); 
$('#b6a').addClass('fade-out-fast'); 

//**NORMALIZE NAV LBS (REMOVE FADE INS, REMOVE HIGHLIGHTS)
$('.TxtSmear1').removeClass('highlight-label');
$('.TxtSmear2').removeClass('highlight-label');
$('.TxtSmear4').removeClass('highlight-label');
$('.TxtSmear2').removeClass('highlight-z2');
$('.TxtSmear4').removeClass('highlight-z4');
$('.TxtSmear3').removeClass('fade-in');
  
$('#Lb1').removeClass('fade-in-fast'); 
$('#Lb2').removeClass('fade-in-fast'); 
$('#Lb3').removeClass('fade-in-fast'); 
$('#Lb4').removeClass('fade-in-fast'); 
$('#Lb1').removeClass('fade-in'); 
$('#Lb2').removeClass('fade-in'); 
$('#Lb3').removeClass('fade-in'); 
$('#Lb4').removeClass('fade-in'); 

//**HIGHLIGHT NAV LB (ADD FADE OUT FAST, ADD HIGHLIGHT)
$('.TxtSmear3').addClass('highlight-label'); 
$('#Lb1').addClass('fade-out-fast'); 
$('#Lb2').addClass('fade-out-fast'); 
$('#Lb3').addClass('fade-out-fast'); 
$('#Lb4').addClass('fade-out-fast'); 

document.getElementById("hideLb1").style.visibility = "visible";  
document.getElementById("hideLb2").style.visibility = "visible";  
document.getElementById("hideLb3").style.visibility = "visible";  
document.getElementById("hideLb4").style.visibility = "visible";  
  
//**HIDE AUDIO PROGRESS (REMOVE FADE INS)  
$('.audioprogress1').removeClass('fade-in-fast');
$('.audioprogress2').removeClass('fade-in-fast');
$('.audioprogress4').removeClass('fade-in-fast');
$('.audioprogress1').removeClass('fade-in');
$('.audioprogress2').removeClass('fade-in');
$('.audioprogress4').removeClass('fade-in');

$('.audioprogress1').addClass('not-clickable');
$('.audioprogress2').addClass('not-clickable');
$('.audioprogress4').addClass('not-clickable');

//**SHOW AUDIO PROGRESS (REMOVE FADE OUT)  
$('.audioprogress3').addClass('fade-in-progress');
$('.audioprogress3').removeClass('not-clickable');
$('.audioprogress3').removeClass('fade-out-fast');
$('.audioprogress3').removeClass('fade-out-progress');
  
//**SHOW SELECTION (ADD SCALE UPS) 
$('#b3').addClass('move-3');
$('#b3a').addClass('move-3a');

    audioRf.get(0).pause();
    audioRf2.get(0).pause();
    audioRf4.get(0).pause();
  $('#audio_control3').toggleClass('active');
  if (audioRf3.prop('paused') == false) {
    audioRf3.get(0).pause();
    $('#audio_control3').addClass('pause').removeClass('play');
  } else {
    setTimeout(function() {
    audioRf3.get(0).play();   $('#audio_control3').addClass('play').removeClass('pause');
    }
               ,5000);    
           $('.audioprogress3').removeClass('ease-none');
  }
});

//*Click4
$('#Lb4').click(function(e) {
  e.preventDefault();
//*Hide arrows
$('.arrow').addClass('fade-out-fast'); 
$('.arrow').removeClass('fade-in in1A'); 
$('.arrow').removeClass('fade-in in2A'); 
$('.arrow').removeClass('fade-in in3A'); 
$('.arrow').removeClass('fade-in in4A'); 
  
//**HIDE SMALL NAV BLOBS (REMOVE FADE-INS)  
$('#b4').removeClass('fade-in-fast'); 
$('#b4a').removeClass('fade-in-fast'); 

$('#bSelector').removeClass('fade-in-fast'); 
$('#b5a').removeClass('fade-in-fast'); 
$('#bSelector6').removeClass('fade-in-fast'); 
$('#b6a').removeClass('fade-in-fast'); 
  
$('#b4').removeClass('fade-in'); 
$('#b4a').removeClass('fade-in'); 

$('#bSelector').removeClass('fade-in'); 
$('#b5a').removeClass('fade-in'); 
$('#bSelector6').removeClass('fade-in'); 
$('#b6a').removeClass('fade-in'); 

$('#bSelector').addClass('fade-out-fast'); 
$('#b5a').addClass('fade-out-fast'); 
$('#bSelector6').addClass('fade-out-fast'); 
$('#b6a').addClass('fade-out-fast'); 

//**NORMALIZE NAV LBS (REMOVE FADE INS, REMOVE HIGHLIGHTS)
$('.TxtSmear1').removeClass('highlight-label');
$('.TxtSmear2').removeClass('highlight-label');
$('.TxtSmear3').removeClass('highlight-label');
$('.TxtSmear2').removeClass('highlight-z2');
$('.TxtSmear4').removeClass('fade-in');
  
$('#Lb1').removeClass('fade-in-fast'); 
$('#Lb2').removeClass('fade-in-fast'); 
$('#Lb3').removeClass('fade-in-fast'); 
$('#Lb4').removeClass('fade-in-fast'); 
$('#Lb1').removeClass('fade-in'); 
$('#Lb2').removeClass('fade-in'); 
$('#Lb3').removeClass('fade-in'); 
$('#Lb4').removeClass('fade-in'); 

//**HIGHLIGHT NAV LB (ADD FADE OUT FAST, ADD HIGHLIGHT)
$('.TxtSmear4').addClass('highlight-label'); 
$('.TxtSmear4').addClass('highlight-z4'); 
$('#Lb1').addClass('fade-out-fast'); 
$('#Lb2').addClass('fade-out-fast'); 
$('#Lb3').addClass('fade-out-fast'); 
$('#Lb4').addClass('fade-out-fast'); 

document.getElementById("hideLb1").style.visibility = "visible";  
document.getElementById("hideLb2").style.visibility = "visible";  
document.getElementById("hideLb3").style.visibility = "visible";  
document.getElementById("hideLb4").style.visibility = "visible";  
  
//**HIDE AUDIO PROGRESS (REMOVE FADE INS)  
$('.audioprogress1').removeClass('fade-in-fast');
$('.audioprogress2').removeClass('fade-in-fast');
$('.audioprogress3').removeClass('fade-in-fast');
$('.audioprogress1').removeClass('fade-in');
$('.audioprogress2').removeClass('fade-in');
$('.audioprogress3').removeClass('fade-in');

$('.audioprogress1').addClass('not-clickable');
$('.audioprogress2').addClass('not-clickable');
$('.audioprogress3').addClass('not-clickable');

//**SHOW AUDIO PROGRESS (REMOVE FADE OUT)  
$('.audioprogress4').addClass('fade-in-progress');
$('.audioprogress4').removeClass('not-clickable');
$('.audioprogress4').removeClass('fade-out-fast');
$('.audioprogress4').removeClass('fade-out-progress');
  
//**SHOW SELECTION (ADD SCALE UPS) 
$('#b4').addClass('move-4');
$('#b4a').addClass('move-4a');

    audioRf.get(0).pause();
    audioRf2.get(0).pause();
    audioRf3.get(0).pause();
  $('#audio_control4').toggleClass('active');
  if (audioRf4.prop('paused') == false) {
    audioRf4.get(0).pause();
    $('#audio_control4').addClass('pause').removeClass('play');
  } else {
    setTimeout(function() {
    audioRf4.get(0).play();   $('#audio_control4').addClass('play').removeClass('pause');
    }
               ,5000);    
           $('.audioprogress4').removeClass('ease-none');
  }
});


$('#audio_control').click(function(e) {
  e.preventDefault();
$('#audio_control').toggleClass('active');
  if (audioRf.prop('paused') == false) {
    audioRf.get(0).pause();
    $('#audio_control').addClass('pause').removeClass('play');
  } else {
    audioRf.get(0).play();
    //audioRf2.get(0).pause();
    $('#audio_control').addClass('play').removeClass('pause');
    $('.audioprogress').removeClass('ease-none');
  }
});

$('#audio_control2').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('active');
  if (audioRf2.prop('paused') == false) {
    audioRf2.get(0).pause();
    $(this).addClass('pause').removeClass('play');
  } else {
    audioRf2.get(0).play();
    //audioRf.get(0).pause();
    $(this).addClass('play').removeClass('pause');
    $('.audioprogress2').removeClass('ease-none');
  }
});

$('#audio_control3').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('active');
  if (audioRf3.prop('paused') == false) {
    audioRf3.get(0).pause();
    $(this).addClass('pause').removeClass('play');
  } else {
    audioRf3.get(0).play();
    //audioRf.get(0).pause();
    $(this).addClass('play').removeClass('pause');
    $('.audioprogress3').removeClass('ease-none');
  }
});

$('#audio_control4').click(function(e) {
  e.preventDefault();
  $(this).toggleClass('active');
  if (audioRf4.prop('paused') == false) {
    audioRf4.get(0).pause();
    $(this).addClass('pause').removeClass('play');
  } else {
    audioRf4.get(0).play();
    //audioRf.get(0).pause();
    $(this).addClass('play').removeClass('pause');
    $('.audioprogress4').removeClass('ease-none');
  }
});



function audioProgressBar() {

  var duration = audioId.duration,
    preTime = audioId.currentTime,
    audioTimer, percent,
    bar_offset = -502,
    percent = (preTime / duration) * 100,
    dashoffset = percent * (bar_offset / 100),
    finalofst = bar_offset + dashoffset;

  $('#bar').css({
    'stroke-dashoffset': finalofst + 'px'
  });

  if (duration == preTime) {
    $('#audio_control').removeClass('active');
    $('#bar').removeAttr('style');
    $('.audioprogress').addClass('ease-none');
  }

  $('#dashoffset').html('Duration: ' + duration + '<br>Current Time: ' + preTime);

}

function audioProgressBar2() {

  var duration = audioId2.duration,
    preTime = audioId2.currentTime,
    audioTimer, percent,
    bar2_offset = -502,
    percent = (preTime / duration) * 100,
    dashoffset2 = percent * (bar2_offset / 100),
    finalofst = bar2_offset + dashoffset2;

  $('#bar2').css({
    'stroke-dashoffset': finalofst + 'px'
  });

  if (duration == preTime) {
    $('#audio_control2').removeClass('active');
    $('#bar2').removeAttr('style');
    $('.audioprogress2').addClass('ease-none');
  }

  $('#dashoffset2').html('Duration: ' + duration + '<br>Current Time: ' + preTime);

}

function audioProgressBar3() {

  var duration = audioId3.duration,
    preTime = audioId3.currentTime,
    audioTimer, percent,
    bar3_offset = -502,
    percent = (preTime / duration) * 100,
    dashoffset3 = percent * (bar3_offset / 100),
    finalofst = bar3_offset + dashoffset3;

  $('#bar3').css({
    'stroke-dashoffset': finalofst + 'px'
  });

  if (duration == preTime) {
    $('#audio_control3').removeClass('active');
    $('#bar3').removeAttr('style');
    $('.audioprogress3').addClass('ease-none');
  }

  $('#dashoffset3').html('Duration: ' + duration + '<br>Current Time: ' + preTime);

}

function audioProgressBar4() {

  var duration = audioId4.duration,
    preTime = audioId4.currentTime,
    audioTimer, percent,
    bar4_offset = -502,
    percent = (preTime / duration) * 100,
    dashoffset4 = percent * (bar4_offset / 100),
    finalofst = bar4_offset + dashoffset4;

  $('#bar4').css({
    'stroke-dashoffset': finalofst + 'px'
  });

  if (duration == preTime) {
    $('#audio_control4').removeClass('active');
    $('#bar4').removeAttr('style');
    $('.audioprogress4').addClass('ease-none');
  }

  $('#dashoffset4').html('Duration: ' + duration + '<br>Current Time: ' + preTime);

}


;(function($) {

$.fn.letterDrop = function() {
  // Chainability
  return this.each( function() { 
  
  var obj = $( this );
  
  var drop = {
    arr : obj.text().split( '' ),
    
    range : {
      min : 1,
      max : 9
    },
    
    styles : function() {
      var dropDelays = '\n', addCSS;
      
       for ( i = this.range.min; i <= this.range.max; i++ ) {
         dropDelays += '.ld' + i + ' { animation-delay: 1.' + i + 's; }\n';  
       }
      
        addCSS = $( '<style>' + dropDelays + '</style>' );
        $( 'head' ).append( addCSS );
    },
    
    main : function() {
      var dp = 0;
      obj.text( '' );
      
      $.each( this.arr, function( index, value ) {

        dp = dp.randomInt( drop.range.min, drop.range.max );
        
        if ( value === ' ' )
          value = '&nbsp';
        
          obj.append( '<span class="letterDrop ld' + dp + '">' + value + '</span>' );
        
      });
          
    }
  };
   
  Number.prototype.randomInt = function ( min, max ) {
    return Math.floor( Math.random() * ( max - min + 1 ) + min );
  };
  
  
  // Create styles
  drop.styles();


    // Initialise
    drop.main();
  });

};

}(jQuery));


// USAGE
//$( 'h1' ).letterDrop();
//setTimeout(function() {audioRfIntro.get(0).play();},2600);
function showL1() {
    var y = document.getElementById("Lb1");
    y.style.cursor = "pointer";  
    var z = document.getElementById("imgTS1");
$('#imgTS1').css({
    '-webkit-filter': 'grayscale('+5+'%)'
  });  
}

function showL2() {
    var y = document.getElementById("Lb2");
    y.style.cursor = "pointer";  
    var z = document.getElementById("imgTS2");
        z.setAttribute('style', 'filter:contrast(' + 100 + '); -webkit-filter:contrast(' + 100 + '); -moz-filter:contrast(' + 100 + ')');  
}

function reshape1() {
$('#b5a').removeClass('diamondizer'); 
$('#b5a').removeClass('fade-in'); 
$('#b5a').addClass('circlifier'); 
}
function reshape2() {
$('#b5a').removeClass('circlifier'); 
$('#b5a').addClass('diamondizer'); 
}

function reshape1g() {
$('#b5a').removeClass('diamondizer'); 
$('#b5a').removeClass('fade-in'); 
$('#b5a').addClass('circlifier'); 
$('#b3').removeClass('green-down fade-in in3'); 
$('#b3').addClass('green-up'); 
}
function reshape2g() {
$('#b5a').removeClass('circlifier'); 
$('#b5a').addClass('diamondizer'); 
$('#b3').removeClass('green-up');
$('#b3').addClass('green-down');
}


function showL3() {
    var y = document.getElementById("Lb3");
    y.style.cursor = "pointer";  
    var z = document.getElementById("imgTS3");
        z.setAttribute('style', 'filter:contrast(' + 100 + '); -webkit-filter:contrast(' + 100 + '); -moz-filter:contrast(' + 100 + ')');  
}
function showL4() {
    var y = document.getElementById("Lb4");
    y.style.cursor = "pointer";  
    var z = document.getElementById("imgTS4");
        z.setAttribute('style', 'filter:contrast(' + 100 + '); -webkit-filter:contrast(' + 100 + '); -moz-filter:contrast(' + 100 + ')');  
}
function hideL1() {
    var z = document.getElementById("imgTS1");
        z.setAttribute('style', 'filter:invert(' + 'none' + '); -webkit-filter:invert(' + 'none' + '); -moz-filter:invert(' + 'none' + ')');  
}

function hideL2() {
    var z = document.getElementById("imgTS2");
        z.setAttribute('style', 'filter:contrast(' + 'none' + '); -webkit-filter:contrast(' + 'none' + '); -moz-filter:contrast(' + 'none' + ')');  
}

function hideL3() {
    var z = document.getElementById("imgTS3");
        z.setAttribute('style', 'filter:contrast(' + 'none' + '); -webkit-filter:contrast(' + 'none' + '); -moz-filter:contrast(' + 'none' + ')');  
}

function hideL4() {
    var z = document.getElementById("imgTS4");
        z.setAttribute('style', 'filter:contrast(' + 'none' + '); -webkit-filter:contrast(' + 'none' + '); -moz-filter:contrast(' + 'none' + ')');  
}

//var bheight = $("#bSelector").height() * 100;
//var bheight = $("#bSelector").height();
//var bheight = $("#b5a").height();

var blobs1height = $("#blobs1").height() * 100;
// alert(bheight);
var mouseX = $(window).width(),
    mouseY = $(window).height();
$(document).mousemove(function(e) {
  mouseX = e.pageX;
  mouseY = e.pageY;
});


var follower = $('#bSelector');
var followerA = $('.blob5a');
var follower6 = $('.blob6');
var follower6A = $('.blob6a');
var xp = 0,
    yp = 0;
var loop = setInterval(function() {
  //xp = mouseX;
  //yp = mouseY;
  xp += (mouseX - xp) / 10;
  yp += (mouseY - yp) / 10;
  
var selBump = $("#ra_square").width();  
  //if ((yp < 110||yp > 210)==true||((xp < 190||xp > 291)==true))  {
  follower.css({
    left: xp,
    top: yp
  });
  followerA.css({
    left: xp,
    top: yp
  });
  follower6.css({
    left: xp - selBump,
    top: yp
  });
  follower6A.css({
    left: xp - selBump,
    top: yp
  });

}, 30);