import {renderMainPage} from './mainPage.js';

fetch('data.json')
.then(response => {
  return response.json();
})
.then(data => {
    renderMainPage(data);
}); 