
let button = document.getElementById('button');

let addFave = function(e) {
  let faveBox = document.getElementById('fave-box');
  let siteName = document.getElementById('site-name');

  let siteUrl = document.getElementById('site-url');
  let url = siteUrl.value;
  
  let name = siteName.value;
  let outerDiv = document.createElement('div');
  outerDiv.className = 'fave';
  let newH4 = document.createElement('h4');
  newH4.textContent = name;
  outerDiv.append(newH4);

  let innerDiv = document.createElement('div');
  innerDiv.className = 'btn-wrap';

  let visitButton = document.createElement('button');
  visitButton.textContent = 'Visit';
  visitButton.addEventListener('click', function() {
    // window.open(url);

  });

  let deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', function() {
    outerDiv.remove();
  });

  innerDiv.append(visitButton);
  innerDiv.append(deleteButton);

  outerDiv.append(innerDiv);
  faveBox.append(outerDiv);
}

button.addEventListener('click', function(event) {
  addFave(event);
});
