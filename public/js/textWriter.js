const textAnim = document.querySelector(".title_heading");
new Typewriter(textAnim, {
  loop: true,
  deleteSpeed: 0,
})
  .typeString(
    "Votre agence totalement <span class='blue_word_heading'>agile</span> et à <span class='blue_word_heading'>l'écoute</span>"
  )
  .pauseFor(500)
  .deleteChars(43)
  .typeString(
    "Votre agence totalement <span class='blue_word_heading'>Scrum</span> et à <span class='blue_word_heading'>l'écoute</span>"
  )
  .pauseFor(500)
  .deleteChars(43)
  .typeString(
    "Votre agence totalement <span class='blue_word_heading'>Kaban</span> et à <span class='blue_word_heading'>l'écoute</span>"
  )
  .pauseFor(1000)
  .start();
