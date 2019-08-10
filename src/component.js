export default (text = 'Hello Ghaeda Mazaya Zharifatucordova') => {
    const element = document.createElement('div');
    
    element.innerHTML = text;
    return element;
}
