function create_html_tag()
{
   content = document.getElementById("input-text").value;
   para = document.createElement("p");
   data = document.createTextNode(content);
   para.appendChild(data);
   mydiv= document.getElementById("div1");
   mydiv.appendChild(para);
}

function tag()
{
    con = document.getElementById("in").value;
    parah = document.createElement("h1");
    datas = document.createTextNode(con);
    parah.appendChild(datas);
    div = document.getElementById("div2")
    div.appendChild(parah)

}