# Guía de uso de i18next en Open3

## Configuración completa ✅

Se ha configurado i18next en el proyecto con soporte para español (ES) e inglés (EN).

## Estructura de archivos:

```
src/
  i18n/
    config.ts           # Configuración principal de i18next
    locales/
      es.json          # Traducciones en español
      en.json          # Traducciones en inglés
  components/
    LanguageSwitcher.tsx  # Componente para cambiar idioma
```

## Cómo usar en tus componentes:

### 1. Importar el hook:
```tsx
import { useTranslation } from 'react-i18next';
```

### 2. Usar en el componente:
```tsx
const { t, i18n } = useTranslation();

// Usar traducciones
<h1>{t('register.title')}</h1>
<label>{t('auth.email.label')}</label>
<button>{t('auth.continue')}</button>

// Cambiar idioma programáticamente
i18n.changeLanguage('en');

// Obtener idioma actual
console.log(i18n.language); // 'es' o 'en'
```

## Ejemplo completo:

```tsx
'use client';

import { useTranslation } from 'react-i18next';

export default function MyComponent() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>{t('register.title')}</h1>
      <p>{t('register.completeSubtitle')}</p>
      
      {/* Cambiar idioma */}
      <button onClick={() => i18n.changeLanguage('en')}>English</button>
      <button onClick={() => i18n.changeLanguage('es')}>Español</button>
    </div>
  );
}
```

## Añadir el LanguageSwitcher:

```tsx
import LanguageSwitcher from '@/components/LanguageSwitcher';

// En tu header o donde quieras
<LanguageSwitcher />
```

## Añadir nuevas traducciones:

### 1. En `src/i18n/locales/es.json`:
```json
{
  "nuevaSeccion": {
    "titulo": "Mi nuevo título",
    "descripcion": "Mi descripción"
  }
}
```

### 2. En `src/i18n/locales/en.json`:
```json
{
  "nuevaSeccion": {
    "titulo": "My new title",
    "descripcion": "My description"
  }
}
```

### 3. Usar en componente:
```tsx
<h1>{t('nuevaSeccion.titulo')}</h1>
<p>{t('nuevaSeccion.descripcion')}</p>
```

## Características:

✅ Detección automática del idioma del navegador
✅ Persistencia en localStorage
✅ Cambio de idioma en tiempo real
✅ Traducciones anidadas organizadas
✅ TypeScript compatible
✅ Idioma por defecto: Español

## Idiomas soportados actualmente:

- 🇪🇸 Español (es) - Por defecto
- 🇬🇧 Inglés (en)
