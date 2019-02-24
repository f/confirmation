const blessed = require("blessed");

const shortcut = text => text.match(/\[?(\w)\]?/)[1].toLowerCase();
const shortcutifyText = text => {
  const key = shortcut(text);
  return text.replace(
    new RegExp(key, "i"),
    `{underline}${key.toUpperCase()}{/underline}`
  );
};

function confirm(title, message, okText = "[Y] OK", cancelText = "[N] Cancel") {
  if (!message) {
    message = title;
    title = '';
  }
  var screen = blessed.screen({
    smartCSR: true,
    title: title || message,
    fullUnicode: true
  });

  var form = blessed.form({
    keys: true,
    top: "center",
    left: "center",
    width: "50%",
    height: "shrink",
    content: `${title ? `{bold}${title}{/bold}\n\n` : ''}${message}\n\n\n`,
    tags: true,
    border: {
      type: "bg"
    },
    padding: { left: 2, right: 2, top: 1, bottom: 1 },
    style: {
      bg: "#cccccc",
      fg: "black",
      border: {
        fg: "red"
      }
    }
  });

  var submit = blessed.button({
    parent: form,
    mouse: true,
    keys: true,
    shrink: true,
    tags: true,
    right: 0,
    bottom: 0,
    name: "submit",
    content: shortcutifyText(okText),
    padding: { left: 2, right: 2, top: 1, bottom: 1 },
    style: {
      bg: "green",
      focus: { bg: "cyan" },
      hover: { bg: "cyan" }
    }
  });

  var cancel = blessed.button({
    parent: form,
    mouse: true,
    keys: true,
    shrink: true,
    tags: true,
    right:
      submit.content.length +
      submit.padding.left +
      submit.padding.right +
      1 -
      "{underline}{/underline}".length,
    bottom: 0,
    name: "cancel",
    content: shortcutifyText(cancelText),
    padding: { left: 2, right: 2, top: 1, bottom: 1 },
    style: {
      bg: "red",
      focus: { bg: "cyan" },
      hover: { bg: "cyan" }
    }
  });

  const makeDecision = (resolver, value) => {
    screen.destroy();
    resolver(value);
  };

  return new Promise(resolve => {
    submit.on("press", () => makeDecision(resolve, true));
    cancel.on("press", () => makeDecision(resolve, false));
    screen.key([shortcut(okText)], () => makeDecision(resolve, true));
    screen.key([shortcut(cancelText)], () => makeDecision(resolve, false));
    screen.key(["escape", "q", "C-c"], () => makeDecision(resolve, false));
    screen.append(form);
    form.focus();
    screen.render();
  });
}

module.exports = confirm;
