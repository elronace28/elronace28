//CHECKBOX parent child
var toggleChecks = function() {
  var isMaster = this.hasAttribute('data-master-checkbox')
  var group = this.closest('[checkbox-group]')
  var boxes = group.querySelectorAll('input[type=checkbox]:not([data-master-checkbox])')
  var master = isMaster ? this : group.querySelector('input[type=checkbox][data-master-checkbox]')

  if (isMaster) {
    // Set all children to the value of the parent
    for(var i = 0; i < boxes.length; i++) {
      boxes[i].checked = this.checked
    }
  } else {
    // Toggle all children to the state of the master
    var checkedCount = 0
    for(var i = 0; i < boxes.length; i++) {
      if(boxes[i].checked) { checkedCount += 1 }
    }

    master.checked = checkedCount == boxes.length
    master.indeterminate = !master.checked && !checkedCount == 0
  }
}

var nodes = document.querySelectorAll('[checkbox-group] input[type=checkbox]')
for(var i = 0; i < nodes.length; i++) {
  nodes[i].addEventListener('change', toggleChecks)
}
//CHECKBOX




//Radio Button 

  const sizes = ['Yes', 'No'];

  // generate the radio groups        
  const group = document.querySelector("#group");
  group.innerHTML = sizes.map((size) => `<div>
          <input type="radio" name="size" value="${size}" id="${size}">
           <label for="${size}">${size}</label>
      </div>`).join(' ');
  
  // add an event listener for the change event
  const checkboxButtons = document.querySelectorAll('input[name="size"]');
  for(const checkboxButton of checkboxButtons){
      checkboxButton.addEventListener('change', showSelected);
  }        
  
  function showSelected(e) {
      console.log(e);
      if (this.checked) {
          document.querySelector('#output').innerText = ` ${this.value}`;
      }
  }

  function myFunction() {
    var checkBox = document.getElementById('checker');
    var text = document.getElementById ('text2');
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  }

  function myFunction1() {
    var checkBox = document.getElementById('checker');
    var text = document.getElementById('text2');
    if (checkBox.checked == true){
      text.style.display = "block";
    } else {
       text.style.display = "none";
    }
  }
  




  
  

  

