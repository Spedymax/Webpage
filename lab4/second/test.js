// JavaScript to fetch accordion data and create accordion elements
setInterval(function() {
    fetch('getAccordionData.php')
        .then(response => response.json())
        .then(data => {
            if (data.length > 0 && data[0].title === 'edited') {
                data.shift(); // Remove the first element
                createAccordion(data);
            }
        })
        .catch(error => {
            console.error('Error fetching accordion data:', error);
        });
}, 3000);



function createAccordion(accordionData) {
    var accordionContainer = document.getElementById('accordion');
    accordionContainer.innerHTML = ''; // Clear previous content

    accordionData.forEach(function(item, index) {
        var accordionItem = document.createElement('div');
        accordionItem.classList.add('accordion-item');

        var accordionHeader = document.createElement('div');
        accordionHeader.classList.add('accordion-header');
        accordionHeader.textContent = item.title || 'Розділ ' + (index + 1);
        accordionHeader.addEventListener('click', function() {
            toggleAccordion('content-' + index);
        });

        var accordionContent = document.createElement('div');
        accordionContent.classList.add('accordion-content');
        accordionContent.id = 'content-' + index;
        accordionContent.style.display = 'none';
        accordionContent.innerHTML = '<p>' + item.content + '</p>';

        accordionItem.appendChild(accordionHeader);
        accordionItem.appendChild(accordionContent);
        accordionContainer.appendChild(accordionItem);
    });
}

function toggleAccordion(id) {
    var content = document.getElementById(id);
    content.style.display = content.style.display === 'none' ? 'block' : 'none';
}
