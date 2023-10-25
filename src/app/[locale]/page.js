import {useTranslations} from 'next-intl';
import Social from "@components/Social";
import Navbar from "@components/Navbar";
import Portfolio from "@components/Portfolio";
import AboutMe from "@components/AboutMe";
import Contact from "@components/Contact";
import Main from "@components/Main";
import '@/globals.css'

export default function Index() {
  const t = useTranslations('Index');
  /* return <h1>{t('title')}</h1>; */
  return(<div>
      <Main>
        <Social />
        <Navbar />
        <Portfolio />
        <AboutMe />
        <Contact />
      </Main>
    </div>);
}