/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
const paginationUl = document.querySelector('.link-list');
const studentsPerPage = 9;

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
      if (i >= startIndex && i <= endIndex) {
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


/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
 const numOfPages = Math.ceil(list.length / studentsPerPage);
 paginationUl.innerHTML = '';

 for (let i=1; i <= numOfPages; i++) {
   let button = `<li><button type="button">${[i]}</button></li>`;
   paginationUl.insertAdjacentHTML('beforeend', button);
   if (button.textContent === '1') {
      button.classList.add('active');
   }
   
 }
}


paginationUl.addEventListener('click', (e) => {
   const activeButton = paginationUl.querySelector(".active");
   const buttonClicked = e.target.closest("button");
   let pageNumber = buttonClicked.textContent;

   if (buttonClicked) {
      activeButton.classList.remove('active');
      buttonClicked.classList.add('active');
      showpage(data, pageNumber);
   }
})


// Call functions
showpage(data, 1);
addPagination(data);
