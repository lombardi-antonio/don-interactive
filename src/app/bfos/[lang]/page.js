import { getDictionary } from '../../../translations/dictionaries'

export default async function Page({ params: { lang } }) {
  const dict = await getDictionary(lang) // en
  return <button>{dict.privacyPolicy}</button> // Add to Cart
}