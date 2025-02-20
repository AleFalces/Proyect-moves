document
  .getElementById("movieForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;
    const selectedGenres = Array.from(
      document.querySelectorAll(".genre:checked")
    ).map((input) => input.value);

    function showError(id, condition) {
      const errorElement = document.getElementById(id);
      if (condition) {
        errorElement.style.display = "block";
        isValid = false;
      } else {
        errorElement.style.display = "none";
      }
    }

    showError(
      "error-title",
      document.getElementById("title").value.trim() === ""
    );
    showError(
      "error-rate",
      isNaN(parseFloat(document.getElementById("rate").value)) ||
        document.getElementById("rate").value < 0 ||
        document.getElementById("rate").value > 10
    );
    showError(
      "error-director",
      document.getElementById("director").value.trim() === ""
    );
    showError("error-genre", selectedGenres.length === 0);
    showError(
      "error-poster",
      document.getElementById("poster").value.trim() === "" ||
        !document.getElementById("poster").value.startsWith("http")
    );
    showError(
      "error-duration",
      document.getElementById("duration").value.trim() === ""
    );
    showError(
      "error-year",
      isNaN(parseInt(document.getElementById("year").value)) ||
        document.getElementById("year").value < 1800 ||
        document.getElementById("year").value > new Date().getFullYear()
    );

    if (!isValid) return;

    const movie = {
      title: document.getElementById("title").value,
      rate: parseFloat(document.getElementById("rate").value),
      director: document.getElementById("director").value,
      genre: selectedGenres,
      poster: document.getElementById("poster").value,
      duration: document.getElementById("duration").value,
      year: parseInt(document.getElementById("year").value),
    };

    axios
      .post("http://localhost:3000/movies/newmovie", movie)
      .then((response) =>
        alert("Película agregada con éxito: " + JSON.stringify(response.data))
      )
      .catch((error) => alert("Error al enviar la película: " + error));
  });
