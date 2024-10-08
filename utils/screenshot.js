function getScreenshot() {
  html2canvas(document.getElementById("game")).then((canvas) => {
    var link = document.createElement("a");
    link.download = "screenshot.png";
    link.href = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    link.click();
  });
}
