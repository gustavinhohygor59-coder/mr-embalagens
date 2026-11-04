/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      {
        source: "/mr-embalagens-catalogo.html",
        destination: "/catalogo",
        permanent: true,
      },
      {
        source: "/mr-embalagens-contato.html",
        destination: "/contato",
        permanent: true,
      },
      {
        source: "/mr-embalagens-cadastro.html",
        destination: "/cadastro",
        permanent: true,
      },
      {
        source: "/mr-embalagens-anuncios.html",
        destination: "/anuncios",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
