document.forms.register.noValidate = true
$("form").on("submit", function($e) {
    var elements = this.elements;
    var valid = {};
    var isValid, isFormValid;
    for (var i = 0, l = (elements.length - 1); i < l; i++) {
        isValid = validateRequired(elements[i]) && validateTypes(elements[i]);
        if (!isValid) showErrorMessage(elements[i]);
        else removeErrorMessage(elements[i]);
        valid[elements[i].id] = isValid;
    }
})