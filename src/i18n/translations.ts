import translationsData from './translations.json'

export type Language = 'ru' | 'uz' | 'en'

export const LANGUAGES: Language[] = ['ru', 'uz', 'en']

export const translations = translationsData as Record<Language, Record<string, any>>

export function getByPath(obj: unknown, path: string): string {
  const value = path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key]
    }
    return undefined
  }, obj)

  return typeof value === 'string' ? value : path
}
