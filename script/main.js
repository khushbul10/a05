
document.querySelectorAll('.btn-completed').forEach(button => {
    button.addEventListener('click', (e) => {
        let card = e.target.closest('.card');
        console.log(card.children[0].innerText);

        let taskLeft = document.getElementById('task-left').innerText;
        let teskCompleted = document.getElementById('task-completed').innerText;
        teskCompleted = parseInt(teskCompleted);
        teskCompleted++;
        document.getElementById('task-completed').innerText = teskCompleted;
        taskLeft = parseInt(taskLeft);
        taskLeft--;
        document.getElementById('task-left').innerText = taskLeft;
        card.children[3].children[1].setAttribute('disabled', 'disabled');

        let time = new Date();
        let timeString = time.toLocaleTimeString();
        document.getElementById('activity-update').innerHTML += `
            <p class="mt-4 p-4 rounded-xl bg-[#F4F7FF]">You have complete the task ${card.children[1].innerText} at ${timeString}</p>
        `
        alert('Board updated Successfully');
        if (taskLeft === 0) {
            alert('Congratulation! You have completed all current tasks');
        }
    });
});

document.getElementById('blog-box').addEventListener('click', function() {
    window.location.href = 'blogs.html';
});