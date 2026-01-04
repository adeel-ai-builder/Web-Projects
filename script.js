function getPath() {
    let level = document.getElementById("level").value;
    let interest = document.getElementById("interest").value;
    let result = document.getElementById("result");

    if (level === "" || interest === "") {
        result.innerHTML = "❌ Please select all fields.";
        return;
    }

    let output = "<h3>Recommended Study Path</h3><ul>";

    if (interest === "ai") {
        output += `
        <li>Python Programming 
            <a href="https://www.w3schools.com/python/" target="_blank">
                <button>View</button>
            </a>
        </li>
        <li>NumPy & Pandas 
            <a href="https://www.w3schools.com/python/numpy_intro.asp" target="_blank">
                <button>View</button>
            </a>
        </li>
        <li>Machine Learning Basics 
            <a href="https://www.youtube.com/watch?v=Gv9_4yMHFhI" target="_blank">
                <button>View</button>
            </a>
        </li>
        <li>Jupyter Notebook 
            <a href="https://jupyter.org/" target="_blank">
                <button>View</button>
            </a>
        </li>`;
    } 
    else if (interest === "web") {
        output += `
        <li>HTML & CSS 
            <a href="https://www.w3schools.com/html/" target="_blank">
                <button>View</button>
            </a>
        </li>
        <li>JavaScript 
            <a href="https://www.w3schools.com/js/" target="_blank">
                <button>View</button>
            </a>
        </li>
        <li>Bootstrap 
            <a href="https://www.w3schools.com/bootstrap/" target="_blank">
                <button>View</button>
            </a>
        </li>
        <li>Backend Basics 
            <a href="https://www.youtube.com/watch?v=Oe421EPjeBE" target="_blank">
                <button>View</button>
            </a>
        </li>`;
    } 
    else if (interest === "data") {
        output += `
        <li>Python for Data Science 
            <a href="https://www.w3schools.com/python/" target="_blank">
                <button>View</button>
            </a>
        </li>
        <li>Statistics Basics 
            <a href="https://www.youtube.com/watch?v=xxpc-HPKN28" target="_blank">
                <button>View</button>
            </a>
        </li>
        <li>Data Visualization 
            <a href="https://www.w3schools.com/python/matplotlib_intro.asp" target="_blank">
                <button>View</button>
            </a>
        </li>`;
    } 
    else if (interest === "os") {
        output += `
        <li>Process Management 
            <a href="https://www.geeksforgeeks.org/process-management-in-operating-system/" target="_blank">
                <button>View</button>
            </a>
        </li>
        <li>Threads 
            <a href="https://www.geeksforgeeks.org/thread-in-operating-system/" target="_blank">
                <button>View</button>
            </a>
        </li>
        <li>Memory Management 
            <a href="https://www.geeksforgeeks.org/memory-management-in-operating-system/" target="_blank">
                <button>View</button>
            </a>
        </li>`;
    }

    output += "</ul>";
    result.innerHTML = output;
}
