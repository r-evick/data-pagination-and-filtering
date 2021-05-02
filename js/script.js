/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
document.addEventListener('DOMContentLoaded', () => {

function showPage(list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9; 
   const studentList = document.getElementsByClassName('student-list');
   studentList.innerHTML = "";
   
   for (let i = 0; i < list.length; i++) {
     if (i >= startIndex && i < endIndex) {               //add title,age? which picture size?
      studentList.innerHTML +=
      `
      <li class="student-item cf">
      <div class="student-details">
        <img class="avatar" src="${list[i].picture.thumbnail}" alt="Profile Picture">
        <h3>${list[i].name.title}${list[i].name.first}${list[i].name.last}</h3>
        <span class="email">${list[i].email}</span>  
      </div>
      <div class="joined-details">
        <span class="date">${list[i].registered.date}</span>
      </div>
    </li>
      `;
     }
   }    
}


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions



});