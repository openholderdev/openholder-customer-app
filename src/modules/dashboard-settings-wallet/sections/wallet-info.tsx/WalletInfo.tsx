export default function WalletInfo() {
  return (
    <section data-testid="wallet-info-section" className="py-4 px-4">
      <div className="px-8 py-7 bg-white rounded-lg shadow-md">
        <div className="mb-6">
          <h4 className="text-2xl font-semibold mb-3">Mis wallets</h4>
          <p className="text-sm">
            Para adquirir tokens de proyectos e interactuar con la plataforma, debes verificar tu
            wallet en una lista blanca de carteras autorizadas llamada "WHITELIST". Más información.
          </p>
        </div>
        <div>
          <p className="font-semibold mb-4">¿Qué hagoa aqui?</p>
          <nav className="px-8 text-sm">
            <li>Conecta tu wallet para que se te habiliten los botones de verificación.</li>
            <li>
              Oculta cualquier wallet que hayas añadido. Las wallets ocultas solo desaparecen de los
              listados de "Mis inversiones" pero siguen apareciendo en esta sección.
            </li>
            <li>Asígnale un alias para identificarla mejor si tienes más de una.</li>
          </nav>
        </div>
      </div>
    </section>
  );
}
