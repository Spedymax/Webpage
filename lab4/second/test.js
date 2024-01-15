fetch('getAccordionData.php')
    .then(response => response.json())
    .then(data => {
        if (data.length > 0 && data[0].title === 'edited') {
            data.shift(); // Remove the 'edited' element
            createAccordion(data);

            // Send the updated data back to the server
            updateAccordionData(data);
        }
    })
    .catch(error => {
        console.error('Error fetching accordion data:', error);
    });

function updateAccordionData(updatedData) {
    fetch('updateAccordionData.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ accordionData: updatedData })
    })
        .then(response => response.json())
        .then(data => {
            console.log('Data updated:', data);
        })
        .catch(error => {
            console.error('Error updating accordion data:', error);
        });
}




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
