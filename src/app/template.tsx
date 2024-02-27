import Header from "@/components/header";
import Footer from "@/components/footer";
export default function Template({ children }: { children: React.ReactNode }) {
    return <div>
            <Header/>
            {children}
            <Footer/>
        </div>
    
  }