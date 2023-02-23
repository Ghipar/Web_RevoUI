var nama = prompt("Masukkan nama anda..");
document.getElementById("name").innerHTML = nama;
const button = document.getElementById("btn_sub");
const userName = document.getElementById("usname");
const ttl = document.getElementById("tgl");
const gen = document.getElementsByName("gender");
const mess = document.getElementById("msss");
const rs = document.getElementById("result");
const rs2 = document.getElementById("result2");
const rs3 = document.getElementById("result3");
const rs4 = document.getElementById("result4");
const rs5 = document.getElementById("result5");

function showname(inputname, inputttl, inputgen, inputmesa) {
    rs.innerText = inputname;
    rs2.innerText = inputttl;
    rs3.innerText = inputgen;
    rs4.innerText = inputmesa;
}

button.addEventListener("click", () => {
    showname(userName.value, ttl.value, gen.value, mess.value);
    var ele = document.getElementsByName("gender");
    {
        document.getElementById("result5").innerHTML =
            new Date().toLocaleString();

        for (i = 0; i < ele.length; i++) {
            if (ele[i].checked)
                document.getElementById("result3").innerHTML = ele[i].value;
        }
    }
});
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navbarToggler.addEventListener('click', () => {
  navbarCollapse.classList.toggle('show');
});

  