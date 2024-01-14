function createAccordion(count) {
    var accordionContainer = document.getElementById("accordion");
    accordionContainer.innerHTML = '';

    for (var i = 0; i < count; i++) {
        var accordionItem = document.createElement("div");
        accordionItem.classList.add("accordion-item");
        accordionItem.innerHTML = `
            <div class="accordion-header" onclick="toggleAccordion(${i})">Розділ ${i + 1}</div>
            <div class="accordion-content" id="content-${i}" style="display:none;">
                <textarea oninput="saveAccordionChanges()">Введіть ваш текст тут...</textarea>
            </div>
        `;
        accordionContainer.appendChild(accordionItem);
    }
}
function saveAccordionChanges() {
    var accordionData = [];
    document.querySelectorAll('.accordion-item').forEach(function(item) {
        var content = item.querySelector('textarea').value;
        accordionData.push(content);
    });

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "updateAccordion.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({accordionData: accordionData}));

    xhr.onload = function() {
        console.log("Зміни збережено: " + this.responseText);
    };
}
