import React from 'react';

export default function createContexts(numContexts) {
  if (!numContexts) throw new Error('pls specify how many contexts');
  const contexts = Array(numContexts)
    .fill(React.createContext)
    .map(x => x());
  function Provider({ children, values }) {
    return React.createElement(InternalProvider, {
      values: values,
      children: children,
      contexts: contexts
    });
  }
  return [Provider, ...contexts];
}

function InternalProvider(props) {
  const { contexts, values, children } = props;
  const [MyContext, ...remainingContexts] = contexts;
  const [MyValue, ...remainingValues] = values;
  const isLastContext = !remainingContexts.length;
  return React.createElement(
    MyContext.Provider,
    { value: MyValue },
    isLastContext
      ? props.children
      : React.createElement(InternalProvider, {
          contexts: remainingContexts,
          values: remainingValues,
          children: props.children
        })
  );
}
