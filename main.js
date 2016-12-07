var status = document.querySelector('#status').innerHTML;
console.log(status);

//  author の title を Amazon でチェック！ url @さんから
var pattern = /(.+)\sの\s(.+)\sを\sAmazon\sでチェック！\s(.+)\s(.+)/;

document.querySelector('#status').innerHTML = status.replace(pattern, "$2 $1 $3");
