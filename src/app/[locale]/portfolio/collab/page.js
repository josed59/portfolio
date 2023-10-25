import Navbar from '@components/collab/Navbar.jsx';
import Main from '@components/collab/Main.jsx';
import CollabDescription from '@components/collab/CollabDescription.jsx';
import BodyMessage from '@components/collab/BodyMessage.jsx';
import Footer from '@components/collab/Footer.jsx';



import '@/globals.css'
 
export default function Index() {
   return(
      <div>
         <Navbar/>
         <Main>
            <CollabDescription />
            <BodyMessage />
         </Main>
         <Footer />
      </div>
   );
}