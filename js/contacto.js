const formulario = document.querySelector("#formulario-whatsapp");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const nombre = document.querySelector("#nombre").value.trim();
    const asunto = document.querySelector("#asunto").value;
    const mensaje = document.querySelector("#mensaje").value.trim();
    const texto = `Hola, soy ${nombre}. Quiero consultar sobre ${asunto}. ${mensaje}`;
    const enlace = `https://wa.me/525548179562?text=${encodeURIComponent(texto)}`;

    window.open(enlace, "_blank");
});

