export function getStoreState(comp) {
    const {store} = comp.context;
    return store.getState();
}