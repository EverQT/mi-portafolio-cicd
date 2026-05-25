const contenido = document.getElementById('contenido');

function mostrarInicio() {
    contenido.innerHTML = `
        <section class="intro">
            <h2>Bienvenido a mi Portafolio</h2>
            <p>Soy un desarrollador web aprendiendo CI/CD.</p>
            <p>Este sitio se despliega automáticamente con GitHub Actions.</p>
        </section>
    `;
    document.getElementById('mensaje-dinamico').textContent = 'Vista: Inicio';
}

function mostrarProyectos() {
    contenido.innerHTML = `
        <section class="intro">
            <h2>Mis Proyectos</h2>
            <ul>
                <li>🌐 Sitio web estático con S3</li>
                <li>⚙️ Pipeline CI/CD con GitHub Actions</li>
                <li>☁️ Despliegue en la nube AWS</li>
            </ul>
        </section>
    `;
    document.getElementById('mensaje-dinamico').textContent = 'Vista: Proyectos';
}

function mostrarContacto() {
    contenido.innerHTML = `
        <section class="intro">
            <h2>Contacto</h2>
            <p>📧 Email: estudiante@ejemplo.com</p>
            <p>🐙 GitHub: @tuusuario</p>
            <p>🔗 Proyecto disponible en la nube</p>
        </section>
    `;
    document.getElementById('mensaje-dinamico').textContent = 'Vista: Contacto';
}

document.getElementById('btn-inicio').addEventListener('click', mostrarInicio);
document.getElementById('btn-proyectos').addEventListener('click', mostrarProyectos);
document.getElementById('btn-contacto').addEventListener('click', mostrarContacto);