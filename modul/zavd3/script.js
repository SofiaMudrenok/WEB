let logins=["login1","login2","login3"];
document.getElementById("check").onclick = () =>
{
    let login = document.getElementById("login").value
    let password = document.getElementById("password").value
    let check = document.getElementById("check").value

    if (logins.includes(login) && 6<length(password) && check==TRUE)
    {
        document.getElementById("result").value = "ok"
    }
    else
    {
        document.getElementById("result").value = "error"
    }

}
 