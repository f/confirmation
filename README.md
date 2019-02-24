# ⁉️ confirmation

A simple Node tool to have Browser's `confirm` popup on your CLI.

![confirmation](resources/demo.gif?v1)

## Installation

```
yarn add confirmation
```

## Usage

In an `async` function just call `await confirmation`.

```js
if (await confirmation('Are you sure?')) {
  console.log('Yay!');
} else {
  console.log('Oops!');
}
```

![confirmation](resources/confirmation.png?v1)

## API

### `await confirmation(message) : bool`

Shows a message and `OK` and `Cancel` buttons.

_Example_:
```js
const result = await confirmation('You will delete your items, are you sure?')
```

### `await confirmation(title, message) : bool`

Shows a message with a title and `OK` and `Cancel` buttons.

_Example_:
```js
const result = await confirmation('Warning', 'You will delete your items, are you sure?')
```

### `await confirmation(title, message, ok, cancel) : bool`

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

The <kbd>Y</kbd> for **OK** and <kbd>N</kbd> for **Cancel** are the default key bindings.

When you customize your **OK** and **Cancel** buttons, the **first letter** will be the key binding. If you make **I am Sure** instead of **OK**, you'll need to press <kbd>I</kbd> to confirm.

### Example 1
_Example_:
```js
const result = await confirmation(
  'Warning',
  'You will delete your items, are you sure?',
  '[O] OK',
  '[X] Close'
)
```
Keymap:
- <kbd>O</kbd> to Confirm
- <kbd>X</kbd> to Close

### Example 2
_Example_:
```js
const result = await confirmation(
  'Warnin\'',
  'Ye will scuttle yer items, are ye sure?',
  'Aye',
  'No'
)
```
Keymap:
- <kbd>A</kbd> (_A_ye) to Confirm
- <kbd>N</kbd> (_N_o) to Close

## License
MIT &copy; Fatih Kadir Akin
