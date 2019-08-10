export default (text = 'Hello Ghaeda') => {
    const element = document.createElement('div');
    
    element.innerHTML = text;
    return element;
}
