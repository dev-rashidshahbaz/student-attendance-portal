  let form = document.getElementById("attendanceForm");
  let tableBody = document.getElementById("attendanceTableBody");
  let presentCountEl = document.getElementById("presentCount");
  let absentCountEl = document.getElementById("absentCount");

  let presentCount = 0;
  let absentCount = 0;
  let records = []; // store all attendance

  form.addEventListener("submit", function(event){
    event.preventDefault();

    let fname = document.getElementById("fname").value.trim();
    let date = document.getElementById("date").value;
    let attendance = document.getElementById("attendance").value;

    if(fname === "" || date === ""){
      alert("Please fill all fields");
      return;
    }

    // check if already marked (same name + date)
    let already = records.find(function(r){
      return r.fname.toLowerCase() === fname.toLowerCase() && r.date === date;
    });

    if(already){
      alert("Attendance for " + fname + " on " + date + " already exists.");
      return;
    }

    // save record
    let record = {fname: fname, date: date, attendance: attendance};
    records.push(record);

    // add row to table
    let row = document.createElement("tr");
    row.innerHTML = "<td>" + fname + "</td><td>" + date + "</td><td>" + attendance + "</td>";
    tableBody.appendChild(row);

    // update counts
    if(attendance === "Present"){
      presentCount++;
      presentCountEl.textContent = presentCount;
    } else {
      absentCount++;
      absentCountEl.textContent = absentCount;
    }

    form.reset();
  });