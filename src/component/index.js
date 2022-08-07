import Section from "./Section";
import Subscribe from "./Subscribe";
import Footer from "./Footer";
import Heroes from "./Heroes";
import Header from "./Header";
import Navbar from "./Navbar";
import Ad from "./Ad";

const Index = () => {
  return (
    <>
      <Header />
      <Navbar />
      <Ad />
      <Heroes />
      <Subscribe />
      <Section
        header="Featured Auckland deals"
        image="https://main-cdn.grabone.co.nz/goimage/495x343/4e878fd70b0766c99669fc3e1a510a30a75827ca.jpg"
        title="Unlimited Systematised Training"
        category="F45 Henderson NZ"
        location="Auckland"
        bought="6"
        price="240"
        salePrice="59"
      />
      <Section
        header="Escapes"
        image="https://main-cdn.grabone.co.nz/goimage/fullsize/654a66797a000ded46202c39f263fb4916bda170.jpg"
        title="Inclusive Hanmer Springs Getaway"
        category="Hanmer Springs Hotel"
        location="Christchurch"
        bought="334"
        price="420"
        salePrice="189"
      />
      <Section
        header="Activities, Events & Outdoors "
        image="https://main-cdn.grabone.co.nz/goimage/fullsize/7efaaaf5ae8522aee76950508d945c9648cf85ce.jpg"
        title="One Game of Mini Golf "
        category="Around the World Lilliputt Minigolf"
        location="Mount Wellington"
        bought="184"
        price="15"
        salePrice="9"
      />
      <Section
        header="Store"
        image="https://main-cdn.grabone.co.nz/goimage/fullsize/6b937b961ff8c07efc17cf148a5651819765f066.jpg"
        title="Costa Duvet Cover Set "
        category=""
        location=""
        bought="20"
        price=""
        salePrice="69"
      />
      <Section
        header="Restaurants, Bars, Cafes"
        image="https://main-cdn.grabone.co.nz/goimage/fullsize/eb9f2415b2ad7dd654a1a13af061f0b58baf2fac.jpg"
        title="Three-Course Dining Experience at an Award"
        category="Annabelles Restaurant"
        location="Saint Heliers"
        bought="60"
        price=""
        salePrice="93"
      />
      <Section
        header="Beauty, Massage & Spa"
        image="https://main-cdn.grabone.co.nz/goimage/fullsize/1ded4838236655291d3f0eec1b9fef2753c9db82.jpg"
        title="Dermal Infusion Session"
        category=" Early Lilac Beauty & Health"
        location="Saint Johns"
        bought="29"
        price="189"
        salePrice="129"
      />
      <Section
        header="House & Garden"
        image="https://main-cdn.grabone.co.nz/goimage/fullsize/36dc33ebf78c3cb292b66d738f9d889c93e9671f.jpg"
        title="Laser Tape Measure Rangefinder"
        category=""
        location=""
        bought="30"
        price=""
        salePrice="40"
      />
      <Section
        header="Fitness & Sports"
        image="https://main-cdn.grabone.co.nz/goimage/fullsize/2e4c59ef17c65ceb21fabc5fcd25a6125ebe9848.jpg"
        title="Four Weeks of Systematised Training "
        category="F45 Pakuranga"
        location="Pakuranga"
        bought="81"
        price="240"
        salePrice="59"
      />
      <Section
        header="Automotive"
        image="https://main-cdn.grabone.co.nz/goimage/fullsize/0dde5d6037a6ab7459708946d581cb5c12f0d9bd.jpg"
        title="BasicCare 35-Point Service"
        category=" Honda Stores"
        location="Auckland "
        bought="24"
        price="270"
        salePrice="195"
      />
      <Footer />
    </>
  );
};
export default Index;
