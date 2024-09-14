const terminalContent = document.getElementById("terminal-content");

function executeCommand(command) {
  switch (command.toLowerCase()) {
    case "whoami":
      window.location.href = "/whoami";
      break;
    case "projects":
      window.location.href = "/projects";
      break;
    case "skills":
      window.location.href = "/skills";
      break;
    case "contact":
      window.location.href = "/contact";
      break;
    case "":
    case "home":
      window.location.href = "/";
      break;
    default:
      terminalContent.innerHTML += `\nCommand not found: ${command}`;
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const input = event.target.value.trim();
    executeCommand(input);
    event.target.value = ""; // Clear input
  }
});
