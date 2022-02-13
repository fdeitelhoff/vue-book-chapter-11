const logPlugin = (store) => {
  store.subscribe((mutation, state) => {
    console.log('mutation logged', mutation, state);
  });
};

export default logPlugin;
