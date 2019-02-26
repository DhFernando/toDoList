var input=document.getElementById("input");
input.focus();



$(document).ready(function () {
	$("#olist").sortable({axis:"y"});
	
	$("#Sbtn").click(function(){
		
		var input = $("#input").val();
		if(input.length>0){
			$("<li id='Check'><input  type='checkbox' >"+input+"<button id='delBtn'>Remove</button></li>").appendTo("#olist");
		}
		$("#input").val("");
		var input=document.getElementById("input");
		input.focus();
	});

	document.addEventListener("keyup",function(e){
		if(e.keyCode===13){
			
			var input = $("#input").val();
		if(input.length>0){
			$("<li id='Check'><input  type='checkbox' >"+input+"<button id='delBtn'>Remove</button></li>").appendTo("#olist");
		}
		$("#input").val("");
		var input=document.getElementById("input");
		input.focus();
		}
	})

});
	$("#olist").on("change","#Check",function(){
		$(this).toggleClass("done");
		var input=document.getElementById("input");
		input.focus();
	});

	$("#olist").on("click","#delBtn",function(){
		$(this).parent().remove();
		var input=document.getElementById("input");
		input.focus();
	});

	