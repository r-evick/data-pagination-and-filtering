/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
Code by: Ryan Evick
*/

document.addEventListener('DOMContentLoaded', () => {  //allows JS to run no matter where it's placed in HTML

/*
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9; 
   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = '';
   
   for (let i = 0; i < list.length; i++) {
     if (i >= startIndex && i < endIndex) {             
      studentList.innerHTML +=
      `
      <li class="student-item cf">
      <div class="student-details">
        <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
        <h3>${list[i].name.first} ${list[i].name.last}</h3>
        <span class="email">${list[i].email}</span>  
      </div>
      <div class="joined-details">
        <span class="date">Joined ${list[i].registered.date}</span>
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

function addPagination(list) {
  const numButtons = parseInt(list.length / 9);
  const linkList = document.querySelector('.link-list');
  linkList.innerHTML = '';

  for (let i = 0; i < numButtons; i++) {            
    linkList.innerHTML +=
    `
    <li>
    <button type="button">${i + 1}</button>
    </li>
    `; 
  }
   
   const buttonNumber = linkList.querySelectorAll('BUTTON');
     if (buttonNumber.length > 0) {
       buttonNumber.className = 'active';
     }
   
   linkList.addEventListener('click', (e) => {   
      if (e.target.tagName == 'BUTTON') { 
        for (let i = 0; i < buttonNumber.length; i++) {
         buttonNumber[i].className = '';
         e.target.className = 'active';       
        }
      const pageNumber = e.target.textContent;
      showPage(list, pageNumber);
      }
   }); 
}

//Insert the elements you have created to the link-list variable you created earlier. 
// The insertAdjacentHTML method and beforeend option works well for this.


// Call functions

showPage(data, 1);
addPagination(data);

});