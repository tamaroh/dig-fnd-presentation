const students = [
    {
        kanjiName: "",
        RomanName: "",
        pageUrl: "",
        slideUrl: "",
        sourceUrl: ""
    },
];

const target = document.getElementById('students');

students.forEach((student, index) => {
    const eachElement = document.createElement('div');
    eachElement.innerHTML = `<h2>${index + 1} ${student.kanjiName} ${student.RomanName}</h2>\r\n`;
    if (student.slideUrl !== "") {
        eachElement.innerHTML += `<p>Page URL: <a href="${student.pageUrl}" target="_blank">${student.pageUrl}</a></p>`
    }
    if (student.slideUrl !== "") {
        eachElement.innerHTML += `<p>Slide URL: <a href="${student.slideUrl}" target="_blank">${student.slideUrl}</a></p>`
    }
    if (student.slideUrl !== "") {
        eachElement.innerHTML += `<p>Source URL: <a href="${student.sourceUrl}" target="_blank">${student.sourceUrl}</a></p>`
    }
    target.appendChild(eachElement);
})