async function getUsuario() {
    const res = await fetch("https//jsonplaceholder.typecode.com/users/1");
    return res.json();
}

export default function Usuario() {
    const usuario = await getUsuario();

    return(
        <section>
            <h1> Usuario: {usuario.nome}</h1>
            <p> E-mail: {usuario.email}</p>
            <p> </p>
        </section>
    );
}