export const getWhatsAppUrl = (categorySlug?: string) => {
  const phone = "6281234567890";
  let text = "Halo Heaven Farm, saya dari restoran [Nama Restoran] di Bandung. Saya ingin bertanya sistem supply bahan baku.";
  
  if (categorySlug) {
    const formattedCategory = categorySlug.charAt(0).toUpperCase() + categorySlug.slice(1);
    text = `Halo Heaven Farm, saya dari restoran [Nama Restoran] di Bandung. Boleh minta price list terbaru untuk bahan baku kategori ${formattedCategory}?`;
  }
  
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
};
