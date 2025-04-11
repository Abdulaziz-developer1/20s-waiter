function myFunction(){
    for (let i = 0; i < 21; i++) {
        setTimeout(() => {
            document.getElementById('result').innerHTML = i;
            document.getElementById('left').innerHTML = 20 - i;
        }, i * 1000);
    }
    
    setTimeout(() => {
        alert("you passed");
    }, 20 * 1000 + 100);

    document.getElementById('hidden').style.display = 'none';
}