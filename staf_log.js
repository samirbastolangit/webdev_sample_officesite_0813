console.log("checking console; everything okey until now!!!")
// setting up dummies data 
const staffData = [
    { username: "staff1", password: "pass1", details: "Staff 1: Manager, Branch A" },
    { username: "staff2", password: "pass2", details: "Staff 2: Accountant, Branch B" },
    { username: "staff3", password: "pass3", details: "Staff 3: HR, Branch C" },
    { username: "staff4", password: "pass4", details: "Staff 4: IT, Branch D" },
    { username: "staff5", password: "pass5", details: "Staff 5: Clerk, Branch E" },
];


// on clicking login button passing entered user name and password to function validateLogin()

function validateLogin(){
    const username = document.getElementById("username").value;     // now the user name type by user during portal phase is stored here
    const password = document.getElementById("password").value ;


// checking whether entered value is correct or not 

let staff = null;

for(let i = 0; i < staffData.length ; i++)
{
    if( staffData[i].username === username && staffData[i].password === password){
        staff = staffData[i];
        break;
    }
}

// now performing as per our result
if(staff){
    alert("Login Sucessfull !!!");       // give logged in message
    localStorage.setItem("staffDetails",staff.details); // storing staff details for later use
    window.location.href = "portal.html" ;       // redirecting to portal page
}
else{
    alert("Invalid Username or Password !!!")
}

}
// now here go out of mind
