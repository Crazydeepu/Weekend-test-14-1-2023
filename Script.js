    var uname = document.getElementById("name")
    var uproff = document.getElementById("profession")
    var uage = document.getElementById("age")
    var form = document.getElementById("form")
    const error = document.getElementById("error")

    form.addEventListener('submit',(e) => {
        let messages = []

        if(uname.value === " " || uname == null) {
            messages.push("Error : Please Make sure All the fields are filled before adding in an employe")
        }

        if (messages.length>0) {
            e.preventDefault() 
            error.innerText = messages.join(', ')
        }
        
    })