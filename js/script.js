/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

// This app provides a list of students with contact details and information with a search/filter facility.

const header = document.querySelector('header');
const studentUl = document.querySelector('.student-list');
const paginationUl = document.querySelector('.link-list');
const searchForm = `<label for="search" class="student-search">
                     <span>Search by name</span>
                     <input id="search" placeholder="Search by name...">
                     <button type="button"><img src="img/icn-search.svg" alt="Search icon"></button>
                   </label>`;
header.insertAdjacentHTML('beforeend', searchForm);
const input = document.querySelector('#search');
const button = document.querySelector('button[type="button"]');
const studentsPerPage = 9;

/*
Render student objects to the page
*/
function showpage(list, page) {
   let startIndex = (page * studentsPerPage) - studentsPerPage;
   let endIndex = page * studentsPerPage;
   studentUl.innerHTML = '';

   for (let i=0; i <= list.length-1; i++) {
      if (i >= startIndex && i < endIndex) {
         let student = `<li class="student-item cf">
                           <div class="student-details">
                           <img class="avatar" src=${list[i].picture.medium} alt="Profile Picture">
                           <h3>${list[i].name.first} ${list[i].name.last}</h3>
                           <span class="email">${list[i].email}</span>
                           </div>
                           <div class="joined-details">
                           <span class="date">Joined ${list[i].registered.date}</span>
                           </div>
                        </li>`;
         studentUl.insertAdjacentHTML("beforeend", student);
      }
   }
}


/*
function for rendering pagination buttons to the page.
*/
function addPagination(list) {
 const numOfPages = Math.ceil(list.length / studentsPerPage);
 paginationUl.innerHTML = '';
 
 for (let i=1; i <= numOfPages; i++) {
   let button = `<li><button type="button">${[i]}</button></li>`;
   paginationUl.insertAdjacentHTML('beforeend', button);
   if (i === 1) {
      paginationUl.querySelector('button').classList.add('active');
   }
 }
 const li = document.getElementsByTagName('li');
 // render corresponding student objects to the page, hightlight page number
 for (let i=0; i < li.length; i++) {
   li[i].addEventListener('click', (e) => {
      const activeButton = paginationUl.querySelector(".active");
      const buttonClicked = e.target.closest("button");
   
      if (buttonClicked) {
         let pageNumber = buttonClicked.textContent;
         activeButton.classList.remove('active');
         buttonClicked.classList.add('active');
         showpage(list, pageNumber);
      }
    });
 }
}

//Search and filter student objects - keyboard events
input.addEventListener('keyup', (e) => {
   const studentSearch = [];
   const userInput = e.target.value.toLowerCase();
   for (let i=0; i < data.length; i++) {
      let currentStudent = `${data[i].name.first.toLowerCase()} ${data[i].name.last.toLowerCase()}`;
      if (currentStudent.includes(userInput)) {
         studentSearch.push(data[i]);
      }  
   }

   if (studentSearch.length > 0) {
      showpage(studentSearch, 1);
      addPagination(studentSearch);
   } else {
      studentUl.innerHTML = `<h3>No results found</h3>`;
      paginationUl.innerHTML = '';
   }
});

//Search and filter student objects - mouse events
button.addEventListener('click', (e) => {
      const studentSearch = [];
      const searchButton = e.target.closest('button');
      let userInput = searchButton.previousElementSibling.value.toLowerCase();
      for (let i=0; i < data.length; i++) {
         let currentStudent = `${data[i].name.first.toLowerCase()} ${data[i].name.last.toLowerCase()}`;
         if (currentStudent.includes(userInput)) {
            studentSearch.push(data[i]);
         }
      }

      if (studentSearch.length > 0) {
         showpage(studentSearch, 1);
         addPagination(studentSearch);
      } else {
         studentUl.innerHTML = `<h3>No results found</h3>`;
         paginationUl.innerHTML = '';
      }
});


// Call functions
showpage(data, 1);
addPagination(data);
