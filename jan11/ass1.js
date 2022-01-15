document.querySelector('#somu')
.addEventListener('click',function(){
    const nameInput=document.querySelector('#reddy');
    addcontact(nameInput.value);

});

function addcontact(fullname){

    if (!fullname || !fullname.trim()) return;

    const contactdiv=Document.createElement('div');
    contactdiv.classname='contact-entry';

    const nameinitialDiv=document.createElement('div');
    nameinitialDiv.classname='name-initial';
    nameinitialDiv.textContent=fullname.charAt(0);

    const fullnamediv=document.createElement('div');
    fullnamediv.className='full-name';
    fullnamediv.textContent=fullname;

    contactdiv.append(nameinitialDiv);
    contactdiv.append(fullnamediv);
    document.querySelector('#contacts-list').append(contactdiv);
}
