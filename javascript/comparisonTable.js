    // Get references to the course selection elements and the comparison data cells
    const courseSelect = document.getElementById('courseSelect');
    const courseSelectTop1 = document.getElementById('courseSelectTop1');
    const courseSelectTop2 = document.getElementById('courseSelectTop2');
    const firstAttributeCell = document.getElementById('firstAttribute');
    const firstAttributeCell2 = document.getElementById('firstAttribute2');
    const firstAttributeCell3 = document.getElementById('firstAttribute3');
    const firstAttributeCell4 = document.getElementById('firstAttribute4');
    const firstAttributeCell5 = document.getElementById('firstAttribute5');
    const thirdAttributeCell = document.getElementById('thirdAttribute');
    const thirdAttributeCell2 = document.getElementById('thirdAttribute2');
    const thirdAttributeCell3 = document.getElementById('thirdAttribute3');
    const thirdAttributeCell4 = document.getElementById('thirdAttribute4');
    const thirdAttributeCell5 = document.getElementById('thirdAttribute5');

    // Define a JavaScript object to hold course data
    const courseData = {
        "Diploma in Computer Science": ["2years", "Estimated Total Fees : RM 17,600 (Malaysian Student), RM33,300 (International Student)", "Students are trained in both theoretical knowledge and practical skills for software development, system design and related mathematical techniques. ", "KL - Kuala Lumpur Main Campus<br>(R2/481/4/0345A)(08/28)(AA0109)<br>PG - Penang Branch Campus<br>(R2/0613/4/0354A)(09/28)(AA0139)<br>JH - Johor Branch Campus<br>(R/481/4/0761)(07/26)(MQA/FA7636)", "June"],
        "Diploma in Information Systems": ["2 years", "Estimated Total Fees : RM 17,800 (Malaysian Student), RM33,600 (International Student)", "This programme majors in business information systems. It aims to produce graduates with fundamental knowledge in information technology and its business related applications. It covers the theoretical and practical aspects of developing information systems, management, costing, accounting, electronic commerce, and mathematics. This programme is supported by case studies and computer laboratory assignments. In addition, students are exposed to part of the SAP curriculum like logistics and enterprise resource planning. Students will acquire practical skills in the C Language, HTML5, JavaScript, VB.NET, Microsoft Expression Web, Oracle Database, accounting software packages and be guided through the process of developing an information system.",  "KL - Kuala Lumpur Main Campus<br>(R2/481/4/0345A)(08/28)(AA0109)<br>PG - Penang Branch Campus<br>(R2/0613/4/0354A)(09/28)(AA0139)<br>JH - Johor Branch Campus<br>(R/481/4/0761)(07/26)(MQA/FA7636)", "June"],
        "Diploma in Information Technology": ["2 years", "Estimated Total Fees : RM 17,800 (Malaysian Student), RM33,600 (International Student)", "This programme provides students with a basic understanding of computing techniques and aims to develop the computing and information technology-based knowledge and skills required in modern industrial, commercial and service organisations. It will equip students with essential knowledge of the underlying principles of modern computing technology and enable students to appreciate how modern computers are applied to a range of real world problems. Students will learn C Language, Java, Assembly Language, Oracle Database, HTML5, CSS, PHP and JavaScript. Upon completion, graduates will have acquired knowledge and developed skills in the areas of computer programming, systems analysis, operating systems, computer networking, computer applications and object-oriented software development, as well as in generic business courses.","KL - Kuala Lumpur Main Campus<br>(R2/481/4/0345A)(08/28)(AA0109)<br>PG - Penang Branch Campus<br>(R2/0613/4/0354A)(09/28)(AA0139)<br>JH - Johor Branch Campus<br>(R/481/4/0761)(07/26)(MQA/FA7636)JH - Johor Branch Campus<br>(R2/0611/4/0199A)(09/28)(AA0163)<br>PH - Pahang Branch<br>(R2/0611/4/0198A)(12/28)(AA0168)<br>SB - Sabah Branch<br>(R2/0611/4/0197A)(12/28)(AA0122)", "June"],
        "Diploma in Software Engineering": ["2 years", "Estimated Total Fees : RM 17,800 (Malaysian Student)", "This programme equips students with the fundamental knowledge of software engineering with practical and analytical thinking skills in software development. It also provides students with basic managerial skills and innovation in creating business opportunities in the area of software engineering, as well as educational experience that motivates them to pursue higher level of study and life-long learning.","SB - Sabah Branch<br>(R2/0611/4/0197A)(12/28)(AA0122)", "June"],
        "Bachelor of Science (Honours) in Management Mathematics with Computing": ["3 years", "Estimated Total Fees : RM 34,100 (Malaysian Student), RM59,500 (International Student)", "This programme equips students with the fundamental knowledge of software engineering with practical and analytical thinking skills in software development. It also provides students with basic managerial skills and innovation in creating business opportunities in the area of software engineering, as well as educational experience that motivates them to pursue higher level of study and life-long learning.","SB - Sabah Branch<br>(R2/0611/4/0197A)(12/28)(AA0122)", "June"],
        "Bachelor of Computer Science (Honours) in Interactive Software Technology": ["3 years", "Estimated Total Fees : RM 35,100 (Malaysian Student), RM61,200 (International Student)", "This programme aims to teach students the technical knowledge and skills in computer science with a further focus on the design and development of interactive software such as mobile applications, video games, simulations, virtual reality, electronic magazines, educational and training materials. These interactive applications can then be utilized by the entertainment industry, businesses as well as in education.<br>The students from this programme will study Computer Game Studies, Mathematics for Games Technology, Computer Game Programming, Software Engineering, Mobile Application Development, Artificial Intelligence, Graphics Programming and Human Computer Interaction.<br>Electives courses like Advanced Computer Game Programming, Digital Illustration, Computer Game Design, Virtual Reality, 3D Animation and 3D Game Development will be offered to students undergoing this programme.","KL - Kuala Lumpur Main Campus<br>(R2/481/4/0345A)(08/28)(AA0109)", "Year 1 Intake: June<br>Year 2 Intake: June"],
        "Bachelor of Software Engineering (Honours)": ["3 years", "Estimated Total Fees : RM 34,600 (Malaysian Student), RM60,400 (International Student)", "Graduates of this programme will be able to develop, manage and maintain high-quality software in a systematic, controlled and efficient manner. In addition to fundamentals of computing, core courses such as Data Structures and Algorithms, Research Method, Artificial Intelligence, Human Computer Interaction, and Distributed Systems and Parallel Computing will be offered to students.<br>Students will develop their specialisation by going through the following courses; Systems Analysis and Design, Software Engineering, Software Requirements Engineering, Software Design and Architecture, Formal Methods for Software Engineering, Software Quality Assurance and Testing, Software Evolution and Maintenance, and Software Project Management.<br>Elective courses like Introduction to Computer Security, Advanced Database Management, Mobile Application Development, Web Application Development, Blockchain Application Development, Agile Software Development, Data Science, and Cloud Computing also will be offered to students undergoing this programme.<br>Students will have an opportunity to work with the industry through their 6 months industrial training and carry out real-life projects on software engineering. All such training will add value to their qualification and increase their employment opportunities.","KL - Kuala Lumpur Main Campus<br>(R2/481/4/0345A)(08/28)(AA0109)<br>PH - Pahang Branch<br>(R2/0611/4/0198A)(12/28)(AA0168)", "Year 1 Intake: January (KL); June (KL, PG); November (KL)<br>Year 2 Intake: June (KL, PG)"],
        "Bachelor of Computer Science (Honours) in Data Science": ["3 years", "Estimated Total Fees : RM34,300 (Malaysian Student), RM59,900 (International Student)", "This programme is designed to train students in both computer science and data science, which prepares them well for data professionals or data scientist career pathway. Graduates of this programme are highly demanded in the increasingly data-driven world where their main role is to make sense of big data to improve business processes, optimize resources, increase profits, increase customer satisfaction, personalized experience, automation, and so on.<br>Artificial Intelligence, Machine Learning, Internet of Things, Business Intelligence, Data Warehouse Technology, Cloud Computing are some of the specialization courses covered in this programme in addition to core courses of Computer Science, for example, Programming, Database Management, Software Engineering and Computer Networks.<br>Students will have an opportunity to work with the industry through their 6 months industrial training and carry out real-life projects on data science and computer science. All such training will add value to their qualification and increase their employment opportunities.<br>Upon completion of this program, the students will also obtain SAS Joint Certificate specialised in Data Science and Machine Learning.  ","KL - Kuala Lumpur Main Campus<br>(R2/481/4/0345A)(08/28)(AA0109)<br>PG - Penang Branch Campus<br>(N/481/6/0815)(06/24)(MQA/PA10813)", "Year 1 Intake: January (KL); June (KL, PG); November (KL)<br>Year 2 Intake: June (KL, PG)"]
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
            firstAttributeCell2.textContent = courseData[selectedCourse][1]; 
            firstAttributeCell3.innerHTML = courseData[selectedCourse][2]; 
            firstAttributeCell4.innerHTML = courseData[selectedCourse][3]; 
            console.log(firstAttributeCell4.textContent);
            firstAttributeCell5.innerHTML = courseData[selectedCourse][4]; 
            
        } else {
            // Clear the comparison table when no course is selected
            firstAttributeCell.textContent = '';
            firstAttributeCell2.textContent = '';
            firstAttributeCell3.innerHTML = '';
            firstAttributeCell4.innerHTML = '';
            firstAttributeCell5.innerHTML = '';
        }
    }

    function updateComparisonTable2(selectedCourse) {
        if (selectedCourse in courseData) {
            // Update the first column based on the selected course
           
            thirdAttributeCell.textContent = courseData[selectedCourse][0]; // Third column
            thirdAttributeCell2.textContent = courseData[selectedCourse][1]; // Third column
            thirdAttributeCell3.innerHTML = courseData[selectedCourse][2]; // Third column
            thirdAttributeCell4.innerHTML = courseData[selectedCourse][3]; // Third column
            thirdAttributeCell5.innerHTML = courseData[selectedCourse][4]; // Third column
        } else {
            // Clear the comparison table when no course is selected
            thirdAttributeCell.textContent = '';
            thirdAttributeCell2.textContent = '';
            thirdAttributeCell3.innerHTML = '';
            thirdAttributeCell4.innerHTML  = '';
            thirdAttributeCell5.innerHTML  = '';
        }
    }