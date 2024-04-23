let ruchGracza = 'X';
let koniecGry = false;
let stanGry = ['', '', '', '', '', '', '', '', ''];

function ruch(element, pozycja) {
    if(koniecGry || stanGry[pozycja] || element.classList.contains('X') || element.classList.contains('O')) return;
  
    stanGry[pozycja] = ruchGracza;
    element.innerText = ruchGracza;
    element.classList.add(ruchGracza); // Dodaje klasę do elementu dla stylizacji
  
    if(sprawdzWygrana()) {
      document.getElementById('wynik').innerText = `Gracz ${ruchGracza} wygrał!`;
      koniecGry = true;
      return;
    } else if(stanGry.indexOf('') === -1) {
      document.getElementById('wynik').innerText = 'Remis!';
      koniecGry = true;
      return;
    }
  
    ruchGracza = ruchGracza === 'X' ? 'O' : 'X';
  }
  

function sprawdzWygrana() {
  const linieWygrane = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // linie poziome
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // linie pionowe
    [0, 4, 8], [2, 4, 6] // przekątne
  ];

  for(const linia of linieWygrane) {
    const [a, b, c] = linia;
    if(stanGry[a] && stanGry[a] === stanGry[b] && stanGry[a] === stanGry[c]) {
      return true;
    }
  }

  return false;
}
