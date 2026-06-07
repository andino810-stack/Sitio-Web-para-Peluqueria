document.getElementById("formReserva").addEventListener("submit", function(e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const servicio = document.getElementById("servicio").value;
  const hora = document.getElementById("hora").value;

  const mensaje = `Hola, soy ${nombre}. Quiero reservar un turno para ${servicio} a las ${hora}.`;
  const url = `https://wa.me/5493765372920?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
});
