/* Protección de los simuladores.
   Se incluye en el <head> de cada simulador. Si no hay una sesión
   abierta en el Laboratorio VR, manda a la pantalla de ingreso y,
   tras entrar, regresa al simulador. */
(function () {
  var INICIO = "https://spomalp2580.github.io/";
  var ok = false;
  try {
    var s = JSON.parse(localStorage.getItem("labvr_sesion") || "null");
    ok = !!(s && s.u && s.exp > Date.now());
  } catch (e) { ok = false; }
  if (!ok) {
    document.documentElement.style.display = "none";
    location.replace(INICIO + "?volver=" + encodeURIComponent(location.href));
  }
})();
