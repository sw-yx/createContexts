# createContexts

a really small library for a better react context API

<details>
<summary>
The Problem this solves
</summary>

```js
const Context1 = createContext();
const Context2 = createContext();
const Context3 = createContext();

function App() {
  return (
    <Context1.Provider value={1}>
      <Context2.Provider value={2}>
        <Context3.Provider value={3}>
          <FooBar />
        </Context3.Provider>
      </Context2.Provider>
    </Context1.Provider>
  );
}
```

gross.

</details>

## API

There's only one export. you can name it whatever you like, and you can give any positive integer.

More tests and runtime checks may be needed, and we could explore a babel macros version of this.

```js
import createContexts from '@swyx/createcontexts';

export const [Provider, Context1, Context2, Context3] = createContexts(3);

function App() {
  return (
    <Provider values={['a', 'b', 'c']}>
      <FooBar />
    </Provider>
  );
}

// use Context1, Context2, Context3 elsewhere
```
