
let button = document.getElementById('button');
let addFave = function(e) {
  let siteName = document.getElementById('site-name');
  let siteUrl = document.getElementById('site-url');
  let name = siteName.value;
  let url = siteUrl.value;
  console.log('url: ', url);
  console.log('Name: ', name);
}

button.addEventListener('click', function(event) {
  addFave(event);
});
