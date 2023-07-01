function getFormvalue() {
    //Write your code here
	const result = document.getElementById("form1");
	const fname = result.elements['fname'].value;
	const lname = result.elements['lname'].value;
	alert(`${fname} ${lname}`);
}
