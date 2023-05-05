function clearCookie() {
    document.cookie ="verification=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    window.location.replace("http://localhost:3001/login");
}