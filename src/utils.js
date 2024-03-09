export const wordFilter = (text) => {
  let warning = "";
switch (true) {
    case text.includes("<script>"):
        warning = "No scripts allowed";
        text = text.replace("<script>", "");
        break;
    case text.includes("@"):
        warning = "No emails allowed";
        text = text.replace("@", "");
        break;
    case text.includes("document.getElementById"):
        warning = "No getElementById allowed";
        text = text.replace("document.getElementById", "");
        break;
    default:
        warning = "";
        break;
}

  return { text, warning };
};
