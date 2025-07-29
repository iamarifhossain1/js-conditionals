
/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/



let studentGrade = 40;

if (studentGrade >= 90) {
    console.log ('Congratulations ! you have got A+')
}

else if (studentGrade >= 80) {
    console.log ('Congratulations ! you have got B')
}

else if (studentGrade >= 70) {
    console.log ('Congratulations ! you have got C')
}

else if (studentGrade >= 60) {
    console.log ('Congratulations ! you have got D')
}

else {
    console.log ('Failed :( Better Luck Next Time........Study Hard !');
}