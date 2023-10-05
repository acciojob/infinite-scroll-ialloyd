//your code here!
// Create initial list items
for(let i = 0; i < 10; i++) {
    let listItem = document.createElement('li');
    listItem.textContent = `Item ${i+1}`;
    document.querySelector('#infi-list').appendChild(listItem);
}

// Function to add new list items
function addItems() {
    let currentItems = document.querySelectorAll('li').length;
    for(let i = currentItems; i < currentItems + 2; i++) {
        let listItem = document.createElement('li');
        listItem.textContent = `Item ${i+1}`;
        document.querySelector('#infi-list').appendChild(listItem);
    }
}

let listElement = document.querySelector('#infi-list');

listElement.addEventListener('scroll', function() {
    let d = listElement;
    let offset = d.scrollTop + d.clientHeight;
    let height = d.scrollHeight;

    if (offset >= height) {
        addItems();
    }
});

