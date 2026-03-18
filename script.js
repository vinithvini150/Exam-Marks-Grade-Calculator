document.getElementById("btn").addEventListener("click", () => {


    let StudentDetails = [{
        name: document.getElementById("stuname").value,
        Std: document.getElementById("std").value
    }
    ];

    let marks = [
        Number(document.getElementById("mark-1").value),
        Number(document.getElementById("mark-2").value),
        Number(document.getElementById("mark-3").value),
        Number(document.getElementById("mark-4").value)
    ];

    for (let i = 0; i < marks.length; i++) {

        let Fgrade = "";

        if (marks[i] >= 90) Fgrade = "A";
        else if (marks[i] >= 75) Fgrade = "B";
        else if (marks[i] >= 50) Fgrade = "C";
        else if (marks[i] >= 35) Fgrade = "D";
        else if (marks[i] >= 34) Fgrade = "Fail";
        else Fgrade = "-";

        document.getElementById(`grade-${i + 1}`).textContent = Fgrade;
    }

    console.log("StudentName:" + StudentDetails[0].name, "Std:" + StudentDetails[0].Std, marks);
});