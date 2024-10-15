var zdjecia = [
    ['obraz1.jpg', 'Ściana', 'Ściana, na której są obrazy w ramkach.'],
    ['obraz2.jpg', 'Książki', 'Stosy książek.'],
    ['obraz3.jpg', 'Stół', 'Stół z różnymi rzeczami na nim.'],
];

var currentIndex = 0;

function laduj() {
    zmien(0);
}

function zmien(id) {
    currentIndex = id;
    document.getElementById('zdjecie').innerHTML = '<img src="' + zdjecia[id][0] + '" />';
    document.getElementById('informacje').innerHTML = '<b>' + zdjecia[id][1] + '</b><br><i>' + zdjecia[id][2] + '</i>';
}

function nastepneZdjecie() {
    currentIndex = (currentIndex + 1) % zdjecia.length;
    zmien(currentIndex);
}

function poprzednieZdjecie() {
    currentIndex = (currentIndex - 1) % zdjecia.length;
    zmien(currentIndex);
}

window.onload = laduj;