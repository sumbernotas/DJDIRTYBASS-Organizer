function checkPassword() {
    const correctPassword = "teamdirtybass";
    const userInput = document.getElementById("passwordInput").value;

    if (userInput === correctPassword) {
        window.location.href = "songs.html"; // success
    } else {
        document.getElementById("errorMsg").textContent = "INCORRECT PASSWORD :("; // failure
    }
}

const searchBar = document.getElementById("searchBar");
const songList = document.getElementById("songList");
const songs = songList.getElementsByTagName("li");

searchBar.addEventListener("keyup", () => {
  const term = searchBar.value.toLowerCase();
  for (let song of songs) {
    const text = song.textContent.toLowerCase();
    song.style.display = text.includes(term) ? "" : "none";
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('songList');
  const items = Array.from(list.getElementsByTagName('li'));

  const sortedItems = items.sort((a, b) => 
    a.textContent.localeCompare(b.textContent)
  );

  // Clear current list
  list.innerHTML = '';

  // Append sorted items
  sortedItems.forEach(item => list.appendChild(item));
});