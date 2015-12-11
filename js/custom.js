var googleForm = $(window).jqGoogleForms({"formKey": "1MVibbkEvUpTXN8LMM8GESDZSWXibzFyHPEyALbgt6AI"});

$(document).on('submit','#subscribe',function(e) {
	e.preventDefault();
	googleForm.sendFormData({
    	"entry.1206245443": $('.user').val()
	});
	alert('here')

})
