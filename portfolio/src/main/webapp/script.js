/**
 * Adds a random greeting to the page.
 */
function addRandomFunFact() {
    const fun1 = "I'm a big fan of Marvel and DC!";
    const fun2 = "I enjoy various of sports and traveling"
    const fun3 = "I love drawings and calligraphy"
    const fun4 = "I love to try new things and meet with new people"
    const fun5 = "Welcome to contact me anything to have some random chat!"
    const greetings =
        [fun1, fun2, fun3, fun4, fun5];
  
    // Pick a random greeting.
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  
    // Add it to the page.
    const greetingContainer = document.getElementById('greeting-container');
    greetingContainer.innerText = greeting;
  }
  
async function showServerTime() {
    const responseFromServer = await fetch('/date');
    const textFromResponse = await responseFromServer.text();

    const dateContainer = document.getElementById('date-container');
    dateContainer.innerText = textFromResponse;
}

async function myRespond() {
    const responseFromServer = await fetch('/information');
    const textFromResponse = await responseFromServer.json();

    const infoContainer = document.getElementById('info-container');
    const random_ind = Math.floor(Math.random() * Object.keys(textFromResponse).length);
    const info_keys = Object.keys(textFromResponse);
    var info_choose = info_keys[random_ind];
    infoContainer.innerText = textFromResponse[info_choose];
}

function loadContacts() {
    fetch('/contact').then(response => response.json()).then((contacts) => {
      const contactListElement = document.getElementById('contact-list');
      contacts.forEach((contact) => {
        contactListElement.appendChild(createContactsElement(contact));
      })
    });
}

function createContactsElement(contact) {
    const contactElement = document.createElement('li');
    contactElement.className = 'contact';
  
    const infoElement = document.createElement('span');
    infoElement.innerText = contact.info;
  
    contactElement.appendChild(infoElement);
    return contactElement;
}