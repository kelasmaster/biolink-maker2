// Add new link input field
document.getElementById("add-link").addEventListener("click", function() {
  const linkContainer = document.getElementById("link-container");
  const newLinkItem = document.createElement("div");
  newLinkItem.classList.add("link-item");
  newLinkItem.innerHTML = `<input type="text" class="link-url" placeholder="https://example.com">
<button class="remove-link">Remove</button>`;
  linkContainer.appendChild(newLinkItem);

  // Remove link functionality
  newLinkItem.querySelector(".remove-link").addEventListener("click", function() {
    newLinkItem.remove();
  });
});

// Generate Biolink preview and source code
function generateBiolink() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const linkUrls = Array.from(document.getElementsByClassName("link-url")).map(input => input.value).filter(url => url);

  const previewContainer = document.getElementById("biolink-preview");
  previewContainer.innerHTML = `
    <h3>title</h3>
    <p>{description}</p>
    <div class="links-list">
      linkUrls.map(url => <a href="{url}" target="_blank">url</a>).join("<br>")
    </div>
  `;

  // Generate source code
  const sourceCode = `
    <html>
      <head>
        <title>{title}</title>
      </head>
      <body>
        <h1>title</h1>
        <p>{description}</p>
        <div>
          linkUrls.map(url => <a href="{url}" target="_blank">${url}</a><br>).join('')}
        </div>
      </body>
    </html>
  `;
  document.getElementById("source-code").value = sourceCode;
}

// Copy source code to clipboard
function copySourceCode() {
  const sourceCodeTextArea = document.getElementById("source-code");
  sourceCodeTextArea.select();
  document.execCommand("copy");
  alert("Source code copied to clipboard!");
}
