export function contact() {
  const para = document.querySelector('p');
  para.innerHTML = `
  <form>
  <label for="name">Name:</label>
  <input type="text" name="name" id="name" /><br>
  <label for="contact">Contact Number:</label>
  <input type="tel" name="contact" id="contact" /><br>
  <label for="feedback">Your feedback here:</label>
  <div>
  <textarea id="feedback" name="feedback" rows="12"></textarea>
  </div>
  </form>`;
}
