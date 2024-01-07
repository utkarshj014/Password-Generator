const characters=[
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "abcdefghijklmnopqrstuvwxyz",
    "0123456789",
    "!@#$%^&*()-"
]


const randomNumber = x => Math.floor(Math.random()*x.length);

const passwordBox = document.getElementById("password");

const createPassword = () => {
    
    passwordBox.value = "";
    
    characters.forEach(ele => {
        passwordBox.value += ele[randomNumber(ele)];
    })

    let count = 8;

    while(count>0){

        const item = characters[randomNumber(characters)];
        passwordBox.value += item[randomNumber(item)];
        count--;
    }
}

const button = document.getElementsByTagName("button")[0];

button.addEventListener("click", e => {
    createPassword();
})

const copyIcon = document.querySelector(".copy-image");

copyIcon.addEventListener("click", e => {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
})