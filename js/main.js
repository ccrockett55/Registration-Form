function validateForm() {
    var x = document.forms["first"]["user"].value;
    if (x == "") {
        alert("Please enter username");
        return false;
    }}