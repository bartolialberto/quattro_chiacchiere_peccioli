document.addEventListener('DOMContentLoaded', function() {
  var headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

  // Create a new div element for the TOC
  var tocContainer = document.getElementById('toc');
  var tocList = document.createElement('ul');

  // Iterate through each heading and create TOC items
  headings.forEach(function(heading, index) {
    var tocItem = document.createElement('li');
    var link = document.createElement('a');
    link.textContent = heading.textContent;

    // Generate a unique ID for the heading if it doesn't have one
    if (!heading.id) {
      heading.id = 'heading_' + index;
    }

    link.href = '#' + heading.id;

    tocItem.appendChild(link);

    // Add class 'h2' to the li if the heading is an h2
    if (heading.tagName.toLowerCase() === 'h2') {
      tocItem.classList.add('h2');
    }

    tocList.appendChild(tocItem);
  });

  // Append the TOC to the container
  tocContainer.appendChild(tocList);
});

// Scroll to Top Function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
