
  // Get references to the course selection elements and the comparison data cells
  const courseSelect = document.getElementById('courseSelect');
  const courseSelectTop1 = document.getElementById('courseSelectTop1');
  const courseSelectTop2 = document.getElementById('courseSelectTop2');
  const firstAttributeCell = document.getElementById('firstAttribute');
  const thirdAttributeCell = document.getElementById('thirdAttribute');

  // Define a JavaScript object to hold course data
  const courseData = {
      "Introduction to Computer Science": ["Introduction to Computer Science", "Name", "Data Structures and Algorithms"],
      "Data Structures and Algorithms": ["90000", "Price", "100000"],
      "Software Engineering": ["Software Engineering", "Category", "Business"]
  };

  // Event listeners to update comparison table when a course is selected
  courseSelectTop1.addEventListener('change', () => {
      updateComparisonTable(courseSelectTop1.value);
  });

  courseSelectTop2.addEventListener('change', () => {
      updateComparisonTable(courseSelectTop2.value);
  });

  function updateComparisonTable(selectedCourse) {
      if (selectedCourse) {
          // Update the first column based on the selected course
          firstAttributeCell.textContent = courseData[selectedCourse][1]; // Name

          // Update the third column based on the selected course
          thirdAttributeCell.textContent = courseData[selectedCourse][2]; // Undergraduate
      } else {
          // Clear the comparison table when no course is selected
          firstAttributeCell.textContent = '';
          thirdAttributeCell.textContent = '';
      }
  }

