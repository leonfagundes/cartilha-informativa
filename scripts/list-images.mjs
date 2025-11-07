// Script auxiliar para gerar a lista de imagens
// Execute este arquivo com: node scripts/list-images.mjs

import { readdir } from 'fs/promises';
import { join } from 'path';

async function listImages() {
  try {
    const imagesDir = join(process.cwd(), 'public', 'images');
    const files = await readdir(imagesDir);
    
    // Filtrar apenas arquivos de imagem
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg'];
    const imageFiles = files.filter(file => 
      imageExtensions.some(ext => file.toLowerCase().endsWith(ext))
    );

    if (imageFiles.length === 0) {
      console.log('❌ Nenhuma imagem encontrada em public/images/');
      console.log('📝 Adicione imagens (jpg, png, webp, etc.) neste diretório.');
      return;
    }

    console.log('\n✅ Imagens encontradas em public/images/:\n');
    
    // Gerar array para copiar
    console.log('const baseImages = [');
    imageFiles.forEach((file, index) => {
      const comma = index < imageFiles.length - 1 ? ',' : '';
      console.log(`  "/images/${file}"${comma}`);
    });
    console.log(']');
    
    console.log(`\n📊 Total: ${imageFiles.length} imagens`);
    console.log('\n📋 Copie o array acima e cole em components/background-carousel.tsx');
    
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('❌ Diretório public/images/ não encontrado!');
      console.log('📁 Crie o diretório e adicione suas imagens.');
    } else {
      console.error('Erro:', error.message);
    }
  }
}

listImages();
