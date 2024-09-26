function testBox1(form) {

	Ctrl = form.inputbox1;

	if (Ctrl.value.length < 3) {

		validatePrompt (Ctrl, "El nombre debe tener al menos 3 o mas caracteres")

		return (false);

	} else

		return (true);

}

function testBox2(form) {

	Ctrl = form.inputbox2;

	if (Ctrl.value == "" || Ctrl.value.indexOf ('@', 0) == -1) {

		validatePrompt (Ctrl, "Entrar una dirección de correo valida")

		return (false);

	} else

		return (true);

}

function testBox3(form) {

	Ctrl = form.inputbox3;

	if (Ctrl.value == "") {

		validatePrompt (Ctrl, "El Mensaje no puede estar vacio")

		return (false);

	} else

		return (true);

}


function runSubmit (form, button)  {
	
	if (!testBox1(form)) return;

	if (!testBox2(form)) return;
	
	if (!testBox3(form)) return;

	alert ("Todas la entradas OK!");

	//document.test.submit();	// un-comment to submit form

	return;

}



function validatePrompt (Ctrl, PromptStr) {

	alert (PromptStr)

	Ctrl.focus();

	return;

}



function loadDoc() {

	// initial focus; use if needed

	//document.test.inputbox1.focus ();

	return;

}