let jsonData = [];  // This should be a global variable to store the entire parsed data
let currentPage = 1;  // Initially, the current page is set to 1
let itemsPerPage = 2;

const csvFile = '../data/staff.csv';
fetch(csvFile)
        .then(response => response.text())
        .then(data => {
                        displayjson(data);
                        const itemsPerPageSelect = document.getElementById('itemsPerPageSelect');
                        itemsPerPageSelect.addEventListener('change', function() {
                            itemsPerPage = parseInt(this.value, 11);  // Update the itemsPerPage value
                            currentPage = 1; // Reset current page to 1
                            displayPage(currentPage);  // Refresh the display with the new itemsPerPage value
                            setupPaginationButtons();  // Setup pagination buttons with the new itemsPerPage value
                        });
                        // displaytable1(data);
                        // displaytable2(data);
        })
        .catch(error => console.error('Error:', error));


function displayjson(data) {
    
    const appDiv = document.getElementById('app');
    const rows = data.split('\n');

    const headers = rows[0].split(',');
    jsonData = [];

    rows.forEach((e, rowIndex) => {
        if (rowIndex === 0) return;  // Skip the header row
        let content = e.split(',');
        // For each content item, replace & with ,
        content = content.map(item => item.replace(/&/g, ","));
        const obj = {};
        headers.forEach((header, i) => {
            obj[header] = content[i];
        });
        jsonData.push(obj);
        console.log(jsonData);
    });

    displayPage(currentPage);  // Initially display the first page
    setupPaginationButtons();  // Setup pagination buttons
}

function displayPage(pageNumber) {
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = '';  // Clear the current display

    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    for (let i = startIndex; i < endIndex && i < jsonData.length; i++) {
        const divElement = document.createElement('div');
        
        // Add responsive classes
        divElement.classList.add('flex', 'flex-col', 'md:flex-row', 'items-center', 'mb-4', 'p-4', 'shadow-md', 'bg-white', 'rounded-md', 'w-full', 'md:w-3/4', 'mx-auto');

        let imgHtml = '<div class="mr-4 mb-4 md:mb-0 w-full md:w-auto">';
        imgHtml += '<img src="../images/tarumt.png" alt="Description" class="w-full max-w-60 md:w-60">';
        imgHtml += '</div>';

        let jsonDataHtml = '<div class="w-full">';
        for (let key in jsonData[i]) {
            if(jsonData[i][key] !== "-") {
                console.log(key);
                let extraClasses = getExtraClassesForKey(key);
                let value = jsonData[i][key];
               
                switch (key) {
                    case "Major_study":
                        value = "<strong class='font-bold'>Major of Study/Specialization:</strong> " + value;
                        break;
                    case "Interest":
                        value = "<strong class='font-bold'>Area of Interest:</strong> " + value;
                        break;
                    default:
                        break;
                }

                jsonDataHtml += `<p class="${extraClasses}">${value}</p>`;
                // jsonDataHtml += `<p class="${extraClasses}">${jsonData[i][key]}</p>`;
            }
        }
        jsonDataHtml += '</div>';

        divElement.innerHTML = imgHtml + jsonDataHtml;
        appDiv.appendChild(divElement);
    }
}

function setupPaginationButtons() {
    const paginationDiv = document.getElementById('pagination');
    paginationDiv.innerHTML = '';  // Clear the existing pagination buttons
    paginationDiv.classList.add('ml-5', 'sm:ml-10', 'md:ml-20', 'lg:ml-40', 'xl:ml-[120px]');

    const pagesLabel = document.createElement('span');
    pagesLabel.innerText = 'PAGES';
    pagesLabel.classList.add('mr-2', 'font-bold');  // Some styling, adjust as needed
    paginationDiv.appendChild(pagesLabel);

    const totalPages = Math.ceil(jsonData.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.innerText = i;
        // button.classList.add('mx-0.5', 'py-2', 'px-4', 'bg-blue-500', 'text-white', 'rounded-md');
        button.classList.add('mx-1', 'py-1', 'px-3', 'bg-blue-500', 'text-white', 'rounded-md', 'sm:py-2', 'sm:px-4');
        if (i === currentPage) {
            button.classList.add('bg-blue-700');
        }
        button.addEventListener('click', function() {
            currentPage = i;
            displayPage(currentPage);
            setupPaginationButtons();  
        });
        paginationDiv.appendChild(button);
    }
}


function getExtraClassesForKey(key) {
    let extraClasses = '';
    switch (key) {
        case "Name":
            extraClasses = 'font-bold text-3xl';
            break;
        case "Position":
            extraClasses = 'font-bold italic text-blue-500 text-2xl mb-2';
            break;
        case "Lecture":
            extraClasses = ' font-bold text-blue-500 text-2xl mb-2';
            break;
        default:
            extraClasses = 'text-gray-500';
            break;
    }
    return extraClasses;
}