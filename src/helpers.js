function choice(items) {
    let i = (Math.floor(Math.random() * items.length));
    return items[i];
}

function remove(items, item) {
    const newFruits = [];
    for (let i = 0; i < items.length; i++) {
        if (items[i] !== item) {
            newFruits.push(items[i]);
        }
    }
    return newFruits;
}

export { choice, remove };