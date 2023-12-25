/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
const studentsPerPage = 9;


/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showpage(list, page) {
   let startIndex = (page * studentsPerPage) - studentsPerPage;
   let endIndex = page * studentsPerPage;

   const ul = document.querySelector('.student-list');
   ul.innerHTML = '';

   for (let i=1; i <= list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         let student = `<li class="student-item cf">
                           <div class="student-details">
                           <img class="avatar" src=${data[i].picture.medium} alt="Profile Picture">
                           <h3>${data[i].name.first} ${data[i].name.last}</h3>
                           <span class="email">${data[i].email}</span>
                           </div>
                           <div class="joined-details">
                           <span class="date">Joined ${data[i].registered.date}</span>
                           </div>
                        </li>`;
         ul.insertAdjacentHTML("beforeend", student);
      }
   }
}
showpage(data, 1);

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {

}


// Call functions
