// // Import stylesheets
// import './style.css';
var form = document.querySelector('#defineform');
if (form != null) {
    form.onsubmit = function () {
        var formData = new FormData(form);
        var text = formData.get('defineword');
        var apiURL = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + text;
        fetch(apiURL)
            .then(function (response) {
            return response.json();
        })
            .then(function (data) {
            var oldList = document.querySelector('.list-group');
            var listParent = document.createElement('ul');
            listParent.classList.add('list-group');
            var firstList = document.createElement('li');
            firstList.classList.add('list-group-item');
            firstList.textContent = data[0].word;
            listParent.append(firstList);
            for (var i = 0; i < data.length; i++) {
                for (var j = 0; j < data[i].meanings.length; j++) {
                    var partOfSpeechItem = document.createElement('li');
                    partOfSpeechItem.textContent = "Parts of speech: " + data[i].meanings[j].partOfSpeech;
                    var definitionTitle = document.createElement('li');
                    definitionTitle.textContent = 'Definition: ';
                    var definitionItemList = document.createElement('ul');
                    definitionTitle.append(definitionItemList);
                    for (var k = 0; k < data[i].meanings[j].definitions.length; k++) {
                        var definitionItem = document.createElement('li');
                        definitionItem.textContent = data[i].meanings[j].definitions[k].definition;
                        definitionItemList.append(definitionItem);
                    }
                    listParent.append(partOfSpeechItem, definitionTitle);
                }
            }
            oldList === null || oldList === void 0 ? void 0 : oldList.replaceWith(listParent);
            console.log(data);
        })["catch"](function (error) { return console.log(error); });
        console.log(text);
        return false; // prevent reload
    };
}
// async function getDefinition(){
//   const response = await fetch('https://api.dictionaryapi.dev/api/v2/entries/en/dog');
//   const data = await response.json();
//   console.log(data[0].word);
//   console.log(data[0].phonetic);
//   console.log(data[0].meanings[0].partOfSpeech)
//   console.log(data[0].meanings[0].definitions[0].definition)
// }
// getDefinition();
