document.addEventListener("DOMContentLoaded", function () {
    const courseSelectTemplate = document.querySelector("[course-select-templete]"); // Corrected attribute name
    const courseCardContainer = document.querySelector("[course-card-container]");
    const searchCourse = document.querySelector("[search-course]");

    let courses = [
        { title: "Information Technology", description: "Degree" },
        { title: "Information Technology2", description: "Degree2" },
        { title: "Information Technology3", description: "Degree3" },
        { title: "Information Technology4", description: "Degree4" }
    ];

    searchCourse.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase();
        courses.forEach(course => {
            const isVisible =
                course.title.toLowerCase().includes(value) ||
                course.description.toLowerCase().includes(value);
            course.element.classList.toggle("hide", !isVisible);
        });
    });

    courses.forEach(course => {
        const card = courseSelectTemplate.content.cloneNode(true).children[0];
        const title = card.querySelector("[course-header]");
        const description = card.querySelector("[course-body]");
        title.textContent = course.title;
        description.textContent = course.description;
        courseCardContainer.append(card);
        course.element = card;
    });
});