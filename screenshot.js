function getScreenshot() {
  const gameElement = document.getElementById("game");

  html2canvas(gameElement, {
    scale: 2,
    useCORS: true,
    willReadFrequently: true,
  })
    .then((canvas) => {
      var link = document.createElement("a");
      link.download = "screenshot.png";
      link.href = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      link.click();
    })
    .catch((error) => {
      console.error("Error capturing screenshot:", error);
    });
}
