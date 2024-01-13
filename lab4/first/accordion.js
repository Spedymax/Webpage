function saveAccordionData() {
    var accordionData = [];
    for (var i = 0; i < document.getElementsByClassName("accordion-item").length; i++) {
        accordionData.push(document.getElementById("content-" + i).getElementsByTagName("textarea")[0].value);
    }

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "saveAccordion.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({accordionData: accordionData}));

    xhr.onload = function() {
        console.log("Дані збережено: " + this.responseText);
    };
}
