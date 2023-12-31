// Get the container element where you want to append the table of contents
var container = document.getElementById("toc");

// Create a heading element for the table of contents
var heading = document.createElement("h3");
heading.textContent = "Table of Contents";
container.appendChild(heading);

// Create an ordered list element for the table of contents items
var list = document.createElement("ol");
container.appendChild(list);

// Get all the headings (H1 and H2) in your html file
var headings = document.querySelectorAll("h1, h2");

// Loop through each heading and create a list item with a link
for (var i = 0; i < headings.length; i++) {
  var heading = headings[i];

  // Generate a unique id for each heading
  var id = "heading-" + i;

  // Set the id attribute of the heading
  heading.setAttribute("id", id);

  // Create a list item element
  var item = document.createElement("li");

  // Create a link element
  var link = document.createElement("a");

  // Set the href attribute of the link to the id of the heading
  link.setAttribute("href", "#" + id);

  // Set the text content of the link to the text of the heading
  link.textContent = heading.textContent;

  // Append the link to the list item
  item.appendChild(link);

  // Append the list item to the list
  list.appendChild(item);
}
