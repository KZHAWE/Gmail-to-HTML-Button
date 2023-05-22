document.addEventListener('DOMContentLoaded', function() {
    var switchButton = document.getElementById('htmlSwitch');
    switchButton.addEventListener('click', function() {
      chrome.tabs.update({ url: 'https://mail.google.com/mail/u/0/?ui=html' });
    });
  });
  