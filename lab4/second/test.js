// JavaScript to fetch accordion data and create accordion elements
document.addEventListener('DOMContentLoaded', function() {
    setInterval(fetchAccordionData, 5000); // Оновлення кожні 5 секунд
});

function fetchAccordionData() {
    fetch('getAccordionData.php')
        .then(response => response.json())
        .then(data => {
            createAccordion(data);
        })
        .catch(error => {
            console.error('Error fetching accordion data:', error);
        });
}


function createAccordion(accordionData) {
    var accordionContainer = document.getElementById('accordion');
    accordionContainer.innerHTML = ''; // Clear previous content

    accordionData.forEach(function(content, index) {
        var accordionItem = document.createElement('div');
        accordionItem.classList.add('accordion-item');

        var accordionHeader = document.createElement('div');
        accordionHeader.classList.add('accordion-header');
        accordionHeader.textContent = 'Section ' + (index + 1);
        accordionHeader.addEventListener('click', function() {
            toggleAccordion('content-' + index);
        });

        var accordionContent = document.createElement('div');
        accordionContent.classList.add('accordion-content');
        accordionContent.id = 'content-' + index;
        accordionContent.style.display = 'none';
        accordionContent.innerHTML = '<p>' + content + '</p>';

        accordionItem.appendChild(accordionHeader);
        accordionItem.appendChild(accordionContent);
        accordionContainer.appendChild(accordionItem);
    });
}

function toggleAccordion(id) {
    var content = document.getElementById(id);
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
}
