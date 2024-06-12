window.onload=testFunction;
function testFunction(){
document.getElementById("submit").onclick = run;
}

function run(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const aboutYourself = document.getElementById('about-yourself').value;
    const achievements = document.getElementById('achievements').value;
    const grade = document.getElementById('grade').value;
    const notifications = document.querySelector('input[name="notifications"]:checked').value;

    alert("Please verify your details:-\nName: " + name + "\nEmail: " + email + "\nDate of Birth: " + dob + "\About Yourself: " + aboutYourself + "\nAchievements: " + achievements + "\nGrade: " + grade + "\nNotifications: " + notifications);
}