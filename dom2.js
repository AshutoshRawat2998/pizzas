// var li = document.getElementsByTagName('li');
// console.log(li);
// li[1].style.backgroundColor = 'green';
// li[2].style.color = 'white';

// QUERYSELECTORALL

var li = document.querySelectorAll('.list-group-item:nth-child(2)');
li[2].style.color = 'green';

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i = 0; i< odd.length; i++)
{
    odd[i].style.BackgroundColor = 'green';
    odd[i].style.color = 'coral';

}
// li[2].style.color = 'white';