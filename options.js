var defaultText = '{title} {author} {url}';

// Saves options to chrome.storage
function save_options() {
  var text = document.getElementById('text').value;
  chrome.storage.sync.set({
    text: text
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = '設定を保存しました。';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    text: defaultText,
  }, function(items) {
    document.getElementById('text').value = items.text;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
document.getElementById('reset').addEventListener('click', function(){
   document.getElementById('text').value = defaultText;
});
