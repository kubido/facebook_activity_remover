window.facebookActivityRemover || (window.facebookActivityRemover = {});

remover = facebookActivityRemover
remover.elementIdentifier = {
  actionContainer:    'a[aria-label="Story options"]',
  confirmationLink:   'a[data-feed-option-name="FeedDeleteOption"]'
}

remover.run = function(){ 
  remover.initializeElements();
  remover.runIntervalDeleteJob();
}

remover.initializeElements = function() {
  console.log("initializeElements")
  elements = document.querySelectorAll(remover.elementIdentifier.actionContainer);
  for (var i = 0; i <= elements.length-1; i++) {
    console.log(i)
    elements[i].click()
  }
}

remover.runIntervalDeleteJob = function(){
  elements = document.querySelectorAll(remover.elementIdentifier.confirmationLink);
  for (var i = 1; i <= elements.length; i++) {
    console.log('runIntervalDeleteJob ' + i);
    (function(index) {
        console.log(index)
        setTimeout(function() { remover.removeAction(index ,elements[index]) }, index * 1000);
    })(i);
  }
}

remover.removeAction = function(idx, element){
  link = elements[idx].click();
  console.log(idx+" delete link clicked")
  setTimeout(function() { 
    removeBtn = document.getElementsByClassName('layerConfirm')[0]
    removeBtn.click()
    console.log("confirmation delete link clicked")
  }, idx * 1000);
}