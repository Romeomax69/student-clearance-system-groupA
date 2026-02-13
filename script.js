body {
    font-family: Arial, sans-serif;
    background-color: #0f172a;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
}

.container {
    background-color: #1e293b;
    padding: 30px;
    border-radius: 12px;
    text-align: center;
    width: 300px;
}

h1 {
    margin-bottom: 20px;
}

p {
    margin-bottom: 20px;
    font-weight: bold;
}

form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

label {
    text-align: left;
}

select {
    padding: 10px;
    border-radius: 6px;
    border: none;
}

button, .btn {
    padding: 10px;
    border: none;
    border-radius: 6px;
    background-color: #3b82f6;
    color: white;
    cursor: pointer;
    margin-top: 10px;
}

button:hover, .btn:hover {
    background-color: #2563eb;
}
