    // Get references to the course selection elements and the comparison data cells
    const courseSelect = document.getElementById('courseSelect');
    const courseSelectTop1 = document.getElementById('courseSelectTop1');
    const courseSelectTop2 = document.getElementById('courseSelectTop2');
    const firstAttributeCell = document.getElementById('firstAttribute');
    const firstAttributeCell2 = document.getElementById('firstAttribute2');
    const firstAttributeCell3 = document.getElementById('firstAttribute3');
    const thirdAttributeCell = document.getElementById('thirdAttribute');
    const thirdAttributeCell2 = document.getElementById('thirdAttribute2');
    const thirdAttributeCell3 = document.getElementById('thirdAttribute3');

    // Define a JavaScript object to hold course data
    const courseData = {
        "Introduction to Computer Science": ["Computer Science", "10000", "Science"],
        "Data Structures and Algorithms": ["Data Structures", "99999", "Data"],
        "Software Engineering": ["Software Engineering", "1800000", "software"]
    };

    // Event listeners to update comparison table when a course is selected
    courseSelectTop1.addEventListener('change', () => {
        updateComparisonTable(courseSelectTop1.value);
    });

    courseSelectTop2.addEventListener('change', () => {
        updateComparisonTable2(courseSelectTop2.value);
    });

    function updateComparisonTable(selectedCourse) {
        if (selectedCourse in courseData) {
            // Update the first column based on the selected course
            firstAttributeCell.textContent = courseData[selectedCourse][0]; // First column
            firstAttributeCell2.textContent = courseData[selectedCourse][1]; // First column
            firstAttributeCell3.textContent = courseData[selectedCourse][2]; // First column
            
        } else {
            // Clear the comparison table when no course is selected
            firstAttributeCell.textContent = '';
            firstAttributeCell2.textContent = '';
            firstAttributeCell3.textContent = '';
        }
    }

    function updateComparisonTable2(selectedCourse) {
        if (selectedCourse in courseData) {
            // Update the first column based on the selected course
           
            thirdAttributeCell.textContent = courseData[selectedCourse][0]; // Third column
            thirdAttributeCell2.textContent = courseData[selectedCourse][1]; // Third column
            thirdAttributeCell3.textContent = courseData[selectedCourse][2]; // Third column
        } else {
            // Clear the comparison table when no course is selected
            thirdAttributeCell.textContent = '';
            thirdAttributeCell2.textContent = '';
            thirdAttributeCell3.textContent = '';
        }
    }