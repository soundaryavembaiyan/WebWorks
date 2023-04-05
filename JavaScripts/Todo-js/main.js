window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");  //returns the element

     //add the todo
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const task = input.value;

        const task_edit = document.createElement('div');
        task_edit.classList.add('task');

        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');

        task_edit.appendChild(task_content_el);

        const task_input_el = document.createElement('input');
        task_input_el.classList.add('text');
        task_input_el.type = 'text';
        task_input_el.value = task;
        task_input_el.setAttribute('readonly', 'readonly');   //only read, no more edit the text..

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');

        /* 
        const task_edit = document.createElement('button');
        task_edit.classList.add('edit');
        task_edit.innerText = 'Edit';
        */

        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerText = 'Edit';

        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerText = 'Delete';

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_edit.appendChild(task_actions_el);

        list_el.appendChild(task_edit);

        input.value = '';

         //edit the todo
        task_edit_el.addEventListener('click', (e) => {   // => object call the function, 
            if (task_edit_el.innerText.toLowerCase() == "edit") {
                task_edit_el.innerText = "Save";
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();
            } else {
                task_edit_el.innerText = "Edit";
                task_input_el.setAttribute("readonly", "readonly");
            }
        });

         //remove the todo
        task_delete_el.addEventListener('click', (e) => {
            list_el.removeChild(task_edit);   
        });
    });
});