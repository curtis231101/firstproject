   import ProductsPage from "./products/page";
   import AboutPage from "./about/page";
    import Navbar from "./components/Navbar";
    import ServicesPage from "./services/page";
    import ContactPage from "./contact/page";
   export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    
      <div className="">
        
        <Navbar />
        <div className="">
          {children}
        </div>
        <AboutPage />
        <ProductsPage />
        <ServicesPage />
        <ContactPage />
      </div>
  );
}