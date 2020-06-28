export function menu() {
  const para = document.querySelector('p');
  para.innerHTML = `
  <div class="menu">
      <div class="card">
      <img src="burger.gif" alt="" class="card-img">
      <p class="card-text">lafdjshnkslajblbk</p>
    </div>
    <div class="card">
      <img src="burger.gif" alt="" class="card-img">
      <p class="card-text">lafdjshnkslajblbk</p>
    </div>
    <div class="card">
      <img src="burger.gif" alt="" class="card-img">
      <p class="card-text">lafdjshnkslajblbk</p>
    </div>
  </div>`;

  let listItems = document.querySelectorAll('li');
  console.log(listItems);
}
