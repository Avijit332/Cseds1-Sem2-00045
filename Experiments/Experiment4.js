function calculate() {
    let n= document.getElementById("subjects").value;
    let totalMarks = 0;
    for (let i = 1; i <= n; i++) {
        let marks = parseFloat(prompt(`Enter marks for subject ${i}:`));
        totalMarks += marks;
    }let averageMarks = totalMarks / n;
    let grade;
    let result;
    if (averageMarks >= 90) {
        grade = 'A';
    } else if (averageMarks >= 80) {
        grade = 'B';
    }   else if (averageMarks >= 70) {      
        grade = 'C';
    } else if (averageMarks >= 60) {
        grade = 'D';
    } else {
        grade = 'F';
    }   
    if(averageMarks >= 40){
        result = 'Pass';
    } else {
        result = 'Fail';
    }document.getElementById("result").innerHTML = 
    "<h3>Total Marks: " + totalMarks + "</h3>" +
    "<h3>Average Marks: " + averageMarks.toFixed(2) + "</h3>" +
    "<h3>Grade: " + grade + "</h3>" +
    "<h3>Result: " + result + "</h3>";
}