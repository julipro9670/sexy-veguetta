canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");


labial_ancho=100;
labial_alto=100;

background_image = "bosque2.jpg";

labial_image = "labial.png";

labial_x = 10;
labial_y = 10;


 function add(){
    background_imgTag=new Image();                           
    background_imgTag.onload = uploadBackground;	                                                               // Carga la imagen
    background_imgTag.src = background_image;

    labial_imgTag = new Image();  
    labial_imgTag.onload = uploadlabial;	 
    labial_imgTag.src = labial_image;
}                                     


function uploadBackground(){
    ctx.drawImage (background_imgTag ,0,0, canvas.width, canvas.height);
}                       

function uploadlabial(){
    ctx.drawImage(labial_imgTag, labial_x, labial_y, labial_ancho, labial_alto);
    }



window.addEventListener("keydown" , my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    //Escribe el codigo si keypressed es up (arriba). El valor ASCIII para "arriba" es 38.
	if(keyPressed=='38'){
        up();
    }
    if(keyPressed=='40'){
        down();
    }
    if(keyPressed=='37'){
        left();
    }
    if(keyPressed=='39'){
        right();
    }
}
     //Escribe el codigo si keypressed es down (abajo). El valor ASCIII para "abajo" es 40.
function up(){
if(labial_y >=0){
    labial_y=labial_y-10;
    uploadBackground();
    uploadlabial();
 }
}
function down(){
    if(labial_y <=500){
        labial_y=labial_y+10;
        uploadBackground();
        uploadlabial();
 }
}
function right(){
    if(labial_x >=0){
        labial_x=labial_x+10;
        uploadBackground();
        uploadlabial();
     }
    }
function left(){
    if(labial_x <=500){
        labial_x=labial_x-10;
        uploadBackground();
        uploadlabial();
     }
    }


