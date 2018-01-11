var modal = document.getElementById('myModal');
var submitModal = document.getElementById('submitModal');

var openModal = document.getElementById("openModal");
var submit = document.getElementById("submit");

var span = document.getElementsByClassName("close")[0];
var spanSecond = document.getElementsByClassName("close")[1];

function sendContact() {
    var valid;	
    valid = validateContact();
    if(valid) {
        jQuery.ajax({
            url: "email.php",
            data:'userName='+$("#userName").val()+'&userEmail='+
            $("#userEmail").val()+'&subject='+
            $("#subject").val()+'&content='+
            $(content).val(),
            type: "POST",
            success:function(data){
                $("#mail-status").html(data);
            },
            error:function (){}
        });
    }
}

function validateContact() {
    var valid = true;	
    $(".demoInputBox").css('background-color','');
    $(".info").html('');
    if(!$("#userName").val()) {
        $("#userName-info").html("(required)");
        $("#userName").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#userEmail").val()) {
        $("#userEmail-info").html("(required)");
        $("#userEmail").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#userEmail").val().match(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/)) {
        $("#userEmail-info").html("(invalid)");
        $("#userEmail").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#subject").val()) {
        $("#subject-info").html("(required)");
        $("#subject").css('background-color','#FFFFDF');
        valid = false;
    }
    if(!$("#content").val()) {
        $("#content-info").html("(required)");
        $("#content").css('background-color','#FFFFDF');
        valid = false;
    }
    return valid;
}

//openModal.onclick = function () {
//    modal.style.display = "block";
//};
////
//// submit.onclick = function () {
////     submitModal.style.display = "block";
////     modal.style.display = "none";
//// };
//
//span.onclick = function () {
//    modal.style.display = "none";
//};
//
//// spanSecond.onclick = function () {
////     submitModal.style.display = "none";
//// };
//
//window.onclick = function (event) {
//    if (event.target === modal || event.target === submitModal) {
//        modal.style.display = "none";
//        // submitModal.style.display = "none";
//    }
//};
new WOW().init();
//gallery
$(document).ready(function () {
    $('#ul-li').lightGallery();
});
//slow movement
$(document).ready(function () {
    $(".banner #banner, #character").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 70;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

//button up
$('body').append("<button class=\"btn_up\"></button>");
$('.btn_up').click(function () {
    $('body').animate({'scrollTop': 0}, 1000);
    $('html').animate({'scrollTop': 0}, 1000);
});
$(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
        $('.btn_up').addClass('active');
    } else {
        $('.btn_up').removeClass('active');
    }
});

// var data = {
//     name: $("#form_name").val(),
//     phone: $("#form_phone").val(),
//     email: $("#form_email").val()
// };
// console.log(data)
// $.ajax({
//     type: "POST",
//     url: "email.php",
//     data: data,
//     success: function(){
//         $('.success').fadeIn(1000);
//     }
// });
;(function($){
  	jQuery.fn.sendFormLP = function(options){
  		options = $.extend({
            toEmail: 'sprokopyak96@gmail.com',
            fromEmail: 'info@djbravo.ua',
//            interval : 9000
        }, options);
	    var make = function(){
	    	$(this).submit(function(e){
	        	e.preventDefault();
	        	var $this = $(this);
	            var i = true;
	            var toEmail = options.toEmail;
	            var fromEmail = options.fromEmail;
	            var them = $this.data('them');
	            var $items = $this.find('[name]');
	            var $required = $this.find('[data-required]');
	            var objShow = $this.data('show')
	            $items.removeClass('error');
	            $required.each(function(){
	            	if($(this).val() == ''){
	            		i = false
	            		$(this).addClass('error');
	            	}
	            });
	            if(i == true){
		            var arr = [];
		            var m_action = $this.attr('action');

		            $items.each(function(){
		            	var nam = $(this).data('name');
		            	var val = $(this).val();
		            	arr.push(nam+val);
		            });
		            var m_data = '';
		            for(q=0; q <= arr.length-1; q++){
		            	m_data = m_data+arr[q]+'\n';
		            }
		            $.ajax({
		                type: 'POST',
		                url: m_action,
		                data: {
		                	m_data:m_data,
		                	toEmail:toEmail,
		                	fromEmail:fromEmail,
		                	them:them
		                },
		                success: function(result){
		                    $items.val('');
		                    $(objShow).fadeIn();

		                    setInterval(function(){
		                    	$(objShow).fadeOut();
		                    }, options.interval);
		                }
		            });
	            }
	        });
	    };
        console.log(this.each(make))
	    return this.each(make);
  	};
})(jQuery);

$(function(){
	$('.contact #contactForm').sendFormLP({
		toEmail: 'sprokopyak96@gmail.com',
        fromEmail: 'info@djbravo.ua',
//		interval: 9000
	});
});



function _(id){ return document.getElementById(id); }
function submitForm(){
	_("mybtn").disabled = true;
	_("status").innerHTML = 'please wait ...';
	var formdata = new FormData();
	formdata.append( "n", _("n").value );
	formdata.append( "e", _("e").value );
	formdata.append( "m", _("m").value );
	var ajax = new XMLHttpRequest();
	ajax.open( "POST", "email.php" );
	ajax.onreadystatechange = function() {
		if(ajax.readyState == 4 && ajax.status == 200) {
			if(ajax.responseText == "success"){
				_("my_form").innerHTML = '<h2>Thanks '+_("n").value+', your message has been sent.</h2>';
			} else {
				_("status").innerHTML = ajax.responseText;
				_("mybtn").disabled = false;
			}
		}
	}
	ajax.send( formdata );
}





