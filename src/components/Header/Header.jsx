import { useFetch } from '../../utils/Hooks/UseFetch'
import { useTypingEffect } from '../../utils/Hooks/Typing-effect'

import Loader from '../../utils/Style/Loader'
import HeaderNavProps from './HeaderNavProps'
import HeaderProps from './HeaderProps'
import ButtonDarkMode from '../DarkMode/ButtonDarkMode'

function Header() {
   const { data, title } = useFetch('/db.json')
   // pernd en paramètre le texte puis la durée entre 2 frappes en ms
   const text = useTypingEffect(title, 100)
   const portfolio = data.basic_info
   const dataNav = portfolio?.section_name
   const dataName = portfolio?.name
   const img = portfolio?.image_header

   return (
      <>
         {data === null ? (
            <Loader />
         ) : (
            <header>
               <nav>
                  {dataNav?.map((nav, index) => (
                     <HeaderNavProps
                        key={`${nav}-${index}`}
                        lien={nav.lien}
                        title={nav.title}
                     />
                  ))}
               </nav>
               <HeaderProps me={dataName} writer={text} img={img} />
               <ButtonDarkMode />
            </header>
         )}
      </>
   )
}

export default Header
