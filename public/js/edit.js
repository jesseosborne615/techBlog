var currentPath = window.location.href.split('/');
var id = currentPath[currentPath.length - 1];

const loginFormHandler = async (event) => {
    event.preventDefault();
  
    
    // Collect values from the login form
    const name = document.querySelector('.name').value.trim();
    const description = document.querySelector('.description').value.trim();
  
    if (name && description)  {
    
      const response = await fetch('/api/posts/' + id, {
        method: 'PUT',
        body: JSON.stringify({ name, description}),
        headers: { 'Content-Type': 'application/json' },
        if(error) {console.log(error)}
        
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };


  document
  .querySelector('.editbutton')
  .addEventListener('click', loginFormHandler);