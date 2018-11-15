
let button = document.getElementById('button');
let addFave = function(e) {
  console.log('event: ', e);
}

button.addEventListener('click', function(event) {
  addFave(event);
});
