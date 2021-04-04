var type_choice = document.getElementsByName('type');
var input_div = document.getElementById("input-choices");
var radio_div = document.getElementById("radio-choices");
var checkbox_div = document.getElementById("checkbox-choices");
var select_div = document.getElementById("select-choices");
var textarea_div = document.getElementById("textarea-choices");
var chosen; //take the choice and use it in add function
var addtoform = document.getElementById('add');
var exportform = document.getElementById('export');
var div = document.querySelector('#generated-container #form'); //the generated form container
addtoform.addEventListener('click', Add_to_form);
exportform.addEventListener('click', showjson);
type_choice.forEach(element => {
    element.addEventListener('click', userchoice);
});
var array = [];
function showjson() {
    var json_div = document.querySelector('#json-container div');
    var string = JSON.stringify(array);
    var p = document.getElementById('json_para');
    p.innerHTML = string;
}
//type of choice
function userchoice() {
    chosen = this.value;
    if (this.value == "input") {

        choice_input();
    }
    else if (this.value == "radio") {

        choice_radio();
    }
    else if (this.value == "checkbox") {

        choice_checkbox();
    }
    else if (this.value == "select") {
        choice_select();
    }
    else if (this.value == "textarea") {
        choice_textarea();
    }

}

function choice_input() {
    textarea_div.style.display = "none";
    checkbox_div.style.display = "none";
    select_div.style.display = "none";
    radio_div.style.display = "none";
    input_div.style.display = "flex";

}
function choice_radio() {
    textarea_div.style.display = "none";
    checkbox_div.style.display = "none";
    select_div.style.display = "none";
    radio_div.style.display = "flex";
    input_div.style.display = "none";
}
function choice_checkbox() {
    textarea_div.style.display = "none";
    checkbox_div.style.display = "flex";
    select_div.style.display = "none";
    radio_div.style.display = "none";
    input_div.style.display = "none";
}
function choice_select() {
    textarea_div.style.display = "none";
    checkbox_div.style.display = "none";
    select_div.style.display = "flex";
    radio_div.style.display = "none";
    input_div.style.display = "none";
}
function choice_textarea() {
    textarea_div.style.display = "flex";
    checkbox_div.style.display = "none";
    select_div.style.display = "none";
    radio_div.style.display = "none";
    input_div.style.display = "none";
}

//type of add
function Add_to_form() {
    if (chosen == "input") {

        add_input();
    }
    else if (chosen == "radio") {

        add_radio();
    }
    else if (chosen == "checkbox") {

        add_checkbox();
    }
    else if (chosen == "select") {
        add_select();
    }
    else if (chosen == "textarea") {
        add_textarea();
    }
}

function add_input() {
    var label_name = document.querySelector('#input-choices .label_name').value;
    var req;
    var def_value = document.querySelector('#input-choices .input_value').value;
    var radio_required = document.querySelector('#input-choices .contain_radios .required');
    if (radio_required.checked) {
        req = 1;
    }
    else {
        req = 0;
    }
    var input_type;
    if (document.querySelector('#input-choices .contain_radios .text').checked) {
        input_type = document.querySelector('#input-choices .contain_radios .text').value;
    } else if (document.querySelector('#input-choices .contain_radios .number').checked) {
        input_type = document.querySelector('#input-choices .contain_radios .number').value;
    }
    else if (document.querySelector('#input-choices .contain_radios .email').checked) {
        input_type = document.querySelector('#input-choices .contain_radios .email').value;
    }
    else if (document.querySelector('#input-choices .contain_radios .password').checked) {
        input_type = document.querySelector('#input-choices .contain_radios .password').value;
    }
    input_placeholder = document.querySelector('#input-choices .contain_input .placeholder').value;
    console.log(input_placeholder);
    input_max = document.querySelector('#input-choices .contain_input .max').value;

    create_input(label_name, def_value, req, input_type, input_placeholder, input_max);


}
function create_input(label_name, def_value, req, input_type, input_placeholder, input_max) {
    var label = document.createElement('label');
    label.innerHTML = label_name;
    var input = document.createElement('input');
    input.setAttribute("type", input_type);
    input.setAttribute("placeholder", input_placeholder);
    input.setAttribute("id","generated_input");
    input.setAttribute("maxlength", input_max);
    input.setAttribute("value", def_value);
    if (req == 1) {
        input.required = true;
    }
    var new_div = document.createElement('div');
    new_div.setAttribute("id","generated_radio");
    new_div.appendChild(label);
    new_div.appendChild(input);
    div.appendChild(new_div);
    var input = { label: label_name, tag: "input", type: input_type, placeholder: input_placeholder, maxlength: input_max, value: def_value };
    array.push(input);
}
function add_radio() {
    var label_name = document.querySelector('#radio-choices .label_name').value;
    var req;
    var radio_required = document.querySelector('#radio-choices .contain_radios .required');
    if (radio_required.checked) {
        req = 1;
    }
    else {
        req = 0;
    }
    var radio_name = document.querySelector('#radio-choices .contain_input .radio_name').value;
    var radio_value = document.querySelector('#radio-choices .contain_input .radio_value').value;
    create_radio(label_name, req, radio_name, radio_value);
}
function create_radio(label_name, req, radio_name, radio_value) {
    var label = document.createElement('label');
    label.innerHTML = label_name;
    var input = document.createElement('input');
    input.setAttribute("type", "radio");
    input.setAttribute("name", radio_name);
    input.setAttribute("value", radio_value);
    if (req == 1) {
        input.required = true;
    }
    var new_div = document.createElement('div');
    new_div.setAttribute("id","generated_radio");
    new_div.appendChild(input);
    new_div.appendChild(label);
    div.appendChild(new_div);
    var input = { label: label_name, tag: "input", type: "radio", value: radio_value };
    array.push(input);
}
function add_checkbox() {
    var label_name = document.querySelector('#checkbox-choices .label_name').value;
    var req;
    var radio_required = document.querySelector('#checkbox-choices .contain_radios .required');
    if (radio_required.checked) {
        req = 1;
    }
    else {
        req = 0;
    }
    var checkbox_name = document.querySelector('#checkbox-choices .contain_input .checkbox_name').value;
    var checkbox_value = document.querySelector('#checkbox-choices .contain_input .checkbox_value').value;
    create_checkbox(label_name, req, checkbox_name, checkbox_value);
}
function create_checkbox(label_name, req, checkbox_name, checkbox_value) {
    var label = document.createElement('label');
    label.innerHTML = label_name;
    var input = document.createElement('input');
    input.setAttribute("type", "checkbox");
    input.setAttribute("name", checkbox_name);
    input.setAttribute("value", checkbox_value);
    if (req == 1) {
        input.required = true;
    }
    var new_div = document.createElement('div');
    new_div.setAttribute("id","generated_checkbox");
    new_div.appendChild(input);
    new_div.appendChild(label);
    div.appendChild(new_div);
    var input = { label: label_name, tag: "input", type: "checkbox", name: checkbox_name, value: checkbox_value };
    array.push(input);
}
function add_textarea() {
    var label_name = document.querySelector('#textarea-choices .label_name').value;
    var req;
    var textarea_name = document.querySelector('#textarea-choices .textarea_name').value;
    var radio_required = document.querySelector('#textarea-choices .contain_radios .required');
    if (radio_required.checked) {
        req = 1;
    }
    else {
        req = 0;
    }
    input_placeholder = document.querySelector('#textarea-choices .contain_input .placeholder').value;

    create_textarea(label_name, textarea_name, req, input_placeholder);
}
function create_textarea(label_name, textarea_name, req, input_placeholder) {
    var label = document.createElement('label');
    label.innerHTML = label_name;
    var input = document.createElement('textarea');
    input.setAttribute("name", textarea_name);
    input.setAttribute("placeholder", input_placeholder);
    if (req == 1) {
        input.required = true;
    }
    var new_div = document.createElement('div');
    new_div.setAttribute("id","generated_textarea");
    new_div.appendChild(label);
    new_div.appendChild(input);
    div.appendChild(new_div);
    var input = { label: label_name, tag: "textarea", name: textarea_name, placeholder: input_placeholder };
    array.push(input);
}
function add_select() {
    var label_name = document.querySelector('#select-choices .label_name').value;
    var req;
    var radio_required = document.querySelector('#select-choices .contain_radios .required');
    if (radio_required.checked) {
        req = 1;
    }
    else {
        req = 0;
    }
    
    var option_string;

    create_select(label_name, req);

}

document.querySelector("#add_option").addEventListener('click', add_to_option);

var option;
var options=[];
var empty_options=[];
function add_to_option() {   
    var option_value = document.querySelector('#select-choices .contain_input .option').value;
    option +="<option value="+option_value+">"+option_value+"</option>";
    options.push(option_value);
    document.querySelector('#select-choices .contain_input .option').value="";
}
function create_select(label_name, req){
    var label=document.createElement('lebel');
    label.innerHTML=label_name;
    var select_elm= document.createElement('select');
    select_elm.innerHTML=option;
    var new_div = document.createElement('div');
    new_div.setAttribute("id","generated_select");
    new_div.appendChild(label);
    new_div.appendChild(select_elm);
    div.appendChild(new_div);
    var input = { label: label_name, tag: "select","options":options };
    array.push(input);
    empty_all();
}
function empty_all(){
    option="";
    options=empty_options;
}
document.getElementById('download').addEventListener('click',download);
function download(){
    string=JSON.stringify(array);
    document.querySelector('.download').setAttribute("download","json.txt");
    document.querySelector('.download').setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(string));


}