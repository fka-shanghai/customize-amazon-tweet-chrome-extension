chrome.storage.sync.get({
  text: "{title} {author} {url}",
}, function(items) {
  var replacement = items.text;
  replacement = replacement.replace('{author}', '$$1');
  replacement = replacement.replace('{title}', '$$2');
  replacement = replacement.replace('{url}', '$$3');
  console.log(replacement);

  var status = document.querySelector('#status').innerHTML;
  console.log(status);

  //  author の title を Amazon でチェック！ url @さんから
  var pattern = /(.+)\sの\s(.+)\sを\sAmazon\sでチェック！\s(.+)\s(.+)/;

  document.querySelector('#status').innerHTML = status.replace(pattern, replacement);
});
