

    // Define a JavaScript object to hold course data
    const courseData = {
        "Diploma in Computer Science": ["2years", "Estimated Total Fees : RM 17,600 (Malaysian Student), RM33,300 (International Student)", "theoretical knowledge and practical skills for software development, system design and related mathematical techniques.", "KL - Kuala Lumpur Main Campus<br>(R2/481/4/0345A)(08/28)(AA0109)<br>PG - Penang Branch Campus<br>(R2/0613/4/0354A)(09/28)(AA0139)<br>JH - Johor Branch Campus<br>(R/481/4/0761)(07/26)(MQA/FA7636)", "June"],
        "Diploma in Information Systems": ["2 years", "Estimated Total Fees : RM 17,800 (Malaysian Student), RM33,600 (International Student)", "- Fundamental Knowledge in Information Technology<br>- Business-Related Applications<br>- Developing Information Systems<br>- Costing and Accounting<br>- Electronic Commerce<br>- Mathematics<br>- Case Studies<br>- Computer Laboratory Assignments<br>- SAP Curriculum Exposure<br>- Programming Skills such as the C Language, HTML5, JavaScript, and VB.NET<br>Web Development<br>- Database Management particularly Oracle Database<br>- Accounting Software Packages<br>- Information System Development",  "KL - Kuala Lumpur Main Campus<br>(R2/481/4/0345A)(08/28)(AA0109)<br>PG - Penang Branch Campus<br>(R2/0613/4/0354A)(09/28)(AA0139)<br>JH - Johor Branch Campus<br>(R/481/4/0761)(07/26)(MQA/FA7636)", "June"],
        "Diploma in Information Technology": ["2 years", "Estimated Total Fees : RM 17,800 (Malaysian Student), RM33,600 (International Student)", "- Basic Understanding of Computing Techniques<br>- Computing and Information Technology Knowledge<br>- Understanding of Modern Computing Technology<br>- Programming Skills such as C Language, Java, Assembly Language, and scripting languages like PHP and JavaScript<br>- Database Management such as Oracle Database<br>- Web Development including HTML5, CSS, and JavaScript<br>- Systems Analysis<br>- Operating Systems<br>- Computer Networking<br>- Computer Applications<br>- Object-Oriented Software Development<br>- Generic Business Courses","KL - Kuala Lumpur Main Campus<br>(R2/481/4/0345A)(08/28)(AA0109)<br>PG - Penang Branch Campus<br>(R2/0613/4/0354A)(09/28)(AA0139)<br>JH - Johor Branch Campus<br>(R2/0611/4/0199A)(09/28)(AA0163)<br>PH - Pahang Branch<br>(R2/0611/4/0198A)(12/28)(AA0168)<br>SB - Sabah Branch<br>(R2/0611/4/0197A)(12/28)(AA0122)", "June"],
        "Diploma in Software Engineering": ["2 years", "Estimated Total Fees : RM 17,800 (Malaysian Student)", "- Fundamental Knowledge of Software Engineering<br>- Practical Software Development Skills<br>- Analytical Thinking Skills<br>- Basic Managerial Skills<br>- Innovation and Entrepreneurship<br>- Business Opportunities in Software Engineering","SB - Sabah Branch<br>(R2/0611/4/0197A)(12/28)(AA0122)", "June"],
        "Bachelor of Science (Honours) in Management Mathematics with Computing": ["3 years", "Estimated Total Fees : RM 34,100 (Malaysian Student), RM59,500 (International Student)", "- Management Mathematics<br>- Computing (Minor)<br>- Economics or Accounting Methods (Associate Study)<br>- Interdisciplinary Blend<br>- Preparation for Further Academic Pursuits<br>- Foundation for Professional Qualifications","SB - Sabah Branch<br>(R2/0611/4/0197A)(12/28)(AA0122)", "June"],
        "Bachelor of Computer Science (Honours) in Interactive Software Technology": ["3 years", "Estimated Total Fees : RM 35,100 (Malaysian Student), RM61,200 (International Student)", "- Technical Knowledge in Computer Science<br>- Design and Development of Interactive Software including Mobile Applications, Video Games, Simulations, Virtual Reality, Electronic Magazines, Educational and Training Materials<br>- Application Across Industries<br>- Specific Coursework including Computer Game Studies, Mathematics for Games Technology, Computer Game Programming, Software Engineering, Mobile Application Development, Artificial Intelligence, Graphics Programming,Human-Computer Interaction","KL - Kuala Lumpur Main Campus<br>(R2/481/4/0345A)(08/28)(AA0109)", "Year 1 Intake: June<br>Year 2 Intake: June"],
        "Bachelor of Software Engineering (Honours)": ["3 years", "Estimated Total Fees : RM 34,600 (Malaysian Student), RM60,400 (International Student)", "- Software Development Skills<br>- Fundamentals of Computing<br>- Specialization in Software Engineering like Systems Analysis and Design, Software Engineering, Software Requirements Engineering, Software Design and Architecture, Formal Methods, Software Quality Assurance and Testing, Software Evolution and Maintenance, and Software Project Management<br>- Elective Courses include Introduction to Computer Security, Advanced Database Management, Mobile Application Development, Web Application Development, Blockchain Application Development, Agile Software Development, Data Science, and Cloud Computing<br>- Real-Life Projects<br>- Industry Exposure","KL - Kuala Lumpur Main Campus<br>(R2/481/4/0345A)(08/28)(AA0109)<br>PH - Pahang Branch<br>(R2/0611/4/0198A)(12/28)(AA0168)", "Year 1 Intake: January (KL); June (KL, PG); November (KL)<br>Year 2 Intake: June (KL, PG)"],
        "Bachelor of Computer Science (Honours) in Data Science": ["3 years", "Estimated Total Fees : RM34,300 (Malaysian Student), RM59,900 (International Student)", "- Data Science Skills<br>- Data Analysis<br>- Machine Learning<br>- Artificial Intelligence (AI)<br>- Internet of Things (IoT)<br>- Business Intelligence (BI)<br>- Data Warehouse Technology<br>- Cloud Computing<br>- Computer Science Core Courses<br>- Real-Life Projects<br>- Industry Exposure<br>- SAS Joint Certificate","KL - Kuala Lumpur Main Campus<br>(R2/481/4/0345A)(08/28)(AA0109)<br>PG - Penang Branch Campus<br>(N/481/6/0815)(06/24)(MQA/PA10813)", "Year 1 Intake: January (KL); June (KL, PG); November (KL)<br>Year 2 Intake: June (KL, PG)"]
    };

   // Get references to the course selection elements and the comparison data cells
const courseSelectElements = {
    top1: document.getElementById('courseSelectTop1'),
    top2: document.getElementById('courseSelectTop2'),
};

const attributeCells = {
    first: [
        document.getElementById('firstAttribute'),
        document.getElementById('firstAttribute2'),
        document.getElementById('firstAttribute3'),
        document.getElementById('firstAttribute4'),
        document.getElementById('firstAttribute5'),
    ],
    third: [
        document.getElementById('thirdAttribute'),
        document.getElementById('thirdAttribute2'),
        document.getElementById('thirdAttribute3'),
        document.getElementById('thirdAttribute4'),
        document.getElementById('thirdAttribute5'),
    ],
};

// Event listeners to update comparison table when a course is selected
courseSelectElements.top1.addEventListener('change', () => {
    updateComparisonTable(courseSelectElements.top1, 'first');
});

courseSelectElements.top2.addEventListener('change', () => {
    updateComparisonTable(courseSelectElements.top2, 'third');
});

function updateComparisonTable(selectedCourseElement, column) {
    const selectedCourse = selectedCourseElement.value;
    const courseAttributes = courseData[selectedCourse];

    if (courseAttributes) {
        // Update the corresponding column based on the selected course
        const attributeCell = attributeCells[column];

        for (let i = 0; i < courseAttributes.length; i++) {
            attributeCell[i].innerHTML = courseAttributes[i];
        }
    } else {
        // Clear the comparison table when no course is selected
        const attributeCell = attributeCells[column];

        for (let i = 0; i < attributeCell.length; i++) {
            attributeCell[i].innerHTML = '';
        }
    }
}
