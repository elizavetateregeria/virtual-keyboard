document.addEventListener('DOMContentLoaded', () => {
  const { body } = document;

  class Keyboard {
    constructor(className, parent) {
      this.className = className;
      this.parent = parent;
    }

    render() {
      const element = document.createElement('div');
      element.classList.add(this.className);
      this.parent.prepend(element);
    }
  }

  const myKeyboard = new Keyboard('keyboard', body);
  myKeyboard.render();
  const keyboard = document.querySelector('.keyboard');

  const keys = [
    {
      text: '`', code: 'Backquote',
    },
    {
      text: '1', code: 'Digit1',
    },
    {
      text: '2', code: 'Digit2',
    },
    {
      text: '3', code: 'Digit3',
    },
    {
      text: '4', code: 'Digit4',
    },
    {
      text: '5', code: 'Digit5',
    },
    {
      text: '6', code: 'Digit6',
    },
    {
      text: '7', code: 'Digit7',
    },
    {
      text: '8', code: 'Digit8',
    },
    {
      text: '9', code: 'Digit9',
    },
    {
      text: '0', code: 'Digit0',
    },
    {
      text: '-', code: 'Minus',
    },
    {
      text: '=', code: 'Equal',
    },
    {
      text: 'Backspace', code: 'Backspace',
    },
    {
      text: 'Tab', code: 'Tab',
    },
    {
      text: 'q', code: 'KeyQ',
    },
    {
      text: 'w', code: 'KeyW',
    },
    {
      text: 'e', code: 'KeyE',
    },
    {
      text: 'r', code: 'KeyR',
    },
    {
      text: 't', code: 'KeyT',
    },
    {
      text: 'y', code: 'KeyY',
    },
    {
      text: 'u', code: 'KeyU',
    },
    {
      text: 'i', code: 'KeyI',
    },
    {
      text: 'o', code: 'KeyO',
    },
    {
      text: 'p', code: 'KeyP',
    },
    {
      text: '[', code: 'BracketLeft',
    },
    {
      text: ']', code: 'BracketRight',
    },
    {
      text: '\\', code: 'Backslash',
    },
    {
      text: 'Del', code: 'Delete',
    },
    {
      text: 'CapsLock', code: 'CapsLock',
    },
    {
      text: 'a', code: 'KeyA',
    },
    {
      text: 's', code: 'KeyS',
    },
    {
      text: 'd', code: 'KeyD',
    },
    {
      text: 'f', code: 'KeyF',
    },
    {
      text: 'g', code: 'KeyG',
    },
    {
      text: 'h', code: 'KeyH',
    },
    {
      text: 'j', code: 'KeyJ',
    },
    {
      text: 'k', code: 'KeyK',
    },
    {
      text: 'l', code: 'KeyL',
    },
    {
      text: ';', code: 'Semicolon',
    },
    {
      text: '\'', code: 'Quote',
    },
    {
      text: 'Enter', code: 'Enter',
    },
    {
      text: 'Shift', code: 'ShiftLeft',
    },
    {
      text: 'z', code: 'KeyZ',
    },
    {
      text: 'x', code: 'KeyX',
    },
    {
      text: 'c', code: 'KeyC',
    },
    {
      text: 'v', code: 'KeyV',
    },
    {
      text: 'b', code: 'KeyB',
    },
    {
      text: 'n', code: 'KeyN',
    },
    {
      text: 'm', code: 'KeyM',
    },
    {
      text: ',', code: 'Comma',
    },
    {
      text: '.', code: 'Period',
    },
    {
      text: '/', code: 'Slash',
    },
    {
      text: '▲', code: 'ArrowUp',
    },
    {
      text: 'Shift', code: 'ShiftRight',
    },
    {
      text: 'Ctrl', code: 'ControlLeft',
    },
    {
      text: 'Win', code: 'MetaLeft',
    },
    {
      text: 'Alt', code: 'AltLeft',
    },
    {
      text: '', code: 'Space',
    },
    {
      text: 'Alt', code: 'AltRight',
    },
    {
      text: '◄', code: 'ArrowLeft',
    },
    {
      text: '▼', code: 'ArrowDown',
    },
    {
      text: '►', code: 'ArrowRight',
    },
    {
      text: 'Ctrl', code: 'ControlRight',
    },
  ];

  function createKeys() {
    const keysFragment = document.createDocumentFragment();

    keys.forEach(({ text, code }, index) => {
      const keyElement = document.createElement('button');
      keyElement.classList.add('key');
      keyElement.textContent = text;
      keyElement.setAttribute('data-key-code', code);

      if (['Backspace', 'Tab', 'CapsLock', 'Enter', 'Shift', 'Ctrl', 'Win', 'Alt', 'Del'].indexOf(text) !== -1) {
        keyElement.classList.add(`key--${text.toLowerCase()}`);
        if (index === keys.findIndex((el) => el.text === 'Shift') || index === keys.findIndex((el) => el.text === 'Ctrl')) {
          keyElement.classList.add(`key--${text.toLowerCase()}-left`);
        }
      } else if (text === '') {
        keyElement.classList.add('key--spacebar');
      } else if (['◄', '▼', '►', '▲'].indexOf(text) !== -1) {
        keyElement.classList.add('key--arrow');
        switch (text) {
          case '◄':
            keyElement.classList.add('key--arrow-right');
            break;
          case '▼':
            keyElement.classList.add('key--arrow-down');
            break;
          case '►':
            keyElement.classList.add('key--arrow-left');
            break;
          case '▲':
            keyElement.classList.add('key--arrow-up');
            break;
          default:
        }
      } else {
        keyElement.classList.add('key--general');
        keyElement.textContent = text;
      }
      keysFragment.append(keyElement);
    });
    return keysFragment;
  }

  keyboard.append(createKeys());

  window.addEventListener('keydown', (e) => {
    e.preventDefault();
    if (keys.find((el) => el.code === e.code)) {
      document.querySelector(`[data-key-code="${e.code}"]`).classList.add('active');
    }
  });

  window.addEventListener('keyup', ({ code }) => {
    if (keys.find((el) => el.code === code)) {
      document.querySelector(`[data-key-code="${code}"]`).classList.remove('active');
    }
  });
});
