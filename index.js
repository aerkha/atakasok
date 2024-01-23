  let currentPage = 0;
  let linesPerPage = 20;
  let contentArray = [];

  function openBook(filePath) {
    // Fetch content from the file
    fetch(filePath)
      .then(response => response.text())
      .then(data => {
        // Split the content into an array of lines
        contentArray = data.split(',');
        // Display the first page
        updateModalContent();
        // Show the modal
        $('#multiPagesModal').modal('show');
      })
      .catch(error => console.error('Error:', error));
  }

  function updateModalContent() {
    // Calculate the start and end indices for the current page
    const startIndex = currentPage * linesPerPage;
    const endIndex = startIndex + linesPerPage;

    // Extract the lines for the current page
    const currentPageContent = contentArray.slice(startIndex, endIndex);

    // Calculate the number of lines per column
    const linesPerColumn = linesPerPage / 1;

    // Extract lines for each column
    const column1Content = currentPageContent.slice(0, linesPerColumn);
    const column2Content = currentPageContent.slice(linesPerColumn);

    // Join the lines and update the modal content
    const modalContentElement = document.getElementById('modalContent');
    modalContentElement.innerHTML = `<div class="column">${column1Content.join('<br>')}</div><div class="column">${column2Content.join('<br>')}</div>`;

    // Update page information
    const totalPages = Math.ceil(contentArray.length / linesPerPage);
    const pageInformation = `Halaman ${currentPage + 1} dari ${totalPages}`;
    const modalTitleElement = document.getElementById('modalTitle');
    modalTitleElement.textContent = `${pageInformation}`;
  }

  function previousPage() {
    if (currentPage > 0) {
      currentPage--;
      updateModalContent();
    }
  }

  function nextPage() {
    const totalPages = Math.ceil(contentArray.length / linesPerPage);
    if (currentPage < totalPages - 1) {
      currentPage++;
      updateModalContent();
    }
  }

  function speakText(index = 0) {
    alert("Audionya belum nemu yang bagus gaes, tunggu ya");
  }

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0AZhoPi4iuxSli9HTlu0Ynto_CL0iv5o",
  authDomain: "kosakata-389e4.firebaseapp.com",
  projectId: "kosakata-389e4",
  storageBucket: "kosakata-389e4.appspot.com",
  messagingSenderId: "576416539595",
  appId: "1:576416539595:web:ebb300ce2cfafee1794c4e",
  measurementId: "G-LT6YDPRM6C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);