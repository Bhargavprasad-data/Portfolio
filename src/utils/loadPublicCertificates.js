// Tries to discover images from public/certificates by probing common names
// Recommended naming: cert-1.jpg, cert-2.png, ... or any of: jpg, jpeg, png, webp
export const probePublicCertificates = async (options = {}) => {
  const {
    maxCount = 50,
    basePath = '/certificates/',
    baseName = 'cert-',
    exts = ['jpg', 'jpeg', 'png', 'webp']
  } = options;

  const urls = [];
  for (let i = 1; i <= maxCount; i += 1) {
    for (const ext of exts) {
      urls.push(`${basePath}${baseName}${i}.${ext}`);
    }
  }

  const results = await Promise.all(
    urls.map((url) =>
      new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve({ ok: true, url });
        img.onerror = () => resolve({ ok: false, url });
        img.src = url;
      })
    )
  );

  const found = results.filter((r) => r.ok).map((r) => r.url);
  // De-duplicate if multiple extensions resolved for same index
  const deduped = Array.from(new Set(found));
  return deduped;
};


