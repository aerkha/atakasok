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

  function speakText() {
   alert("Audionya belum nemu yang bagus gaes, tunggu ya");
  }
