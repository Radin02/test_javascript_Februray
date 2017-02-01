$(document).ready(function(){

	$("#btn").click(function(){
var pass=$("#pass").val();


if (pass.length> 6){
	alert("strong password"); 


}
else{
	alert("weak password, should use atleast 6 characters"); 
 
	
}


});  
	});  

