function fget(i)
{
    document.getElementById('a').innerHTML=i;
    console.log(i);
}

function sget(i)
{
    document.getElementById('b').innerHTML=i;
    console.log(i);
}

function tget(i)
{
    document.getElementById('c').innerHTML=i;
    console.log(i);
}

function foget(i)
{
    document.getElementById('d').innerHTML=i;
    console.log(i);
}

function figet(i)
{
    document.getElementById('e').innerHTML=i;
    console.log(i);
}

function siget(i)
{
    document.getElementById('f').innerHTML=i;
    console.log(i);
}

function seget(i)
{
    document.getElementById('g').innerHTML=i;
    console.log(i);
}

function eiget(i)
{
    document.getElementById('h').innerHTML=i;
    console.log(i);
}

function niget(i)
{
    document.getElementById('i').innerHTML=i;
    console.log(i);
}

function final()
{
    


    if(a.innerHTML!="" && a.innerHTML==b.innerHTML && b.innerHTML== c.innerHTML )
    {
              alert("("+a.innerHTML+")  win");
    }
    else if(d.innerHTML!="" && d.innerHTML==e.innerHTML && e.innerHTML== f.innerHTML )
    {
        alert("("+d.innerHTML+") win");
    }
    else if(g.innerHTML!="" && g.innerHTML==h.innerHTML && h.innerHTML== i.innerHTML )
    {
        alert("("+g.innerHTML+") win");
    }
    else if(a.innerHTML!="" && a.innerHTML==d.innerHTML && d.innerHTML== g.innerHTML )
    {
        alert("("+a.innerHTML+") win");
    }
    else if(b.innerHTML!="" && b.innerHTML==e.innerHTML && e.innerHTML== h.innerHTML )
    {
        alert("("+b.innerHTML+") win");
    }
    else if(c.innerHTML!="" && c.innerHTML==f.innerHTML && f.innerHTML== i.innerHTML )
    {
        alert("("+c.innerHTML+") win");
    }
    else if(a.innerHTML!="" && a.innerHTML==e.innerHTML && e.innerHTML== i.innerHTML )
    {
        alert("("+a.innerHTML+") win");
    }
    else if(c.innerHTML!="" && c.innerHTML==e.innerHTML && e.innerHTML== g.innerHTML )
    {
        alert("("+c.innerHTML+") win");
    }
    else
    {
        alert("try again");
    }
}
