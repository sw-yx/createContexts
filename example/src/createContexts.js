import React from 'react';

export default function createContexts(numContexts) {
  if (!numContexts) throw new Error('pls specify how many contexts');
  const contexts = Array(numContexts)
    .fill(React.createContext)
    .map(x => x());
  function Provider({ children, values }) {
    return (
      <InternalProvider
        values={values}
        children={children}
        contexts={contexts}
      />
    );
  }
  return [Provider, ...contexts];
}

function InternalProvider(props) {
  console.log({ props });
  const { contexts, values, children } = props;
  const [MyContext, ...remainingContexts] = contexts;
  const [MyValue, ...remainingValues] = values;
  const isLastContext = !remainingContexts.length;
  return (
    <MyContext.Provider value={MyValue}>
      {isLastContext ? (
        props.children
      ) : (
        <InternalProvider
          contexts={remainingContexts}
          values={remainingValues}
          children={props.children}
        />
      )}
    </MyContext.Provider>
  );
}
