let country_node = document.getElementById("country");
let document_node = document.getElementById("document");
let issued_node = document.getElementById("issued");
let firstname_node = document.getElementById("firstname");
let lastname_node = document.getElementById("lastname");
let patronymic_node = document.getElementById("patronymic");
let place_birth_node = document.getElementById("place_birth");
let click_node = document.getElementById("for_click");

let isLatin = false;


click_node.onclick = function () {
    isLatin = !isLatin;   

    if (isLatin) {
        country_node.innerText   = "Russian Federation";
        document_node.innerText  = "Passport";
        issued_node.innerText    = "GU MVD PO G.MOSKVE";
        firstname_node.innerText = "Altana";
        lastname_node.innerText  = "Badmaeva";
        patronymic_node.innerText = "Chingisovna";
        place_birth_node.innerText = "Moscow";
        click_node.innerText = "Вернуть кириллицу";
    } else {
        country_node.innerText   = "Российская Федерация";
        document_node.innerText  = "Паспорт";
        issued_node.innerText    = "ГУ МВД ПО Г.МОСКВЕ";
        firstname_node.innerText = "Алтана";
        lastname_node.innerText  = "Бадмаева";
        patronymic_node.innerText = "Чингисовна";
        place_birth_node.innerText = "г. Москва";
        click_node.innerText = "Кликните здесь";
    }
};