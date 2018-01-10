var modal = document.getElementById('myModal');
var submitModal = document.getElementById('submitModal');

var openModal = document.getElementById("openModal");
var submit = document.getElementById("submit");

var span = document.getElementsByClassName("close")[0];
var spanSecond = document.getElementsByClassName("close")[1];

openModal.onclick = function() {
    modal.style.display = "block";
}

submit.onclick = function() {
    submitModal.style.display = "block";
    modal.style.display = "none";
}

span.onclick = function() {
    modal.style.display = "none";
}

spanSecond.onclick = function() {
    submitModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal || event.target == submitModal) {
        modal.style.display = "none";
        submitModal.style.display = "none";
    }
}


;(function($){
  	jQuery.fn.sendFormLP = function(options){
  		options = $.extend({
            toEmail: 'sprokopyak96@gmail.com',
            fromEmail: 'info@djbravo.ua',
            interval : 9000
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
	    return this.each(make); 
  	};
})(jQuery);

$(function(){
	$('form').sendFormLP({
		toEmail: 'sprokopyak96@gmail.com',
        fromEmail: 'info@djbravo.ua',
		interval: 9000
	});
});