# ⁉️ confirmation

A simple Node tool to have Browser's `confirm` popup on your CLI.

![confirmation](resources/confirmation.png?v1)

## Installation

```
yarn add confirmation
```

## Usage

```js
if (await confirmation('Are you sure?')) {
  console.log('Yay!');
} else {
  console.log('Oops!');
}
```

## API

### `confirmation(message) : bool`

Shows a message and `OK` and `Cancel` buttons.

_Example_:
```js
const result = await confirmation('You will delete your items, are you sure?')
```

### `confirmation(title, message) : bool`

Shows a message with a title and `OK` and `Cancel` buttons.

_Example_:
```js
const result = await confirmation('Warning', 'You will delete your items, are you sure?')
```

### `confirmation(title, message, ok, cancel) : bool`

Shows a message with a title and custom `OK` and custom `Cancel` buttons.

_Example_:
```js
const result = await confirmation(
  'Warning',
  'You will delete your items, are you sure?',
  'I am sure',
  'No!'
)
```

## The Key bindings

The <kbd>O</kbd> for **_O_K** and <kbd>C</kbd> for **_C_ancel** are the default key bindings.

When you customize your **OK** and **Cancel** buttons, the **first letter** will be the key binding. If you make **I am Sure** instead of **OK**, you'll need to press <kbd>I</kbd> to confirm.

## License
MIT &copy; Fatih Kadir Akin