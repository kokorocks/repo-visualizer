function color_hash(hash) {
    const canvas = document.getElementById('repos');
    const ctx = canvas.getContext('2d');

    const width = 16;  // Width of the canvas in pixels
    const height = 8;  // Height of the canvas in pixels
    const pixelSize = 20; // Size of each pixel block

    // Your 128-character string, where each character represents a pixel
    const bitmapString = hash//'74efad6d78e7e7207d990588be10b71eb5d80b91e025577025b1dffcfb20b3e654351c394a98f37ee0833a462947719c12c6e2356e8b07815654ee78f0f195d3' // Replace with your 128-character string

    // Ensure the string is exactly 128 characters long
    if (bitmapString.length !== 128) {
        console.error('The bitmap string must be exactly 128 characters long.');
        return;
    }

    // Define a color palette or use hex codes
    const colorPalette = [
        '#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF', '#00FFFF',
        '#800000', '#808000', '#008000', '#800080', '#008080', '#000080',
        '#C0C0C0', '#808080', '#FFFFFF', '#000000', '#FFC0CB', '#FFD700',
        '#FFA500', '#A52A2A', '#D3D3D3', '#90EE90', '#FF6347', '#40E0D0',
        '#FF1493', '#D2691E', '#CD5C5C', '#4B0082', '#FF4500', '#2E8B57',
        '#A0522D', '#5F9EA0', '#F5DEB3', '#D2B48C', '#FF8C00', '#8A2BE2',
        '#98FB98', '#D8BFD8', '#FF69B4', '#6A5ACD', '#87CEFA', '#32CD32',
        '#FA8072', '#F0E68C', '#E6E6FA', '#FFDAB9', '#FFB6C1', '#B0C4DE',
        '#ADFF2F', '#F4A460', '#D3D3D3', '#F0F8FF', '#E0FFFF', '#F5F5F5',
        '#FFE4E1', '#DCDCDC', '#B0E0E6', '#DDA0DD', '#FF00FF'
    ];
    

    // Draw the bitmap
    for (let i = 0; i < 128; i++) {
        const colorIndex = parseint(bitmapString[i]); // Convert hex character to integer
        const color = colorPalette[colorIndex] || '#0F00F0'; // Default to black if index is out of bounds

        const x = (i % width) * pixelSize;
        const y = Math.floor(i / width) * pixelSize;

        ctx.fillStyle = color;
        ctx.fillRect(x, y, pixelSize, pixelSize);
    }
function parseint(input){
    let asciis = 'qwertyuiopasdfghjklzxcvbnm1234567890QWERTYUIOPASDFGHJKLZXCVBNM'
    return asciis.indexOf(input)
}
};

window.onload = function(){
    async function hashString(text) {
        const input = text;
        const encoder = new TextEncoder(); // Encoder to convert text to Uint8Array
        const data = encoder.encode(input); // Convert input text to Uint8Array
        const hashBuffer = await crypto.subtle.digest('SHA-512', data); // Hash the data
        const hashArray = Array.from(new Uint8Array(hashBuffer)); // Convert buffer to byte array
        const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join(''); // Convert byte array to hex string
        return hashHex; // Display the hash
    }
    function color_username(username){
    // Replace 'YOUR_GITHUB_USERNAME' with your GitHub username
    //'kokos-labs';
    let apiUrl = `https://api.github.com/users/${username}/repos`;
    let url = 'https://corsproxy.io/?' + encodeURIComponent(apiUrl)

    async function fetchRepoInfo() {
        try {
            const response = await fetch(url);

            if (!response.ok) {
                throw new Error('Network response was not ok');
                document.getElementById('response').innerHTML="<div id='error'>Network response was not ok</div>"
            }

            const repos = await response.json();
            let j=[]
            repos.forEach(repo => {
                j.push(repo)
                console.log(repo)
            });
            hashString(j).then(hash=>color_hash(hash))}
        catch(error) {
            console.error(error)
            document.getElementById('response').innerHTML=`<div id='error'>${error}</div>`
        }}
    fetchRepoInfo();
}color_username('kokorocks')
document.getElementById('btn').onclick = function(){document.getElementById('response').innerHTML='';color_username(document.getElementById('username').value)}}
