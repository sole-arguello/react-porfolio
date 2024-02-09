export const getImageUrl = (path) => {
    // `import.meta.url` proporciona la URL del módulo actual
    const currentModuleUrl = new URL(import.meta.url);
    // `new URL(path, currentModuleUrl)` crea una URL relativa al directorio actual
    return new URL(path, currentModuleUrl).href;
  }
