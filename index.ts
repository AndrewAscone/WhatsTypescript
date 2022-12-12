// Import stylesheets
import './style.css';


const form: HTMLFormElement = document.querySelector('#defineform');

if(form != null){
  form.onsubmit = () =>{
    const formData = new FormData(form);

    const text = formData.get('defineword') as string;
    const requestURL = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + text;
  }
}



form.onsubmit = () => {
  const formData = new FormData(form);

  console.log(formData);
  const text = formData.get('defineword') as string;
  console.log(text);
  return false; // prevent reload
};