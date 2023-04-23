const $contactForm = document.querySelector('#js-contact-form')
	$contactForm.addEventListener('submit' , handleSubmit)

async function handleSubmit(e) {
	
	e.preventDefault()
	
	const $form = e.target,
	$fname = $form.querySelector('#fname'),
	$lname = $form.querySelector('#lname'),
	$email = $form.querySelector('#email'),
	$tel = $form.querySelector('#tel'),
	$country = $form.querySelector('#country'),
	$message = $form.querySelector('#message'),
	response = await fetch('https://api.apispreadsheets.com/data/ORjmoHVEGvt8Fg9A/'  ,
	{
		method: 'POST',
		body: JSON.stringify ({
			data: {
				firstname: $fname.value,
				lastname: $lname.value,
				email: $email.value,
				phone: $tel.value,
				country: $country.value,
				message: $message.value
			}
		})
	}
	)
	
		if (response.status === 201) 
				alert('Mesaj Transmis cu succes!')
			else 
				alert('Va rugam incercati mai tarziu !')
		
		$form.reset()
}








