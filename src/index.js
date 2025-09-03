module.exports = button;

const sheet = new CSSStyleSheet();
const theme = get_theme();
sheet.replaceSync(theme);

function button() {
  const el = document.createElement("div");
  const shadow = el.attachShadow({ mode: "closed" });
  shadow.innerHTML = "<button>Click me</button>";

  shadow.adoptedStyleSheets = [sheet];

  // Step 4: Add the Logic (JavaScript) here!
  // 1. Find the button element within the shadow DOM
  const myButton = shadow.querySelector("button");

  // 2. Define the action and connect it to the 'click' event
  myButton.addEventListener("click", () => {
    // This is where your logic goes.
    // For example, you could log a message to the console.
    console.log("Button was clicked from inside the component!");
  });

  return el;
}

function get_theme() {
  return `
        input {
            display: inline-block;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
            background-color: #f9f9f9;
            color: #333;
        }
        button {
            padding: 8px 16px;
            border: none;
            border-radius: 4px;
            background-color: #007bff;
            color: #fff;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
    `;
}
