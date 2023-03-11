
function calc(){
    var checkboxes = document.getElementsByName('p1');
    var sum = 0;
    checkboxes.forEach(function(checkbox){
        if (checkbox.checked) {
          sum += parseInt(checkbox.value);
        }
    })
    document.getElementById('total').innerHTML=sum;
};
