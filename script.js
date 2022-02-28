const students = [
    {
        name: "",
        pageUrl: "",
        slideUrl: ""
    },
];

const target = document.getElementById('students');

students.forEach((student, index) => {
    const eachElement = document.createElement('div');
    eachElement.innerHTML = `<h2>${index + 1} ${student.name}</h2>\r\n`;
    eachElement.innerHTML += `<p>Page URL: <a href="${student.pageUrl}" target="_blank">${student.pageUrl}</a></p>`
    eachElement.innerHTML += `<p>Slide URL: <a href="${student.slideUrl}" target="_blank">${student.slideUrl}</a></p>`
    target.appendChild(eachElement);
})