function buildTOC() {

  var headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

  // Create a new div element for the TOC
  var tocContainer = document.getElementById('toc');
  var tocList = document.createElement('ul');

  // Iterate through each heading and create TOC items
  headings.forEach(function (heading, index) {
    var tocItem = document.createElement('li');
    var link = document.createElement('a');
    link.textContent = heading.textContent;

    // Generate a unique ID for the heading if it doesn't have one
    if (!heading.id) {
      heading.id = 'heading_' + index;
    }

    // link.href = '#' + heading.id + '\" onclick=\"toggleToc(event)';
    link.onclick = function () {
      scrollToSection('#'+heading.id);
    };

    tocItem.appendChild(link);

    // Add class 'h2' to the li if the heading is an h2
    if (heading.tagName.toLowerCase() === 'h2') {
      tocItem.classList.add('h2');
    }

    tocList.appendChild(tocItem);
  });

  // Append the TOC to the container
  tocContainer.appendChild(tocList);
}

function loadExternalContent(f) {
  fetch(f)
    .then(response => response.text())
    .then(html => {
      // Inject the loaded HTML into the content container
      document.getElementById('content').innerHTML = html;

      // After the content is loaded, build the TOC
      buildTOC();
    })
    .catch(error => console.error('Error loading external content:', error));
}

function toggleTOC() {
  var toc = document.getElementById("toc");
  toc.style.display = (toc.style.display === "none" || toc.style.display === "") ? "block" : "none";
}

function scrollToSection(sectionId) {
  var targetSection = document.querySelector(sectionId);
  if (targetSection) {
    window.scrollTo({
      top: targetSection.offsetTop - document.getElementById("top-bar").offsetHeight,
      behavior: "smooth"
    });
  }
  document.getElementById("toc").style.display = "none";
}
