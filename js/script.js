/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
Code by: Ryan Evick
*/

document.addEventListener('DOMContentLoaded', () => {  //allows JS to run no matter where it's placed in HTML

/*
Inserts search bar into the header of the HTML
*/

const searchForm = document.querySelector('.header');
searchForm.insertAdjacentHTML('beforeend', 
  `
  <label for="search" class="student-search">
    <span>Search by name</span>
    <input id="search" placeholder="Search by name...">
    <button id="click" type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
  </label>
  `);

/*
This function will create and insert/append the elements needed to display a "page" of nine students
*/

const studentList = document.querySelector('.student-list');  //outside of showPage function so studentSearch function can use it

function showPage(list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9; 
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
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
  const numButtons = list.length / 9;
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
   
   linkList.addEventListener('click', (e) => {  //will give 'active' class to page clicked and remove it from all others 
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

/*
This function will add functionality to the search bar
Some of the below function uses code found from https://www.w3schools.com during research
*/

function studentSearch(list) {
  const searchButton = document.getElementById('click');
  const searchBar = document.getElementById('search');
  let searchMatch = [];

  searchBar.addEventListener('keyup', (e) => { //keyup event listener searches in real-time as user types
  searchMatch = [];
  const searchInput = searchBar.value.toLowerCase();
  for (let i = 0; i < list.length; i++) {
    const firstName = list[i].name.first.toLowerCase();
    const lastName = list[i].name.last.toLowerCase();
    if (firstName.includes(searchInput) || lastName.includes(searchInput)) {
       searchMatch.push(list[i]);
    }   
  }

  if (searchMatch.length === 0) {  //if there are no matches, display error message
     studentList.innerHTML = '';
     studentList.insertAdjacentHTML('beforeend',
     `
     <h1>Sorry, no results were found</h1>
     `
     );
     addPagination(searchMatch);
  } else {
     showPage(searchMatch, 1);
     addPagination(searchMatch);
  }
  });

   searchButton.addEventListener('click', (e) => {  //search button event handler
   searchMatch = [];
   const searchInput = searchBar.value.toLowerCase();
   for (let i = 0; i < list.length; i++) {
     const firstName = list[i].name.first.toLowerCase();
     const lastName = list[i].name.last.toLowerCase();
     if (firstName.includes(searchInput) || lastName.includes(searchInput)) {
        searchMatch.push(list[i]);
     }   
   }
 
   if (searchMatch.length === 0) {
      studentList.innerHTML = '';
      studentList.insertAdjacentHTML('beforeend',
      `
      <h1>Sorry, no results were found</h1>
      `
      );
      addPagination(searchMatch);
   } else {
      showPage(searchMatch, 1);
      addPagination(searchMatch);
   }
   });
}

// Call the functions

showPage(data, 1);
addPagination(data);
studentSearch(data);
});