const getPosts = async () => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    try {
        const response = await fetch(url);
        const datos = await response.json();
        let showdatos = document.getElementById("post-datos");
        let ulElement = document.createElement("ul");
        ulElement.innerHTML = datos.map(post => `<li style="font-weight: bold; font-size: 20px">${post.title}</li>
        <li style="list-style-type: none;">${post.body}</li><br>`).join('');
        showdatos.appendChild(ulElement);
    } catch (error) {
        console.log(error);
    }
}