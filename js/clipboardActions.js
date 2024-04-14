document.addEventListener('DOMContentLoaded', function() {
    const copyButton = document.getElementById("copyButton");
    if (copyButton) {
        copyButton.addEventListener('click', function() {
            const email = document.getElementById("email").value;
            navigator.clipboard.writeText(email).then(() => {
                const toast = document.getElementById("copy-message");
                toast.className = "toast show";
                setTimeout(() => {
                    toast.className = toast.className.replace("show", "");
                }, 3000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        });
    }

    const sendButton = document.getElementById("sendEmailButton");
    if (sendButton) {
        sendButton.addEventListener('click', function() {
            var email = document.getElementById("email").value;
            window.location.href = `mailto:${email}`;
        });
    }
});
