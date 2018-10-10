function bouton1() {


    var x = document.getElementById('test');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        document.getElementById('aa').innerHTML='-';
    } else {
        x.style.display = 'none';
        document.getElementById('aa').innerHTML='+';
    }
}

function bouton2() {


    var x = document.getElementById('compétences');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        document.getElementById('bb').innerHTML='-';
    } else {
        x.style.display = 'none';
        document.getElementById('bb').innerHTML='+';
    }
}

function bouton3() {


    var x = document.getElementById('test2');
    if (x.style.display === 'none') {
        x.style.display = 'block';
        document.getElementById('cc').innerHTML='-';
    } else {
        x.style.display = 'none';
        document.getElementById('cc').innerHTML='+';
    }
}