export function home() {
  const content = document.getElementById('content');
  content.innerHTML = `
      <h1>Hinata</h1>
      <main>
        <ul>
          <li class="active">About</li>
          <li>Menu</li>
          <li>Contact</li>
        </ul>
        <p></p>
      </main>`;
}
