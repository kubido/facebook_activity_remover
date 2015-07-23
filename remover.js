window.facebookActivityRemover || (window.facebookActivityRemover = {});

remover = facebookActivityRemover
remover.elementIdentifier = {
  actionContainer:    '_51m- vTop _5ep7',
  activityDeleteForm: 'form[action*=\'/delete\']',
  confirmationLink:   'a[ajaxify*=\'timeline/delete\']'
}

remover.run = function(){ 
  remover.initializeElements();
  remover.runIntervalDeleteJob();
}


remover.initializeElements = function() {
  elements = document.getElementsByClassName(remover.elementIdentifier.actionContainer);
  for(i = 0; i < elements.length; i++) { 
    link = elements[i].children[0].children[1].children[0]
    link.click()
  }
}

remover.getDeleteActivityForm = function(){
  forms = document.querySelectorAll(remover.elementIdentifier.activityDeleteForm);
  return forms
}

remover.submitDeleteActivityForm = function() {
  setTimeout(function () {
    forms = remover.getDeleteActivityForm()
    for(i = 0; i < forms.length; i++) { 
      forms[i].children[3].children[1].click();
      console.log(i+" status: delete form submitted")
    }
  }, 2000)
}

remover.runIntervalDeleteJob = function(){
  var i = 0; deleteLinks = remover.deleteLinks();

  var intervalId = setInterval(function () {
      deleteLinks[i].click();
      console.log(i+" status: link clicked")
      i++;
      if (i <= deleteLinks.length) {
         remover.submitDeleteActivityForm(deleteLinks, i)
      }
   }, 2500)
  if(i == deleteLinks.length){clearInterval(intervalId)}  
}

remover.deleteLinks = function(){
  return document.querySelectorAll(remover.elementIdentifier.confirmationLink)  
}
