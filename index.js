const cardOne = document.querySelector('.cardOne');
const cardTwo = document.querySelector('.cardTwo');

cardOne.addEventListener('mouseover', function (e) {
  this.classList.remove('scaleout');
  this.classList.add('scalein');
});

cardOne.addEventListener('mouseout', function (e) {
  this.classList.remove('scalein');
  this.classList.add('scaleout');
});

cardTwo.addEventListener('mouseover', function (e) {
  this.classList.remove('rotateout');
  this.classList.add('rotatein');
});

cardTwo.addEventListener('mouseout', function (e) {
  this.classList.remove('rotatein');
  this.classList.add('rotateout');
});
