document.getElementById("formReserva").addEventListener("submit", function(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const servicio = document.getElementById("servicio").value;
  const hora = document.getElementById("hora").value;

  const mensaje = `Hola, soy ${nombre}. Quiero reservar un turno para ${servicio} a las ${hora}.`;
  const url = `https://wa.me/5493765372920?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
});

// Compartir aplicación
document.getElementById("compartirApp").addEventListener("click", async () => {
    const enlace = "https://mega.nz/folder/RNRT2ZhD#bzyGujwPRLca2N52WOL9gQ";

    try {
        if (navigator.share) {
            await navigator.share({
                title: "Elevate Hair Studio",
                text: "💇 Descargá la app oficial de Elevate Hair Studio:",
                url: enlace
            });
        } else {
            navigator.clipboard.writeText(enlace);
            alert("El enlace fue copiado al portapapeles.");
        }
    } catch (e) {
        // El usuario canceló o hubo un error
    }
});