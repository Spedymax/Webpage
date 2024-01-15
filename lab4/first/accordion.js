function createAccordion() {
    var count = document.getElementById("accordionCount").value;
    var accordionContainer = document.getElementById("accordion");
    accordionContainer.innerHTML = '';

    for (var i = 0; i < count; i++) {
        var accordionItem = document.createElement("div");
        accordionItem.classList.add("accordion-item");
        accordionItem.innerHTML = `
            <div class="accordion-header">
                <input type="text" class="accordion-title-input" placeholder="Введіть заголовок тут...">
                <button onclick="toggleAccordion(${i})">Розкрити</button>
            </div>
            <div class="accordion-content" id="content-${i}" style="display:none;">
                <textarea>Введіть ваш текст тут...</textarea>
            </div>
        `;
        accordionContainer.appendChild(accordionItem);
    }
}
function toggleAccordion(index) {
    var content = document.getElementById("content-" + index);
    if (content.style.display === "none") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}
function saveAccordionChanges() {
    var accordionData = [];
    document.querySelectorAll('.accordion-item').forEach(function(item) {
    var title = item.querySelector('.accordion-title-input').value;
    var content = item.querySelector('textarea').value;
    accordionData.push({ title: title, content: content });
});

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "updateAccordion.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({accordionData: accordionData}));

    xhr.onload = function() {
        console.log("Зміни збережено: " + this.responseText);
        alert('Збережено')
    };
}
