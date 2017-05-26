$(document).ready(function() {
    $('#encode').on('click', function(){
       $('#result').text(encode($('#word').val()));
    });

    $('#decode').on('click', function(){
       $('#result').val(decode($('#word').val()));
    });

    $('#clear').on('click', clear);
});

function encode(str){
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
    }));
}

function decode(str){
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

function clear(){
  $('#word').val('');
  $('#result').val('');
}
